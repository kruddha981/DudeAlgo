import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-14 px-6 border-t border-[rgba(124,92,252,0.06)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center text-xl leading-none">
              👾
            </div>
            <span className="text-lg font-extrabold tracking-tighter">
              Dude<span className="gradient-text">Algo</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: "Features", href: "#features" },
              { label: "Roadmap", href: "#roadmap" },
              { label: "Code Lab", href: "#code-lab" },
              { label: "AI Tutor", href: "#tutor" },
              { label: "Visualizer", href: "#visualizer" },
              { label: "Challenge", href: "#challenge" },
              { label: "Resources", href: "/resources" },
            ].map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-[#7b7b9e] hover:text-white transition-colors duration-300 tracking-tight"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-[#7b7b9e] hover:text-white transition-colors duration-300 tracking-tight"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#4a4a6a] font-medium tracking-tight">
            DudeAlgo © 2026
          </p>
        </div>

        {/* Bottom Gradient Line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />
        <p className="text-center text-[11px] text-[#2a2a45] mt-4 tracking-tight">
          Built with ♥ for learners everywhere
        </p>
      </div>
    </footer>
  );
}
