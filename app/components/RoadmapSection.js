"use client";
import { useState, useEffect, useRef } from "react";

const topics = [
  {
    title: "Arrays",
    emoji: "📊",
    color: "#7c5cfc",
    what: "A contiguous block of memory storing elements of the same type, accessed by index.",
    uses: "Image processing, database records, spreadsheets, game boards, sensor data buffers.",
    explanation:
      "Think of an array like a row of numbered lockers. Each locker (index) holds one item, and you can instantly go to any locker if you know its number.",
    complexity: "Access: O(1) · Search: O(n) · Insert: O(n) · Delete: O(n)",
  },
  {
    title: "Stacks",
    emoji: "📚",
    color: "#a78bfa",
    what: "A Last-In-First-Out (LIFO) data structure where elements are added and removed from the top.",
    uses: "Undo/redo operations, browser history, expression evaluation, function call management.",
    explanation:
      "Imagine a stack of plates. You always add a new plate on top, and remove from the top. The last plate placed is the first one you pick up.",
    complexity: "Push: O(1) · Pop: O(1) · Peek: O(1) · Search: O(n)",
  },
  {
    title: "Queues",
    emoji: "🎟️",
    color: "#22d3ee",
    what: "A First-In-First-Out (FIFO) data structure where elements are added at the rear and removed from the front.",
    uses: "Print job scheduling, customer service lines, breadth-first search, message queues.",
    explanation:
      "Like standing in line at a movie theater. The first person in line gets served first. New people join at the back.",
    complexity: "Enqueue: O(1) · Dequeue: O(1) · Peek: O(1) · Search: O(n)",
  },
  {
    title: "Linked Lists",
    emoji: "🔗",
    color: "#f472b6",
    what: "A linear collection of nodes, each containing data and a reference (pointer) to the next node.",
    uses: "Music playlists, image viewers, undo history, memory allocation, polynomial arithmetic.",
    explanation:
      "Picture a treasure hunt where each clue tells you where to find the next one. Each node knows its value and points to the next node.",
    complexity: "Access: O(n) · Search: O(n) · Insert (head): O(1) · Delete (head): O(1)",
  },
  {
    title: "Trees",
    emoji: "🌳",
    color: "#34d399",
    what: "A hierarchical data structure with a root node and child nodes forming a parent-child relationship.",
    uses: "File systems, DOM structure, decision engines, databases (B-trees), AI game trees.",
    explanation:
      "Like a family tree. It starts with one ancestor (root) and branches out. Each person can have children, but only one parent.",
    complexity: "Search (BST): O(log n) · Insert (BST): O(log n) · Delete (BST): O(log n)",
  },
  {
    title: "Graphs",
    emoji: "🕸️",
    color: "#fb923c",
    what: "A collection of vertices (nodes) connected by edges, representing relationships between objects.",
    uses: "Social networks, GPS navigation, recommendation systems, network routing, dependency resolution.",
    explanation:
      "Think of a city map. Intersections are nodes and roads are edges. Some roads may be one-way (directed) or two-way (undirected).",
    complexity: "BFS/DFS: O(V+E) · Dijkstra: O((V+E) log V) · Space: O(V+E)",
  },
];

function TopicCard({ topic, index, isActive, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 120);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`reveal glass-card p-6 cursor-pointer group relative ${
        isActive
          ? "!border-[rgba(124,92,252,0.45)] !shadow-[0_0_50px_rgba(124,92,252,0.1)]"
          : ""
      }`}
    >
      {/* Hover Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-[20px]"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${topic.color}0d 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="text-3xl mb-3.5 group-hover:scale-105 transition-transform duration-500">{topic.emoji}</div>
        <h3 className="text-lg font-bold tracking-tight mb-1.5">{topic.title}</h3>
        <p className="text-[10px] text-[#7b7b9e] font-medium group-hover:text-[#a78bfa] transition-colors duration-300">Click to explore</p>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-[20px]"
          style={{
            background: `linear-gradient(90deg, ${topic.color}, transparent)`,
          }}
        />
      )}
    </div>
  );
}

function TopicDetail({ topic }) {
  return (
    <div className="glass-card p-9 chat-bubble !hover:transform-none">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{topic.emoji}</span>
        <div>
          <h3 className="text-2xl font-extrabold tracking-tighter">{topic.title}</h3>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: topic.color }} />
            <span className="text-[11px] text-[#7b7b9e] font-medium">Data Structure</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <h4 className="text-[11px] font-bold text-[#a78bfa] uppercase tracking-[0.15em]">What it is</h4>
            </div>
            <p className="text-[13px] text-[#b8b8d0] leading-relaxed tracking-tight">{topic.what}</p>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h4 className="text-[11px] font-bold text-[#22d3ee] uppercase tracking-[0.15em]">Real World Uses</h4>
            </div>
            <p className="text-[13px] text-[#b8b8d0] leading-relaxed tracking-tight">{topic.uses}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              <h4 className="text-[11px] font-bold text-[#34d399] uppercase tracking-[0.15em]">Easy Explanation</h4>
            </div>
            <p className="text-[13px] text-[#b8b8d0] leading-relaxed tracking-tight">{topic.explanation}</p>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <h4 className="text-[11px] font-bold text-[#fb923c] uppercase tracking-[0.15em]">Time Complexity</h4>
            </div>
            <p className="text-[13px] text-[#b8b8d0] leading-relaxed font-mono tracking-normal">{topic.complexity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="roadmap" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6]" />
            Learning Path
          </span>
          <h2 className="section-heading mt-6">
            Your DSA{" "}
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-lg mx-auto text-[15px] leading-relaxed tracking-tight">
            Master each data structure step by step. Click on any topic to explore its details, real-world applications, and complexity analysis.
          </p>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-7">
          {topics.map((topic, i) => (
            <TopicCard
              key={topic.title}
              topic={topic}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Detail */}
        {activeIndex !== null && <TopicDetail topic={topics[activeIndex]} />}
      </div>
    </section>
  );
}
