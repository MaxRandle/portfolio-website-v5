import { Nav, NavLink, NavProps } from "@ui/Nav";
import { Container } from "@ui/Container";
import { LinkStyleButton } from "@ui/Link";
import { BrandLogoIcon } from "@components/svgs/BrandLogoIcon";
import { ROUTE_MAP } from "@config/index";

type Props = NavProps & {
  currentRoute: string;
};

export function AppNavHeader({ currentRoute, ...props }: Props) {
  return (
    <Nav {...props}>
      <Container className="flex items-center justify-evenly gap-6 sm:justify-start sm:gap-20">
        <LinkStyleButton className="shrink-0 p-2 border border-transparent hidden sm:block">
          <BrandLogoIcon size={28} />
        </LinkStyleButton>
        <NavLink
          href={ROUTE_MAP.about.root}
          isActive={currentRoute === ROUTE_MAP.about.root}
        >
          About
        </NavLink>
        <NavLink
          href={ROUTE_MAP.blogPosts.root}
          isActive={currentRoute === ROUTE_MAP.blogPosts.root}
        >
          Blog
        </NavLink>
        <NavLink
          href={ROUTE_MAP.resume.root}
          isActive={currentRoute === ROUTE_MAP.resume.root}
        >
          Resume
        </NavLink>
      </Container>
    </Nav>
  );
}
