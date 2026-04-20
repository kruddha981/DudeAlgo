import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const FeaturesSection = dynamic(() => import("./components/FeaturesSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const RoadmapSection = dynamic(() => import("./components/RoadmapSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const CodeLabSection = dynamic(() => import("./components/CodeLabSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const AITutorSection = dynamic(() => import("./components/AITutorSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const VisualizerSection = dynamic(() => import("./components/VisualizerSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const ChallengeSection = dynamic(() => import("./components/ChallengeSection"), {
  loading: () => <section className="py-20" aria-hidden="true" />,
});
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] bg-[radial-gradient(circle_at_top,rgba(124,92,252,0.12),transparent_35%),radial-gradient(circle_at_70%_10%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(244,114,182,0.07),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />

      <Navbar />
      <div className="relative z-10">
        <HeroSection />

        {/* Section Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <FeaturesSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <RoadmapSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <CodeLabSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <AITutorSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <VisualizerSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.15)] to-transparent" />

        <ChallengeSection />

        <Footer />
      </div>
    </main>
  );
}
