"use client";
import { useEffect, useMemo, useRef } from "react";
import AlgorithmBackdrop from "./AlgorithmBackdrop";

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        left: `${(i * 7.1) % 100}%`,
        animationDelay: `${(i * 1.2) % 18}s`,
        animationDuration: `${14 + (i % 7) * 1.4}s`,
        width: `${1.5 + (i % 4) * 0.7}px`,
        height: `${1.5 + (i % 4) * 0.7}px`,
        background:
          i % 4 === 0
            ? "rgba(124, 92, 252, 0.6)"
            : i % 4 === 1
            ? "rgba(34, 211, 238, 0.5)"
            : i % 4 === 2
            ? "rgba(244, 114, 182, 0.4)"
            : "rgba(167, 139, 250, 0.5)",
        boxShadow:
          i % 2 === 0
            ? "0 0 6px rgba(124, 92, 252, 0.3)"
            : "0 0 6px rgba(34, 211, 238, 0.3)",
      })),
    []
  );

  return (
    <>
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const gridRef = useRef(null);
  const spotlightRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      requestAnimationFrame(() => el.classList.add("visible"));
    }
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || typeof window === "undefined") return;

    let frameId = null;

    const applyParallax = (clientX, clientY) => {
      const rect = sectionEl.getBoundingClientRect();
      const normalizedX = (clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (clientY - rect.top) / rect.height - 0.5;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${normalizedX * -18}px, ${normalizedY * -12}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${normalizedX * 24}px, ${normalizedY * 16}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${normalizedX * -14}px, ${normalizedY * 20}px, 0)`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${normalizedX * 10}px, ${normalizedY * 8}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${normalizedX * 30}px, ${normalizedY * 24}px, 0)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(${normalizedX * -8}px, ${normalizedY * -6}px, 0)`;
      }
    };

    const onMouseMove = (event) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => applyParallax(event.clientX, event.clientY));
    };

    const onMouseLeave = () => {
      [orb1Ref, orb2Ref, orb3Ref, gridRef, spotlightRef, contentRef].forEach((layerRef) => {
        if (layerRef.current) {
          layerRef.current.style.transform = "translate3d(0, 0, 0)";
        }
      });
    };

    sectionEl.addEventListener("mousemove", onMouseMove);
    sectionEl.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      sectionEl.removeEventListener("mousemove", onMouseMove);
      sectionEl.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Algorithm Backdrop */}
      <AlgorithmBackdrop />

      {/* Floating Orbs */}
      <div ref={orb1Ref} className="orb orb-1 transition-transform duration-500 ease-out" />
      <div ref={orb2Ref} className="orb orb-2 transition-transform duration-500 ease-out" />
      <div ref={orb3Ref} className="orb orb-3 transition-transform duration-500 ease-out" />

      {/* Particles */}
      <Particles />

      {/* Grid Pattern */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.025] transition-transform duration-500 ease-out"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,252,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.6) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      {/* Radial Spotlight */}
      <div ref={spotlightRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(124,92,252,0.06)_0%,transparent_70%)] pointer-events-none transition-transform duration-500 ease-out" />

      {/* Content */}
      <div ref={heroRef} className="reveal relative z-10 text-center max-w-5xl mx-auto px-6">
        <div ref={contentRef} className="transition-transform duration-500 ease-out">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-5 py-2.5 rounded-full border border-[rgba(124,92,252,0.18)] bg-[rgba(124,92,252,0.05)] shimmer">
          <div className="pulse-dot" />
          <span className="text-[13px] text-[#a78bfa] font-semibold tracking-tight">AI-Powered Learning Platform</span>
        </div>

        <h1 className="section-heading text-5xl sm:text-6xl md:text-8xl mb-6 text-balance">
          Learn DSA with{" "}
          <span className="gradient-text">Clarity & Speed</span>
        </h1>

        <p className="text-base sm:text-lg md:text-[1.25rem] text-[#8d8dac] max-w-3xl mx-auto mb-10 leading-relaxed text-balance tracking-tight">
          Master Data Structures & Algorithms with beginner-friendly AI guidance, interactive visualizers,
          and hands-on practice designed for interview confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a href="#roadmap" className="glow-btn glow-btn-primary text-[15px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Start Learning
          </a>
          <a href="#tutor" className="glow-btn glow-btn-secondary text-[15px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Try AI Tutor
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {[
            { value: "50+", label: "Topics" },
            { value: "200+", label: "Problems" },
            { value: "24/7", label: "AI Guidance" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group glass-card !rounded-2xl !border-[rgba(124,92,252,0.08)] !bg-[rgba(12,12,30,0.36)] py-4 px-2 !hover:transform-none">
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-alt tracking-tighter group-hover:scale-105 transition-transform duration-500">{stat.value}</div>
              <div className="text-xs text-[#7b7b9e] mt-2 font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  );
}
