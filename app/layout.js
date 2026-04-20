import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DudeAlgo — Learn DSA the Smart Way",
  description:
    "Master Data Structures & Algorithms using AI tutoring, visual simulators, and coding challenges. Your journey from beginner to expert starts here.",
  keywords: [
    "DSA",
    "Data Structures",
    "Algorithms",
    "AI Tutor",
    "Coding Challenges",
    "Learn Programming",
    "DudeAlgo",
  ],
  openGraph: {
    title: "DudeAlgo — Learn DSA the Smart Way",
    description:
      "Master Data Structures & Algorithms using AI tutoring, visual simulators, and coding challenges.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
