import { AppNavHeader } from "@components/AppNavHeader";
import { ROUTE_MAP } from "@config/index";
import { Container } from "@ui/Container";
import { Divider } from "@ui/Divider";
import { Heading } from "@ui/Heading";
import { ExternalLink, Link } from "@ui/Link";
import { Section } from "@ui/Section";
import { Typography } from "@ui/Typography";

import { FiGithub, FiGlobe, FiMail, FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <AppNavHeader
        className="print:hidden"
        currentRoute={ROUTE_MAP.resume.root}
      />
      <main>
        <Section className="print:hidden">
          <Container>
            <Link href={ROUTE_MAP.about.root}>
              {`Back to `}
              <code className="rounded-md bg-base-300 p-1 dark:bg-base-1000">
                about
              </code>
            </Link>
          </Container>
        </Section>

        <Section>
          <Container>
            <Heading level="h1" className="text-center">
              Max Randle
            </Heading>
            <Divider className="mt-6" />

            <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2">
              <span className="flex gap-4 sm:flex-row-reverse">
                <FiMail size={24} />
                <ExternalLink href="mailto:maxrandle95@gmail.com">
                  maxrandle95@gmail.com
                </ExternalLink>
              </span>
              <span className="flex gap-4">
                <FiGithub size={24} />
                <ExternalLink href="https://github.com/MaxRandle">
                  github.com/MaxRandle
                </ExternalLink>
              </span>
              <span className="flex gap-4 sm:flex-row-reverse">
                <FiGlobe size={24} />
                <ExternalLink href="maxrandle.co.nz">
                  maxrandle.co.nz
                </ExternalLink>
              </span>
              <span className="flex gap-4">
                <FiMapPin size={24} />
                <Typography>Auckland, NZ</Typography>
              </span>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Personal statement</Heading>

              <Divider />

              <Typography>
                Senior Front End Engineer with 7+ years experience delivering
                robust web applications for high stakes, high traffic platforms.
              </Typography>

              <Typography>
                A forward-thinker who anticipates blockers and communicates them
                early.
              </Typography>

              <Typography>
                Thrives in cross-functional teams, bridging the gap between
                design and engineering with strong UI/UX fundamentals, semantic
                HTML, and accessibility.
              </Typography>

              <Typography>
                Proven ability to embed quickly into client environments, build
                trust, and balance technical quality with delivery commitments.
              </Typography>

              <Typography>
                Active in developer communities with a pragmatic eye for modern
                tooling.
              </Typography>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Technical skillset</Heading>

              <Divider />

              <Typography>
                <strong>
                  TypeScript • React • Next • Sass • TailwindCSS • Node
                </strong>
              </Typography>

              <Typography>
                I have very strong proficiency with these technologies as they
                comprise the majority of my technical experience. Outside of
                this I have a strong general understanding of modern web
                development and peripheral tools across the full stack.
              </Typography>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Work experience</Heading>

              <Divider />

              <Heading level="h3">Senior Front end Software Engineer</Heading>
              <Typography>
                <strong>AKQA</strong> • Auckland • April 2025 - Present
              </Typography>
              <Typography>
                TypeScript | React | Next | TailwindCSS | VanillaExtract
              </Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Improve checkout experience for large supermarket eCommerce
                    platforms serving tens of thousands of customers daily.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Collaborate closely with designers and product owners to
                    refine features, and actively contribute to sprint and
                    quarterly planning to ensure work is well defined,
                    appropriately scoped, and aligned with delivery timelines.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Partner with back-end engineers during technical planning to
                    design API contracts and map front-end/back-end
                    interactions, ensuring alignment before implementation.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Deliver critical headless CMS migration under an immovable
                    deadline driven by expiring vendor contracts, successfully
                    shipping to production before cutoff with zero disruption to
                    customers.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Drive alignment across QA discipline by advocating for a
                    streamlined testing strategy, reducing fragile end-to-end
                    tests that blocked deployments and refocusing efforts on
                    meaningful happy-path coverage.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Champion continuous refactoring of tightly-coupled checkout
                    components, extracting reusable UI components and utility
                    functions to improve maintainability and reduce cost of
                    change for future feature work.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Identify and remediate critical accessibility failures
                    across eCommerce sites during downtime, including unusable
                    navigation and missing skip-to-content links.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Embed as the sole AKQA engineer within an established
                    in-client squad, quickly building trust and becoming a key
                    contributor in team ceremonies and technical decisions.
                  </Typography>
                </li>
              </ul>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
