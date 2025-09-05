import { BrandLogoIcon } from "@components/BrandLogoIcon";
import { Alert } from "@ui/Alert";
import { Avatar, AvatarContainer, AvatarGroup } from "@ui/Avatar";
import { Badge } from "@ui/Badge";
import { Button, ButtonGroup } from "@ui/Button";
import { Card, CardContent } from "@ui/Card";
import { Container } from "@ui/Container";
import { Divider } from "@ui/Divider";
import { Heading } from "@ui/Heading";
import { Input, InputAdornment, InputGroup } from "@ui/Input";
import { Nav, NavLink } from "@ui/Nav";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";
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
                    <Heading level="h3">Cat Catterson</Heading>
                    <Typography level="body" palette="weaker">
                      Head of CATering
                    </Typography>
                  </div>
                </AvatarContainer>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <Divider />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          <Heading level="h1">Heading Level 1</Heading>
          <Heading level="h2">Heading Level 2</Heading>
          <Heading level="h3">Heading Level 3</Heading>

          <Heading level="h2" palette="base">
            Base Heading
          </Heading>
          <Heading level="h2" palette="weak">
            Weak Heading
          </Heading>
          <Heading level="h2" palette="weaker">
            Weaker Heading
          </Heading>
          <Heading level="h2" palette="primary">
            Primary Heading
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 flex-col gap-4 sm:grid-cols-2">
          <Input placeholder="example@email.com" />
          <Input defaultValue="abc" pattern="[0-9]*" />
          <Input disabled value="N/A" />
          <InputGroup>
            <InputAdornment>https://</InputAdornment>
            <Input placeholder="maxrandle.co.nz" />
          </InputGroup>
          <InputGroup className="sm:col-span-2">
            <Input />
            <InputAdornment>to</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputAdornment>$</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <Input />
            <InputAdornment>kg</InputAdornment>
          </InputGroup>
        </Container>
      </Section>

      <Section>
        <Container>
          <Nav className="rounded-lg">
            <div className="flex space-x-4 px-4">
              <NavLink href="/" isActive={true}>
                Home
              </NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </Nav>
        </Container>
      </Section>

      <Section>
        <Container>
          <BrandLogoIcon />
        </Container>
      </Section>

      <Section palette="surface">
        <div className="mx-auto opacity-100 w-120 h-120 border">
          <div className="relative inset-1/2">
            <BrandLogoIcon className="absolute -translate-1/2 -top-5 left-16 size-16 -rotate-6" />
            <BrandLogoIcon className="absolute -translate-1/2 top-5 -left-16 size-16 -rotate-6" />

            <BrandLogoIcon className="absolute -translate-1/2 -top-20 -left-10 size-10 rotate-6" />
            <BrandLogoIcon className="absolute -translate-1/2 top-20 left-10 size-10 rotate-6" />

            <BrandLogoIcon className="absolute -translate-1/2 -top-32 left-16 size-6 rotate-16" />
            <BrandLogoIcon className="absolute -translate-1/2 top-32 -left-16 size-6 rotate-16" />

            <BrandLogoIcon className="absolute -translate-1/2 top-24 left-36 size-6 -rotate-16" />
            <BrandLogoIcon className="absolute -translate-1/2 -top-24 -left-36 size-6 -rotate-16" />

            <BrandLogoIcon className="absolute -translate-1/2 top-46 left-12 size-6 rotate-24" />
            <BrandLogoIcon className="absolute -translate-1/2 -top-46 -left-12 size-6 rotate-24" />
          </div>
        </div>
      </Section>
    </main>
  );
}
