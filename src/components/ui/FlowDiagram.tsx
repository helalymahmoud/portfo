interface DiagNode {
  x: number
  y: number
  w: number
  h: number
  label: string
  accent?: boolean
}

const CLIENT: DiagNode = { x: 136, y: 24, w: 128, h: 48, label: 'Client' }
const API: DiagNode = { x: 104, y: 118, w: 192, h: 56, label: 'API · NestJS', accent: true }

const DOWNSTREAM: Array<DiagNode & { edge: string }> = [
  { x: 20, y: 250, w: 86, h: 46, label: 'Auth', edge: 'JWT' },
  { x: 112, y: 250, w: 86, h: 46, label: 'Billing', edge: 'Stripe' },
  { x: 204, y: 250, w: 86, h: 46, label: 'Data', edge: 'Prisma' },
  { x: 296, y: 250, w: 86, h: 46, label: 'Realtime', edge: 'WS' },
]

function Node({ node, muted = false }: { node: DiagNode; muted?: boolean }) {
  const fill = node.accent ? 'var(--color-accent)' : muted ? 'var(--color-surface-muted)' : 'var(--color-surface)'
  const stroke = node.accent ? 'var(--color-accent-strong)' : 'var(--color-line-strong)'
  const text = node.accent ? 'var(--color-accent-ink)' : 'var(--color-ink)'

  return (
    <g>
      {node.accent ? (
        <rect
          x={node.x - 6}
          y={node.y - 6}
          width={node.w + 12}
          height={node.h + 12}
          rx={18}
          fill="var(--color-accent)"
          opacity={0.12}
        />
      ) : null}
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={12}
        fill={fill}
        stroke={stroke}
        strokeWidth="1.25"
      />
      <text
        x={node.x + node.w / 2}
        y={node.y + node.h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-mono)"
        fontSize="13"
        fontWeight={node.accent ? 600 : 500}
        fill={text}
      >
        {node.label}
      </text>
    </g>
  )
}

/**
 * Custom, lightweight diagram of a request moving through an API to its
 * downstream services. It is a conceptual illustration — no real metrics
 * or system output are implied.
 */
export function FlowDiagram() {
  const apiBottom = API.y + API.h
  const apiCenterX = API.x + API.w / 2

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(120%_100%_at_50%_0%,black,transparent_78%)]"
      />

      <div className="relative mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[0.65rem] tracking-[0.18em] text-ink-faint uppercase">
          request flow
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-muted px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-ink-faint uppercase">
          Conceptual
        </span>
      </div>

      <svg
        viewBox="0 0 400 330"
        role="img"
        aria-label="Conceptual diagram: a client request passes through an API gateway to authentication, billing, data and real-time services."
        className="relative h-auto w-full"
      >
        {/* Client -> API */}
        <line
          x1={200}
          y1={CLIENT.y + CLIENT.h}
          x2={200}
          y2={API.y}
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          className="animate-flow"
        />

        {/* API -> downstream */}
        <g stroke="var(--color-line-strong)" strokeWidth="1.5" strokeLinecap="round">
          {DOWNSTREAM.map((node) => (
            <line
              key={node.label}
              x1={apiCenterX}
              y1={apiBottom}
              x2={node.x + node.w / 2}
              y2={node.y}
            />
          ))}
        </g>

        {/* Edge labels */}
        {DOWNSTREAM.map((node) => (
          <text
            key={`${node.label}-edge`}
            x={(apiCenterX + node.x + node.w / 2) / 2}
            y={apiBottom + 34}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--color-ink-faint)"
          >
            {node.edge}
          </text>
        ))}

        <Node node={CLIENT} muted />
        <Node node={API} />
        {DOWNSTREAM.map((node) => (
          <Node key={node.label} node={node} muted />
        ))}
      </svg>

      <figcaption className="relative mt-3 text-xs text-ink-faint">
        A conceptual view of how a request moves through an API to the services behind it.
      </figcaption>
    </figure>
  )
}
