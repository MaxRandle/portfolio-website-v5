import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";
import { FiSmartphone } from "react-icons/fi";

export const WorkSection: React.FC = () => {
  return (
    <Section spacing="lg">
      <Container className="space-y-20">
        <Heading level="h2">My work</Heading>
        <Typography className="text-center" level="subheading">
          I build
        </Typography>
        <div className="space-y-8">
          <p className="text-6xl sm:text-8xl text-center italic text-primary-800 dark:text-primary-500 font-geom tracking-wider">
            Fast
          </p>
          <p className="text-5xl sm:text-7xl text-center">
            <span className="text-white dark:text-black bg-primary-800 dark:bg-primary-500 px-2">
              Accessible
            </span>
          </p>
          <pre>
            <code>
              <p className="text-4xl sm:text-6xl text-center text-primary-800 dark:text-primary-500 tracking-tighter">
                functional();
              </p>
            </code>
          </pre>
          <p className="text-7xl sm:text-9xl text-center text-primary-800 dark:text-primary-500 font-italianno leading-[0.8]">
            Beautiful
          </p>
          <p className="text-5xl sm:text-7xl text-center text-primary-800 dark:text-primary-500">
            <span className="flex justify-center">
              Resp
              <FiSmartphone className="-mx-1 sm:-mx-2" />
              nsive
            </span>
          </p>
        </div>
        <Typography className="text-center" level="subheading">
          user interfaces
        </Typography>
      </Container>
    </Section>
  );
};
