import { AppNavHeader } from "@components/AppNavHeader";
import { ROUTE_MAP } from "@config/index";
import { Container } from "@ui/Container";
import { Section } from "@ui/Section";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavHeader currentRoute={ROUTE_MAP.blogPosts.root} />
      <main>
        <Section>
          <Container>{children}</Container>
        </Section>
      </main>
    </>
  );
}
