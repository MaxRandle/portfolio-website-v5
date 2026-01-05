import { Nav, NavLink } from "@ui/Nav";
import { TechStackSection } from "./TechStackSection";
import { Container } from "@ui/Container";
import { LinkStyleButton } from "@ui/Link";
import { BrandLogoIcon } from "@components/BrandLogoIcon";
import { HeroSection } from "./HeroSection";

export default function Home() {
  return (
    <>
      <Nav>
        <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
          <LinkStyleButton className="shrink-0 p-2 border border-transparent">
            <BrandLogoIcon size={28} />
          </LinkStyleButton>
          <NavLink isActive={true} href={"/"}>
            About
          </NavLink>
        </Container>
      </Nav>
      <main>
        <HeroSection />
        <TechStackSection />
      </main>
    </>
  );
}
