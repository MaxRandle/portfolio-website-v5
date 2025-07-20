import { Alert } from "@ui/Alert";
import { Container } from "@ui/Container";
import { Section } from "@ui/Section";

export default function Home() {
  return (
    <Section>
      <Container>
        <Alert status="danger" title="You SUCK">
          Please refrain from further sucking.
        </Alert>
        <Alert status="warning" title="You SUCK">
          Please refrain from further sucking.
        </Alert>
        <Alert status="info" title="You SUCK">
          Please refrain from further sucking.
        </Alert>
        <Alert status="success" title="You SUCK">
          Please refrain from further sucking.
        </Alert>
      </Container>
    </Section>
  );
}
