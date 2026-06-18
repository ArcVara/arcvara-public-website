import { useEffect, useRef } from 'react'

const nodes = [
  { id: 0, x: 15, y: 20, r: 5, type: 'main' },
  { id: 1, x: 35, y: 10, r: 3.5, type: 'mid' },
  { id: 2, x: 55, y: 25, r: 10, type: 'hub' },
  { id: 3, x: 75, y: 15, r: 3, type: 'small' },
  { id: 4, x: 85, y: 35, r: 4, type: 'mid' },
  { id: 5, x: 20, y: 50, r: 4, type: 'mid' },
  { id: 6, x: 40, y: 60, r: 3, type: 'small' },
  { id: 7, x: 65, y: 55, r: 5, type: 'main' },
  { id: 8, x: 80, y: 65, r: 3.5, type: 'mid' },
  { id: 9, x: 10, y: 75, r: 3, type: 'small' },
  { id: 10, x: 30, y: 80, r: 4, type: 'mid' },
  { id: 11, x: 50, y: 85, r: 3, type: 'small' },
  { id: 12, x: 70, y: 80, r: 4.5, type: 'main' },
  { id: 13, x: 90, y: 75, r: 3, type: 'small' },
  { id: 14, x: 5, y: 45, r: 2.5, type: 'small' },
  { id: 15, x: 95, y: 50, r: 2.5, type: 'small' },
  { id: 16, x: 45, y: 40, r: 3, type: 'small' },
]

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 2], [2, 7],
  [7, 8], [4, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [7, 12], [12, 13], [8, 13],
  [14, 5], [4, 15], [2, 16], [16, 6],
]

export default function GraphBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C2CB" stopOpacity="1" />
            <stop offset="100%" stopColor="#00C2CB" stopOpacity="0" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="0.3" />
          </filter>
        </defs>

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[a]
          const nb = nodes[b]
          const delay = (i * 0.3) % 4
          return (
            <line
              key={`edge-${i}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="#1A7FAD"
              strokeWidth="0.3"
              strokeDasharray="2 1.5"
              opacity="0.5"
              style={{
                animation: `edgeDash ${3 + (i % 3)}s linear ${delay}s infinite`,
              }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const color = node.type === 'hub' ? '#00C2CB' : node.type === 'main' ? '#1A7FAD' : '#1A7FAD'
          const delay = (node.id * 0.4) % 3
          return (
            <g key={`node-${node.id}`}>
              {node.type === 'hub' && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r * 2.5}
                  fill="#00C2CB"
                  opacity="0.08"
                  style={{ animation: `nodePulse ${4}s ease-in-out ${delay}s infinite` }}
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={color}
                opacity={node.type === 'hub' ? 0.9 : 0.6}
                style={{
                  animation: `nodePulse ${3 + (node.id % 2)}s ease-in-out ${delay}s infinite`,
                }}
              />
              {node.type === 'hub' && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.r * 0.45}
                  fill="#0D1F3C"
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(0,194,203,0.04) 0%, transparent 65%), radial-gradient(ellipse at 20% 70%, rgba(26,127,173,0.05) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}
