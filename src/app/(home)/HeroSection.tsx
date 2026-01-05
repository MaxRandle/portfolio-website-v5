"use client";

import { AnimatedBrandLogoIcon } from "@components/AnimatedBrandLogoIcon";
import { PUBLIC_ASSET_MAP } from "@config/index";
import { Container } from "@ui/Container";
import { Figure } from "@ui/Figure";
import { Heading } from "@ui/Heading";
import { Section } from "@ui/Section";
import { stagger, useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function HeroSection() {
  const [scope, animate] = useAnimate();

  const animateHeroSection = () =>
    animate([
      ["#hero-container", { opacity: [0, 1] }, { duration: 0 }],
      [
        "#hero-container > *",
        { opacity: [0, 1], y: [8, 0] },
        {
          duration: 0.6,
          ease: "easeOut",
          delay: stagger(0.15),
        },
      ],
    ]);

  return (
    <Section className="relative" spacing={"lg"} ref={scope}>
      <AnimatedBrandLogoIcon
        key={0}
        className="absolute top-1/2 -translate-y-1/2 w-full"
        onAnimationFinish={animateHeroSection}
      />

      <Container
        id="hero-container"
        className={twMerge([
          "flex flex-col items-center gap-4 text-center opacity-0 noscript:opacity-100",
          "sm:grid sm:grid-cols-[auto_auto] sm:gap-6 sm:gap-y-1 sm:text-left",
        ])}
      >
        <Figure
          id="hero-figure"
          className="row-span-2 aspect-square h-48 w-48 rounded-full sm:mx-0 sm:justify-self-end"
          src={PUBLIC_ASSET_MAP.media.maxProfilePicture}
          alt="me"
          width={160}
          height={160}
          priority
        />
        <Heading id="hero-heading" className="sm:self-end" level="h1">
          Max Randle
        </Heading>
        <Heading
          id="hero-subheading"
          className="sm:self-start"
          level="h3"
          palette="weaker"
        >
          Software Engineer
        </Heading>
      </Container>
    </Section>
  );
}
