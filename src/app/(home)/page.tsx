import { HeroSection } from "./HeroSection";
import { AppNavHeader } from "@components/AppNavHeader";
import { TechStackSection } from "./TechStackSection";
import { ROUTE_MAP } from "@config/index";
import { ResumeLinkSection } from "./ResumeLinkSection";

export default function Home() {
  return (
    <>
      <AppNavHeader currentRoute={ROUTE_MAP.about.root} />
      <main>
        <HeroSection />
        <ResumeLinkSection />
        <TechStackSection />
      </main>
    </>
  );
}
