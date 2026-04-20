"use client";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#7c5cfc"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs>
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.3 2.1-.8 3h.8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1l1 5H8l1-5H8a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h.8A6 6 0 0 1 8 6a4 4 0 0 1 4-4z"/>
      </svg>
    ),
    title: "AI Tutor",
    description:
      "Get personalized, beginner-friendly explanations for any DSA concept. Powered by Gemini — your always-available tutor that adapts to your level.",
    gradient: "from-[#7c5cfc] to-[#a78bfa]",
    glow: "rgba(124, 92, 252, 0.08)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22d3ee"/><stop offset="100%" stopColor="#7c5cfc"/></linearGradient></defs>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Visual Learning",
    description:
      "Watch algorithms come alive with beautiful animations. Understand sorting, searching, and graph traversals through interactive visual simulations.",
    gradient: "from-[#22d3ee] to-[#7c5cfc]",
    glow: "rgba(34, 211, 238, 0.08)",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#f472b6"/><stop offset="100%" stopColor="#7c5cfc"/></linearGradient></defs>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Daily Challenges",
    description:
      "Sharpen your skills with daily coding problems. From easy to hard, track your progress and build consistency with streaks and achievements.",
    gradient: "from-[#f472b6] to-[#7c5cfc]",
    glow: "rgba(244, 114, 182, 0.08)",
  },
];

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), index * 180);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={cardRef} className="reveal glass-card p-7 sm:p-8 group">
      {/* Icon */}
      <div
        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500"
        style={{ background: `linear-gradient(135deg, ${feature.glow}, rgba(124,92,252,0.04))` }}
      >
        {feature.icon}
      </div>

      <h3 className="text-[1.08rem] font-bold mb-2.5 tracking-tight group-hover:text-white transition-colors duration-300">
        {feature.title}
      </h3>

      <p className="text-[#8a8aac] leading-relaxed text-[13px] tracking-tight">
        {feature.description}
      </p>

      {/* Expanding underline */}
      <div className={`mt-6 h-[2px] w-8 group-hover:w-full transition-all duration-600 bg-gradient-to-r ${feature.gradient} rounded-full opacity-80`} />
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="tag bg-[rgba(124,92,252,0.06)] border border-[rgba(124,92,252,0.15)] text-[#a78bfa] mb-6 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cfc]" />
            Why DudeAlgo
          </span>
          <h2 className="section-heading mt-6">
            Everything you need to{" "}
            <span className="gradient-text">master DSA</span>
          </h2>
          <p className="text-[#7b7b9e] mt-5 max-w-xl mx-auto text-[14px] sm:text-[15px] leading-relaxed tracking-tight">
            A comprehensive toolkit designed to make learning data structures and algorithms intuitive, engaging, and effective.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
