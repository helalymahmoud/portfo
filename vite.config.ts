import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Fallback used when VITE_SITE_URL is not set (for example on a fresh clone
// before `.env` is created). Keeps the canonical/OG URLs valid instead of
// leaving a literal %VITE_SITE_URL% placeholder in the built HTML.
const DEFAULT_SITE_URL = 'https://portfolio.example.com'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  process.env.VITE_SITE_URL ??= env.VITE_SITE_URL || DEFAULT_SITE_URL

  return {
    plugins: [react(), tailwindcss()],
  }
})
