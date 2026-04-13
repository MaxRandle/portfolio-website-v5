import { AppNavHeader } from "@components/AppNavHeader";
import { ROUTE_MAP } from "@config/index";
import { Container } from "@ui/Container";
import { Section } from "@ui/Section";

export default function BlogPage() {
  return (
    <>
      <AppNavHeader currentRoute={ROUTE_MAP.blogPosts.root} />
      <main>
        <Section>
          <Container></Container>
        </Section>
      </main>
    </>
  );
}
