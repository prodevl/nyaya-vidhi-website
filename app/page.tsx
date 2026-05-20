import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import LearningPaths from "@/components/LearningPaths";
import Features from "@/components/Features";
import KnowYourRightsTeaser from "@/components/KnowYourRightsTeaser";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <LearningPaths />
      <KnowYourRightsTeaser />
      <Features />
      <CTA />
    </>
  );
}
