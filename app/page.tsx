import { AboutSection } from "@/components/about-section";
import { ArticlesSection } from "@/components/articles-section";
import { BuyerFitSection } from "@/components/buyer-fit-section";
import { CareerIntentSection } from "@/components/career-intent-section";
import { CareerSection } from "@/components/career-section";
import { HeroSection } from "@/components/hero-section";
import { PersonaNavSection } from "@/components/persona-nav-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProofSection } from "@/components/proof-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ValuePropositionSection } from "@/components/value-proposition-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PersonaNavSection />
        <ProofSection />
        <ValuePropositionSection />
        <BuyerFitSection />
        <CareerIntentSection />
        <ArticlesSection />
        <ProjectsSection />
        <CareerSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
