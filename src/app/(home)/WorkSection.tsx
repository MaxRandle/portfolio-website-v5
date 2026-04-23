import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";
import { FiZap } from "react-icons/fi";

export const WorkSection: React.FC = () => {
  const adjectives = [
    "fast",
    "responsive",
    "accessible",
    "functional();",
    "seamless",
    "beautiful",
  ];
  return (
    <Section spacing="lg">
      <Container className="space-y-20">
        <Heading level="h2">My work</Heading>
        <Typography className="text-center" level="subheading">
          I build
        </Typography>
        <p className="text-5xl sm:text-7xl text-primary-800 dark:text-primary-500">
          <span className="flex italic justify-center">
            Fa
            <FiZap />t
          </span>
        </p>
        <p className="text-5xl sm:text-7xl text-center">
          <span className="text-white dark:text-black bg-primary-800 dark:bg-primary-500 px-2">
            Accessible
          </span>
        </p>
        <p className="text-4xl sm:text-6xl text-center text-primary-800 dark:text-primary-500 tracking-tighter">
          <pre>
            <code>functional();</code>
          </pre>
        </p>
        <p className="text-5xl sm:text-7xl text-center text-primary-800 dark:text-primary-500 font-serif">
          Beautiful
        </p>
        <Typography className="text-center" level="subheading">
          user interfaces
        </Typography>
      </Container>
    </Section>
  );
};
