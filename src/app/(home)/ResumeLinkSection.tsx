import { ROUTE_MAP } from "@config/index";
import { ButtonStyleLink } from "@ui/Button";
import { Container } from "@ui/Container";
import { Divider } from "@ui/Divider";
import { Section } from "@ui/Section";

import { FaChevronRight } from "react-icons/fa";

export const ResumeLinkSection: React.FC = () => {
  return (
    <Section spacing="lg">
      <Container className="flex w-full items-center">
        <Divider className="grow" />
        <ButtonStyleLink
          className="inline-flex items-center gap-2"
          intent={"secondary"}
          href={ROUTE_MAP.resume.root}
        >
          {`résumé`}
          <FaChevronRight size={14} />
        </ButtonStyleLink>
        <Divider className="grow" />
      </Container>
    </Section>
  );
};
