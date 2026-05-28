import { GridBackground } from "@/components/layout/grid-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactOutput } from "@/components/sections/contact-output";
import { ExperienceDag } from "@/components/sections/experience-dag";
import { HeroPipeline } from "@/components/sections/hero-pipeline";
import { ProjectsQuery } from "@/components/sections/projects-query";
import { SkillsServing } from "@/components/sections/skills-serving";
import { TerminalModeProvider } from "@/components/terminal/terminal-mode";

export default function Home() {
  return (
    <TerminalModeProvider>
      <div className="relative min-h-full flex-1">
        <GridBackground />
        <ScrollProgress />
        <SiteHeader />
        <main className="relative z-10">
          <HeroPipeline />
          <AboutSection />
          <ExperienceDag />
          <ProjectsQuery />
          <SkillsServing />
          <ContactOutput />
        </main>
      </div>
    </TerminalModeProvider>
  );
}
