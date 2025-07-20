import { Alert } from "@ui/Alert";
import { Avatar, AvatarGroup } from "@ui/Avatar";
import { Container } from "@ui/Container";
import { Section } from "@ui/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <Container className="space-y-4">
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

      <Section>
        <Container className="space-y-4">
          <AvatarGroup>
            <Avatar size="sm" fallback="AB" />
            <Avatar size="sm" fallback="CD" />
            <Avatar size="sm" fallback="EF" />
            <Avatar size="sm" fallback="+5" />
          </AvatarGroup>

          <AvatarGroup>
            <Avatar src={"/media/avatar-1.svg"} fallback="AB" />
            <Avatar src={"/media/avatar-2.svg"} fallback="CD" />
            <Avatar src={"/media/avatar-3.svg"} fallback="EF" />
            <Avatar src={"/media/avatar-4.svg"} fallback="+5" />
          </AvatarGroup>
        </Container>
      </Section>
    </main>
  );
}
