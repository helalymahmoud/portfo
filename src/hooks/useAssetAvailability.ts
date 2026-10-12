import { useEffect, useState } from 'react'

export type AssetStatus = 'checking' | 'available' | 'missing'

/**
 * Shared, module-level probe cache.
 *
 * Several components (navigation, hero, contact) check the same asset, so
 * the network request is made once and every consumer reuses the result.
 */
const probeCache = new Map<string, Promise<AssetStatus>>()

/**
 * HEAD-probe a static asset and confirm it really is the expected file.
 *
 * The content-type is verified as well as the status code because static
 * hosts and dev servers often return a 200 HTML fallback for unknown
 * paths - we must not mistake that for a real file.
 */
function probe(url: string): Promise<AssetStatus> {
  return fetch(url, { method: 'HEAD' })
    .then((response) => {
      const contentType = response.headers.get('content-type') ?? ''
      const isPdf = contentType.toLowerCase().includes('pdf')
      return response.ok && isPdf ? 'available' : 'missing'
    })
    .catch<AssetStatus>(() => 'missing')
}

/**
 * Check whether a static asset (for example the CV PDF) actually exists
 * before we offer it for download. When the asset is missing the UI
 * degrades to an honest "coming soon" state instead of a broken link.
 */
export function useAssetAvailability(url: string): AssetStatus {
  const [status, setStatus] = useState<AssetStatus>('checking')

  useEffect(() => {
    let cancelled = false

    let pending = probeCache.get(url)
    if (!pending) {
      pending = probe(url)
      probeCache.set(url, pending)
    }

    void pending.then((result) => {
      if (!cancelled) setStatus(result)
    })

    return () => {
      cancelled = true
    }
  }, [url])

  return status
}
