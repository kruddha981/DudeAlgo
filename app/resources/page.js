import Link from "next/link";

const collections = [
  {
    title: "Practice Platforms",
    description: "Coding challenge sites for daily DSA problem-solving.",
    href: "/resources/practice",
    cta: "Open Practice Links",
  },
  {
    title: "Reference & Theory",
    description: "Concept references, cheat sheets, and visual explainers.",
    href: "/resources/reference",
    cta: "Open Reference Links",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-white transition-colors"
        >
          ← Back to DudeAlgo
        </Link>

        <div className="text-center mt-10 mb-12">
          <h1 className="section-heading">
            External <span className="gradient-text">Learning Resources</span>
          </h1>
          <p className="text-[#8b8bad] text-[15px] mt-4 max-w-2xl mx-auto">
            Add, edit, or replace these redirect pages with any third-party websites you want learners to open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((item) => (
            <div key={item.title} className="glass-card p-7 !hover:transform-none">
              <h2 className="text-xl font-bold tracking-tight">{item.title}</h2>
              <p className="text-[#8b8bad] text-sm mt-3 leading-relaxed">{item.description}</p>
              <Link href={item.href} className="glow-btn glow-btn-primary text-[13px] mt-6">
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
