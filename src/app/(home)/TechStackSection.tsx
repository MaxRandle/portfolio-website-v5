"use client";

import { LogoBackground } from "@components/LogoBackground";
import { Card, CardContent } from "@ui/Card";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const TechStackSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100%", "100%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <Section
      ref={ref}
      spacing="lg"
      palette="surface"
      className="relative overflow-hidden"
    >
      <motion.div
        className="w-[160rem] absolute top-1/2 left-1/2 -translate-1/2"
        style={{ y }}
      >
        <LogoBackground className="opacity-10" />
      </motion.div>
      <Container className="relative">
        <Heading level="h2">My Front-End stack</Heading>
        <div className="grid gap-4 md:grid-cols-2 mt-20">
          <Card palette="base">
            <CardContent className="flex flex-col gap-4">
              <SiTypescript size={40} />
              <Heading level={"h3"}>TypeScript</Heading>
              <Typography palette={"weaker"}>
                I&apos;m big on type safety. The TypeScript ecosystem is truly
                world class offering a vast wealth of tools and utilities to
                build with. With TypeScript I write code that is safer and
                simpler.
              </Typography>
            </CardContent>
          </Card>

          <Card palette="base">
            <CardContent className="flex flex-col gap-4">
              <SiReact size={40} />
              <Heading level={"h3"}>React</Heading>
              <Typography palette={"weaker"}>
                React is the long-lived king of front end. With it I build
                agnostic components that scale cleanly, leading to seamless,
                performant, and interactive UIs.
              </Typography>
            </CardContent>
          </Card>

          <Card palette="base">
            <CardContent className="flex flex-col gap-4">
              <SiTailwindcss size={40} />
              <Heading level={"h3"}>TailwindCSS</Heading>
              <Typography palette={"weaker"}>
                With TailwindCSS I achieve better co-location and composability.
                While its utility first approach allows me to build and scale
                fast.
              </Typography>
            </CardContent>
          </Card>

          <Card palette="base">
            <CardContent className="flex flex-col gap-4">
              <SiNextdotjs size={40} />
              <Heading level={"h3"}>Next.js</Heading>
              <Typography palette={"weaker"}>
                Next lets me focus on features. It offers one of the best
                solutions to server rendering, server components skip the APIs
                so I can just build UI.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
