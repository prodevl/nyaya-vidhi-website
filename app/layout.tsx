import type { Metadata } from "next";
import { Fraunces, Inter, Tiro_Devanagari_Hindi } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nyayavidhi.in"),
  title: {
    default: "Nyaya Vidhi — Indian Law, Made Lucid",
    template: "%s · Nyaya Vidhi",
  },
  description:
    "A modern, beginner-to-advanced guide to every Indian law that matters — rights, taxes, business, family, criminal, digital, and more. With clear clauses, plain-English explainers, and curated learning paths.",
  keywords: [
    "Indian law",
    "know your rights India",
    "tax laws India",
    "RERA",
    "BNS",
    "consumer rights India",
    "Indian Constitution",
    "Companies Act",
    "DPDP Act",
  ],
  authors: [{ name: "Nyaya Vidhi" }],
  openGraph: {
    title: "Nyaya Vidhi — Indian Law, Made Lucid",
    description:
      "Every Indian law, explained from beginner to advanced. Rights, taxes, business, family, criminal, digital.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${tiro.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-paper-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
