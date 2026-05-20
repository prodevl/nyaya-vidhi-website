import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import Features from "@/components/Features";
import KnowYourRightsTeaser from "@/components/KnowYourRightsTeaser";
import ToolsStrip from "@/components/ToolsStrip";
import DailyWisdom from "@/components/DailyWisdom";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolsStrip />
      <CategoriesGrid />
      <KnowYourRightsTeaser />
      <DailyWisdom />
      <Features />
      <CTA />
    </>
  );
}
