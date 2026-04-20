"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Code Lab", href: "#code-lab" },
    { label: "AI Tutor", href: "#tutor" },
    { label: "Visualizer", href: "#visualizer" },
    { label: "Challenge", href: "#challenge" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "nav-blur py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center text-2xl leading-none group-hover:scale-110 transition-transform duration-500">
            👾
          </div>
          <span className="text-xl font-extrabold tracking-tighter">
            Dude<span className="gradient-text">Algo</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#7b7b9e] hover:text-white transition-all duration-400 relative group tracking-tight"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7c5cfc] to-[#22d3ee] group-hover:w-full transition-all duration-400 rounded-full" />
            </a>
          ))}
          <a href="#tutor" className="glow-btn glow-btn-primary text-[13px] !py-2.5 !px-6">
            Get Started
          </a>
          <Link href="/resources" className="text-[13px] font-semibold text-[#a78bfa] hover:text-white transition-colors">
            Resources ↗
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl hover:bg-[rgba(124,92,252,0.08)] transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-400 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-400 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-white/80 rounded-full transition-all duration-400 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 nav-blur mt-2 mx-4 rounded-2xl border border-[rgba(124,92,252,0.08)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[13px] font-medium text-[#7b7b9e] hover:text-white hover:bg-[rgba(124,92,252,0.06)] transition-all py-3 px-4 rounded-xl"
            >
              {link.label}
            </a>
          ))}
          <a href="#tutor" className="glow-btn glow-btn-primary text-[13px] !py-3 w-full text-center mt-2">
            Get Started
          </a>
          <Link href="/resources" className="text-[13px] font-semibold text-[#a78bfa] hover:text-white transition-colors py-3 px-4 rounded-xl">
            Resources ↗
          </Link>
        </div>
      </div>
    </nav>
  );
}
