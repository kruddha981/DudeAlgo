import Link from "next/link";

const links = [
  { name: "LeetCode", url: "https://leetcode.com", note: "Interview-style coding questions" },
  { name: "Codeforces", url: "https://codeforces.com", note: "Competitive programming contests" },
  { name: "HackerRank", url: "https://www.hackerrank.com", note: "Practice tracks and certifications" },
  { name: "CodeChef", url: "https://www.codechef.com", note: "Beginner to advanced problem sets" },
];

export default function PracticeResourcesPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-[#a78bfa] hover:text-white transition-colors">
          ← Back to Resources
        </Link>

        <h1 className="section-heading mt-8">
          Practice <span className="gradient-text">Websites</span>
        </h1>
        <p className="text-[#8b8bad] mt-4 text-[15px] max-w-2xl">
          These are redirect options. Replace or extend this list with your preferred third-party coding websites.
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
