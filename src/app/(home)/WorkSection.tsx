import { AnimatedXSnakePath } from "@components/AnimatedXSnakePath";
import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";
import { FiSmartphone } from "react-icons/fi";

export const WorkSection: React.FC = () => {
  return (
    <Section spacing="lg" className="relative">
      <Container className="space-y-20">
        <Heading level="h2" className="text-center">
          I build
        </Heading>
        <div className="space-y-20 relative h-360">
          <AnimatedXSnakePath className="absolute inset-0 w-full h-full" />
          <div className="flex flex-col gap-12 justify-evenly h-full">
            <p className="absolute top-1/10 -translate-y-1/2 right-1/2 text-6xl lg:text-8xl text-center italic text-primary-800 dark:text-primary-500 font-geom tracking-wider">
              Fast
            </p>
            <p className="absolute top-3/10 -translate-y-1/2 left-1/2 text-5xl lg:text-7xl text-center">
              <span className="text-white dark:text-black bg-primary-800 dark:bg-primary-500 px-2">
                Accessible
              </span>
            </p>
            <pre>
              <code>
                <p className="absolute top-5/10 -translate-y-1/2 right-1/2 text-4xl lg:text-6xl text-center text-primary-800 dark:text-primary-500 tracking-tighter">
                  functional();
                </p>
              </code>
            </pre>
            <p className="absolute top-7/10 -translate-y-1/2 left-1/2 text-7xl lg:text-9xl text-center text-primary-800 dark:text-primary-500 font-italianno leading-[0.8]">
              Beautiful
            </p>
            <p className="absolute top-9/10 -translate-y-1/2 right-1/2 text-5xl lg:text-7xl text-center text-primary-800 dark:text-primary-500">
              <span className="flex justify-center">
                Resp
                <FiSmartphone className="-mx-1 lg:-mx-2" />
                nsive
              </span>
            </p>
          </div>
        </div>
        <Heading level="h2" className="text-center">
          user interfaces
        </Heading>
      </Container>
    </Section>
  );
};
