import Link from "next/link";

const links = [
  { name: "VisuAlgo", url: "https://visualgo.net/en", note: "Visual animations of algorithms" },
  { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org", note: "Topic-wise DSA explanations" },
  { name: "CP-Algorithms", url: "https://cp-algorithms.com", note: "Competitive programming references" },
  { name: "Big-O Cheat Sheet", url: "https://www.bigocheatsheet.com", note: "Quick complexity lookup" },
];

export default function ReferenceResourcesPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-white transition-colors">
          ← Back to Resources
        </Link>

        <h1 className="section-heading mt-8">
          Reference <span className="gradient-text">Websites</span>
        </h1>
        <p className="text-[#8b8bad] mt-4 text-[15px] max-w-2xl">
          Keep these as redirect cards, or replace with your own curated theory/tutorial destinations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {links.map((item) => (
            <div key={item.name} className="glass-card p-6 !hover:transform-none">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-[#8b8bad] text-sm mt-2">{item.note}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="glow-btn glow-btn-secondary text-[13px] mt-5"
              >
                Open Website ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
