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

              <Divider />

              <Heading level="h3">Back end freelance project</Heading>
              <Typography>
                <strong>GuChat</strong> • Remote • August 2024 - February 2025
              </Typography>
              <Typography>TypeScript | Node | Express</Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Design and build ultra low latency public facing api for
                    gamified telegram applet.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Create and manage comprehensive developer guide and API
                    documentation including self-validating Openapi spec with
                    embedded examples.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Upskill engineering team by introducing modern type safety
                    and code generation techniques.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Understand client ecosystem and goals in order to elicit
                    true requirements directly from client.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Give technical presentations to assist client with choosing
                    the best approach.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front end Software Engineer</Heading>
              <Typography>
                <strong>Lendable</strong> • London, UK • May 2023 - May 2024
              </Typography>
              <Typography>TypeScript | React | Next | Sass</Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Improve product flexibility and reduce cost of change by
                    taking proactive approach to modernising and simplifying a
                    complex and neglected codebase.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Reduce customer onboarding steps and increase conversion
                    rate by implementing OpenBanking integration.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Increase customer safety by adding scam prevention features
                    to the application flow.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Share skills and knowledge with team members by being an
                    active participant in Front-End Guild events.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Streamline inter-disciplinary collaboration by reviving an
                    API spec, and adopting tools to generate TypeScript types
                    from it.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Led the rapid development and deployment of a custom static
                    careers site, ensuring zero downtime in recruitment
                    activities while transitioning between ATS providers.
                    Demonstrated exceptional initiative and skill delivering a
                    high-quality and brand consistent UI under tight deadlines
                    and without designed input.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front end Software Engineer</Heading>
              <Typography>
                <strong>Kernel Wealth</strong> • Auckland, NZ • March 2022 -
                March 2023
              </Typography>
              <Typography>
                TypeScript | React | Next | Sass | TailwindCSS | GraphQL
              </Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Built static marketing pages with content served from a
                    headless CMS for an efficient and up-to-date user experience
                    through the use of Incremental Static Regeneration.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Improved software quality and stability by writing end to
                    end tests and configuring a Bitbucket pipeline build step to
                    run them.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Precisely translated designs into clean, accessible,
                    agnostic React components that adhere to a strict component
                    composition spec, resulting in a consistent user interface.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Established software patterns that increased flexibility,
                    scalability, and maintainability, such as form handling and
                    branching user flows.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Confer with designers to finalise features and address
                    engineering considerations, resulting in a more user-centred
                    product.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Ensured data-driven decision by developing A/B testing
                    capabilities to assist with validating assumptions about
                    user behaviour.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Enhanced user insights by integrating analytics tools into
                    the front-end.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Full stack Software Engineer</Heading>
              <Typography>
                <strong>Renti Ltd</strong> • Auckland, NZ • Aug 2021 - Nov 2022
              </Typography>
              <Typography>
                React | Next | Node | Express | MongoDB | GraphQL | Sass
              </Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Transformed designs into functional React components. Set up
                    pages with SSR to ensured fluid user experience with flows,
                    forms and other functional elements.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Designed and built database schemas, API routes, and
                    resolvers.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Improved team productivity by leading sprint planning, story
                    pointing, elaborating work and scoping MVP for new features,
                    resulting in a more organised and focused development
                    process.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front end and Automation Engineer</Heading>
              <Typography>
                <strong>Probity consulting</strong> • Auckland, NZ • Jul 2018 -
                Sept 2020
              </Typography>
              <Typography>
                <strong>Quanton Ltd (business acquisition)</strong> • Auckland,
                NZ • Oct 2020 - Aug 2021
              </Typography>
              <Typography>React | UiPath | .NET Core | SQL</Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Workshop with client to scope and build a functional web
                    portal for truck drivers to manage shipping data, including
                    complex forms, file upload/download, CRUD operations,
                    authentication and user permissions.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Design, develop, and deploy automation solutions targeting
                    large-scale ERP software applications. Example: Zespri
                    shipping updates bot - UiPath, Orchestrator. Fully
                    autonomous procedure which scraped data from external
                    carrier websites, and entered data into SAP.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Worked with government agencies in secure environments and
                    with sensitive data including payroll and medical.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Business process re-engineering: Document current business
                    process, extract underlying requirements, assess for
                    improvement opportunities, and present to client.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Conducting technical interviews, candidate selection, and
                    training of junior staff.
                  </Typography>
                </li>
              </ul>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Personal life</Heading>
              <Divider />
              <Typography>
                Please see my portfolio website{" "}
                <ExternalLink href="https://maxrandle.co.nz">
                  maxrandle.co.nz
                </ExternalLink>{" "}
                for more about me.
              </Typography>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Qualifications</Heading>
              <Divider />
              <div className="grid gap-y-1 gap-x-4 grid-cols-1 sm:grid-cols-[auto_auto_auto]">
                <Typography className="hidden sm:block">
                  <strong>Qualification</strong>
                </Typography>
                <Typography className="hidden sm:block">
                  <strong>Institution</strong>
                </Typography>
                <Typography className="hidden sm:block">
                  <strong>Year</strong>
                </Typography>
                <Typography level="caption">
                  Bachelor of Science, Major in Computer Science
                </Typography>
                <Typography level="caption">University of Auckland</Typography>
                <Typography level="caption">2018</Typography>
                <Typography level="caption" className="mt-3 sm:mt-0">
                  UiPath Expert Developer Certification
                </Typography>
                <Typography level="caption">
                  UiPath Developer Academy
                </Typography>
                <Typography level="caption">2019</Typography>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
