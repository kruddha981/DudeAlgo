"use client";

const TOKENS = [
  { text: "O(log n)", top: "10%", left: "8%", size: "text-xs sm:text-sm", tone: "text-[#a78bfa]", speed: "algo-token-drift-slow" },
  { text: "BFS", top: "18%", left: "78%", size: "text-xs sm:text-sm", tone: "text-[#67e8f9]", speed: "algo-token-drift-fast" },
  { text: "DFS", top: "34%", left: "15%", size: "text-xs", tone: "text-[#f9a8d4]", speed: "algo-token-drift-mid" },
  { text: "heap.push()", top: "52%", left: "82%", size: "text-[10px] sm:text-xs", tone: "text-[#c4b5fd]", speed: "algo-token-drift-mid" },
  { text: "dp[i][j]", top: "66%", left: "10%", size: "text-[10px] sm:text-xs", tone: "text-[#93c5fd]", speed: "algo-token-drift-slow" },
  { text: "<node/>", top: "74%", left: "74%", size: "text-xs", tone: "text-[#a7f3d0]", speed: "algo-token-drift-fast" },
  { text: "while (l <= r)", top: "84%", left: "28%", size: "text-[10px] sm:text-xs", tone: "text-[#f0abfc]", speed: "algo-token-drift-mid" },
];

const NODES = [
  { top: "14%", left: "30%", size: "w-2.5 h-2.5", hue: "bg-[#7c5cfc]/45", speed: "algo-node-float-a" },
  { top: "22%", left: "56%", size: "w-2 h-2", hue: "bg-[#22d3ee]/40", speed: "algo-node-float-b" },
  { top: "40%", left: "70%", size: "w-3 h-3", hue: "bg-[#f472b6]/30", speed: "algo-node-float-c" },
  { top: "58%", left: "24%", size: "w-2 h-2", hue: "bg-[#34d399]/35", speed: "algo-node-float-b" },
  { top: "76%", left: "54%", size: "w-2.5 h-2.5", hue: "bg-[#a78bfa]/35", speed: "algo-node-float-a" },
];

export default function AlgorithmBackdrop() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 -z-10 overflow-hidden h-screen" aria-hidden="true">
      <div className="absolute inset-0 code-screen-fade algo-backdrop-hero" />

      <div className="absolute inset-0 opacity-40 algo-tokens-hero">
        {TOKENS.map((token) => (
          <span
            key={`${token.text}-${token.top}-${token.left}`}
            className={`absolute font-mono ${token.size} ${token.tone} ${token.speed} select-none pointer-events-none`}
            style={{ top: token.top, left: token.left }}
          >
            {token.text}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 opacity-55 algo-nodes-hero">
        {NODES.map((node, index) => (
          <div
            key={`${node.top}-${node.left}`}
            className={`absolute ${node.size} ${node.hue} ${node.speed} rounded-full shadow-[0_0_14px_rgba(124,92,252,0.22)] pointer-events-none`}
            style={{ top: node.top, left: node.left, animationDelay: `${index * -2.6}s` }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-[0.16] algo-edges-hero" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M10 24 L30 14 L56 22 L76 40" className="algo-edge algo-edge-a" />
        <path d="M28 58 L48 42 L72 58 L88 74" className="algo-edge algo-edge-b" />
        <path d="M18 82 L40 70 L62 78" className="algo-edge algo-edge-c" />
      </svg>
    </div>
  );
}
