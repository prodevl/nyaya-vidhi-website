/**
 * Curated learning journeys — combine multiple categories into a goal-oriented
 * curriculum. Placeholders for Phase 1 — content arrives in Phase 2.
 */

import type { LucideIcon } from "lucide-react";
import {
  Sprout,
  TrendingUp,
  Rocket,
  ShieldCheck,
  HomeIcon,
  HeartHandshake,
  Briefcase,
  CircleDollarSign,
} from "lucide-react";

export type LearningPath = {
  slug: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  icon: LucideIcon;
  accent: "saffron" | "india" | "marigold" | "terracotta";
};

export const learningPaths: LearningPath[] = [
  {
    slug: "first-time-taxpayer",
    title: "First-Time Taxpayer",
    subtitle: "From PAN to first ITR — without the panic.",
    level: "Beginner",
    duration: "2 hrs",
    lessons: 8,
    icon: Sprout,
    accent: "saffron",
  },
  {
    slug: "save-taxes-legally",
    title: "Save Taxes — Legally",
    subtitle: "Every deduction, exemption, and structure used by CAs.",
    level: "Intermediate",
    duration: "4 hrs",
    lessons: 14,
    icon: CircleDollarSign,
    accent: "marigold",
  },
  {
    slug: "build-a-business",
    title: "Build a Business from Day Zero",
    subtitle: "Pvt Ltd, contracts, IP, compliance — the founder's stack.",
    level: "Advanced",
    duration: "8 hrs",
    lessons: 26,
    icon: Rocket,
    accent: "india",
  },
  {
    slug: "know-your-rights",
    title: "Know Your Rights as a Citizen",
    subtitle: "Constitution, arrest, complaints, RTI, consumer.",
    level: "Beginner",
    duration: "3 hrs",
    lessons: 12,
    icon: ShieldCheck,
    accent: "saffron",
  },
  {
    slug: "buy-your-first-home",
    title: "Buy Your First Home",
    subtitle: "RERA, sale deed, loans, stamp duty — start to keys.",
    level: "Intermediate",
    duration: "3.5 hrs",
    lessons: 11,
    icon: HomeIcon,
    accent: "terracotta",
  },
  {
    slug: "marriage-and-family-law",
    title: "Marriage, Divorce & Family",
    subtitle: "Marriage law, maintenance, custody, succession.",
    level: "Intermediate",
    duration: "4 hrs",
    lessons: 13,
    icon: HeartHandshake,
    accent: "saffron",
  },
  {
    slug: "employee-survival-kit",
    title: "Employee Survival Kit",
    subtitle: "Offer letter, PF, POSH, termination, gratuity.",
    level: "Beginner",
    duration: "2.5 hrs",
    lessons: 10,
    icon: Briefcase,
    accent: "india",
  },
  {
    slug: "investor-and-trader-essentials",
    title: "Investor & Trader Essentials",
    subtitle: "SEBI rules, taxation, insider trading, F&O accounting.",
    level: "Advanced",
    duration: "5 hrs",
    lessons: 16,
    icon: TrendingUp,
    accent: "marigold",
  },
];
