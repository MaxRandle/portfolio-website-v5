import { HeroSection } from "./HeroSection";
import { AppNavHeader } from "@components/AppNavHeader";
import { TechStackSection } from "./TechStackSection";
import { ROUTE_MAP } from "@config/index";

export default function Home() {
  return (
    <>
      <AppNavHeader currentRoute={ROUTE_MAP.about.root} />
      <main>
        <HeroSection />
        <TechStackSection />
      </main>
    </>
  );
}
