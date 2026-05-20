import PageHeader from "@/components/PageHeader";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata = {
  title: "Real-Life Legal Scenarios",
  description:
    "Practical guide to everyday legal issues. Learn how to fight back in real-life situations with exact laws, sections, and actionable steps.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Practical Legal Guide"
        sanskrit="धर्मो रक्षति रक्षितः · The law protects those who protect it"
        title="Real-life situations. Real legal solutions."
        description="Everyday problems require precise legal actions. We break down common real-world scenarios and provide exact step-by-step guidance on how to fight back using the right laws, sections, and procedures."
        crumbs={[{ label: "Home", href: "/" }, { label: "Real-Life Scenarios" }]}
      />

      <section className="container-page pb-12">
        <CaseStudiesClient />
      </section>
    </>
  );
}

