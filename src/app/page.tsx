import { Alert } from "@ui/Alert";
import { Avatar, AvatarContainer, AvatarGroup } from "@ui/Avatar";
import { Badge } from "@ui/Badge";
import { Button, ButtonGroup } from "@ui/Button";
import { Card, CardContent } from "@ui/Card";
import { Container } from "@ui/Container";
import { Section } from "@ui/Section";
import { FiArrowLeft, FiArrowRight, FiPlus } from "react-icons/fi";

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

          <AvatarGroup>
            <Avatar size="lg" src={"/media/avatar-6.svg"} fallback="AB" />
            <Avatar size="lg" src={"/media/avatar-5.svg"} fallback="CD" />
            <Avatar size="lg" src={"/media/avatar-4.svg"} fallback="EF" />
            <Avatar size="lg" src={"/media/avatar-3.svg"} fallback="+5" />
          </AvatarGroup>
        </Container>
      </Section>

      <Section>
        <Container className="space-x-2">
          <Badge>Vegan</Badge>
          <Badge>Vegetarian</Badge>
          <Badge>Dairy Free</Badge>
          <Badge>Keto</Badge>
        </Container>
      </Section>

      <Section>
        <Container className="space-x-2 space-y-4">
          <Button>Start</Button>
          <Button intent="secondary">Stop</Button>
          <Button intent="destructive">Cancel</Button>
          <div>
            <ButtonGroup>
              <Button intent="secondary">
                <FiArrowLeft size={24} />
              </Button>
              <Button intent="secondary">
                <FiPlus size={24} />
              </Button>
              <Button intent="secondary">
                <FiArrowRight size={24} />
              </Button>
            </ButtonGroup>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          {(["high", "low", "flat"] as const).map((elevation) => (
            <Card palette={"surface"} key={elevation} elevation={elevation}>
              <CardContent>
                <AvatarContainer>
                  <Avatar src="/media/avatar-1.svg" fallback="CF" />
                  <div>
                    {/* <Heading level="h3">Cat Catterson</Heading> */}
                    {/* <Typography level="body" palette="weaker"> */}
                    {/* Head of CATering */}
                    {/* </Typography> */}
                  </div>
                </AvatarContainer>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>
    </main>
  );
}
