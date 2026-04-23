import { HeroSection } from "./HeroSection";
import { AppNavHeader } from "@components/AppNavHeader";
import { TechStackSection } from "./TechStackSection";
import { ROUTE_MAP } from "@config/index";
import { ResumeLinkSection } from "./ResumeLinkSection";
import { WorkSection } from "./WorkSection";

export default function Home() {
  return (
    <>
      <AppNavHeader currentRoute={ROUTE_MAP.about.root} />
      <main>
        <HeroSection />
        <ResumeLinkSection />
        <WorkSection />
        <TechStackSection />
      </main>
    </>
  );
}
