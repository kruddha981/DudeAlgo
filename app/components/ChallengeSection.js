"use client";
import { useState } from "react";

export default function ChallengeSection() {
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const challengeXp = 120;
  const challengeBadges = [
    { label: "Daily Solver", unlocked: true },
    { label: "Hash Hero", unlocked: true },
    { label: "Consistency Streak", unlocked: false },
  ];

  return (
    <section id="challenge" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb923c]" />
            Practice
          </span>
          <h2 className="section-heading mt-6">
            Daily{" "}
            <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-lg mx-auto text-[15px] leading-relaxed tracking-tight">
            Sharpen your problem-solving skills with daily coding challenges. Build consistency and track your progress.
          </p>
        </div>

        {/* Challenge Card */}
        <div className="glass-card !overflow-hidden !hover:transform-none">
          <div className="px-9 py-4 border-b border-[rgba(124,92,252,0.08)] bg-[rgba(124,92,252,0.03)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#a78bfa] font-bold">Progress XP</p>
                <p className="text-[12px] text-[#c8c8d8] mt-1">Complete this challenge to earn +30 XP</p>
              </div>
              <div className="text-sm font-bold text-white">Total: {challengeXp} XP</div>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-[rgba(124,92,252,0.12)] overflow-hidden">
              <div className="h-full w-[70%] bg-gradient-to-r from-[#7c5cfc] via-[#a78bfa] to-[#22d3ee]" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {challengeBadges.map((badge) => (
                <span
                  key={badge.label}
                  className={`text-[10px] font-semibold px-3 py-1.5 rounded-full border ${
                    badge.unlocked
                      ? "border-[rgba(52,211,153,0.25)] bg-[rgba(52,211,153,0.08)] text-[#bbf7d0]"
                      : "border-[rgba(124,92,252,0.15)] bg-[rgba(124,92,252,0.05)] text-[#8a8aac]"
                  }`}
                >
                  {badge.unlocked ? "✓ " : "◦ "}{badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-9 py-6 border-b border-[rgba(124,92,252,0.08)]">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#22d3ee] via-[#7c5cfc] to-[#a78bfa] flex items-center justify-center text-xl shadow-lg shadow-[#7c5cfc]/20">
                🎯
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-extrabold tracking-tighter">Two Sum</h3>
                  <span className="text-[9px] px-3 py-1 rounded-full bg-[rgba(34,211,238,0.08)] text-[#22d3ee] font-bold uppercase tracking-[0.12em] border border-[rgba(34,211,238,0.15)]">
                    Easy
                  </span>
                </div>
                <p className="text-[11px] text-[#7b7b9e] mt-1 font-medium">Array · Hash Table</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <div className="text-right">
                <div className="text-[10px] text-[#7b7b9e] font-medium uppercase tracking-wider">Acceptance</div>
                <div className="text-sm font-extrabold text-[#34d399] tracking-tight">72.4%</div>
              </div>
              <div className="w-px h-9 bg-[rgba(124,92,252,0.08)]" />
              <div className="text-right">
                <div className="text-[10px] text-[#7b7b9e] font-medium uppercase tracking-wider">Day</div>
                <div className="text-sm font-extrabold text-[#a78bfa] tracking-tight">#142</div>
              </div>
            </div>
          </div>

          {/* Problem */}
          <div className="px-9 py-7 space-y-6">
            <div>
              <p className="text-[13.5px] text-[#c8c8d8] leading-relaxed tracking-tight">
                Given an array of integers <code className="bg-[rgba(124,92,252,0.1)] text-[#a78bfa] px-1.5 py-0.5 rounded-md text-[12px] font-mono">nums</code> and
                an integer <code className="bg-[rgba(124,92,252,0.1)] text-[#a78bfa] px-1.5 py-0.5 rounded-md text-[12px] font-mono">target</code>, return
                indices of the two numbers such that they add up
                to <code className="bg-[rgba(124,92,252,0.1)] text-[#a78bfa] px-1.5 py-0.5 rounded-md text-[12px] font-mono">target</code>.
              </p>
              <p className="text-[13px] text-[#7b7b9e] mt-3 tracking-tight">
                You may assume that each input would have <strong className="text-[#c8c8d8]">exactly one solution</strong>, and you may not use the same element twice.
              </p>
            </div>

            {/* Example */}
            <div className="bg-[rgba(8,8,18,0.7)] rounded-2xl p-6 border border-[rgba(124,92,252,0.06)]">
              <div className="text-[10px] text-[#a78bfa] font-bold uppercase tracking-[0.15em] mb-3.5">Example</div>
              <div className="font-mono text-[13px] space-y-2">
                <p className="text-[#7b7b9e]">
                  <span className="text-[#7c5cfc] font-semibold">Input:</span>{" "}
                  <span className="text-[#c8c8d8]">nums = [2, 7, 11, 15], target = 9</span>
                </p>
                <p className="text-[#7b7b9e]">
                  <span className="text-[#34d399] font-semibold">Output:</span>{" "}
                  <span className="text-[#c8c8d8]">[0, 1]</span>
                </p>
                <p className="text-[#4a4a6a] text-[11px] mt-2.5">
                  Explanation: nums[0] + nums[1] = 2 + 7 = 9
                </p>
              </div>
            </div>

            {/* Constraints */}
            <div className="flex flex-wrap gap-2">
              {["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "One valid answer exists"].map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-medium px-3 py-1.5 rounded-lg bg-[rgba(124,92,252,0.04)] text-[#7b7b9e] border border-[rgba(124,92,252,0.06)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="px-9 py-5 border-t border-[rgba(124,92,252,0.08)] flex flex-wrap gap-3">
            <button
              onClick={() => { setShowHint(!showHint); setShowSolution(false); }}
              className={`glow-btn text-[13px] ${showHint ? "glow-btn-primary" : "glow-btn-secondary"}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              {showHint ? "Hide Hint" : "View Hint"}
            </button>
            <button
              onClick={() => { setShowSolution(!showSolution); setShowHint(false); }}
              className={`glow-btn text-[13px] ${showSolution ? "glow-btn-primary" : "glow-btn-secondary"}`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>

          {/* Hint */}
          {showHint && (
            <div className="px-9 pb-7 chat-bubble">
              <div className="bg-[rgba(251,146,60,0.04)] border border-[rgba(251,146,60,0.12)] rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="text-lg">💡</span>
                  <h4 className="text-[12px] font-bold text-[#fb923c] uppercase tracking-[0.1em]">Hint</h4>
                </div>
                <div className="text-[13px] text-[#c8c8d8] space-y-2.5 tracking-tight leading-relaxed">
                  <p>Think about what value you need to find for each number.</p>
                  <p>
                    For each element <code className="bg-[rgba(124,92,252,0.1)] text-[#a78bfa] px-1.5 py-0.5 rounded-md text-[12px] font-mono">x</code>, you need to find{" "}
                    <code className="bg-[rgba(124,92,252,0.1)] text-[#a78bfa] px-1.5 py-0.5 rounded-md text-[12px] font-mono">target - x</code> in the remaining array.
                  </p>
                  <p className="text-[#7b7b9e]">Can you use a <strong className="text-[#a78bfa]">Hash Map</strong> to do this in one pass?</p>
                </div>
              </div>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="px-9 pb-7 chat-bubble">
              <div className="bg-[rgba(34,211,238,0.03)] border border-[rgba(34,211,238,0.1)] rounded-2xl p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg">🧩</span>
                  <h4 className="text-[12px] font-bold text-[#22d3ee] uppercase tracking-[0.1em]">Solution — Hash Map Approach</h4>
                </div>
                <pre className="text-[13px] font-mono text-[#c8c8d8] bg-[rgba(8,8,18,0.7)] rounded-xl p-5 overflow-x-auto border border-[rgba(124,92,252,0.06)] leading-relaxed">
{`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return []; // No solution found
}`}
                </pre>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-lg bg-[rgba(34,211,238,0.06)] text-[#22d3ee] border border-[rgba(34,211,238,0.12)] tracking-wider uppercase">
                    Time: O(n)
                  </span>
                  <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-lg bg-[rgba(167,139,250,0.06)] text-[#a78bfa] border border-[rgba(167,139,250,0.12)] tracking-wider uppercase">
                    Space: O(n)
                  </span>
                </div>
                <p className="text-[12px] text-[#7b7b9e] mt-4 leading-relaxed tracking-tight">
                  We iterate through the array once, storing each number and its index in a hash map. 
                  For each number, we check if its complement (target - current) already exists in the map.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
