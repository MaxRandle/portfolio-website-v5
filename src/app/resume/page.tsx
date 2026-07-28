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
                Senior Front End Engineer with 8 years of experience building
                web applications across retail, lending, and wealth management,
                including platforms serving hundreds of thousands of customers.
                I thrive in cross-functional teams, bridging the gap between
                design and engineering with strong UI/UX fundamentals, semantic
                HTML, and accessibility. Comfortable owning back-end work when a
                feature calls for it. Proven ability to embed quickly into
                client environments, build trust, and balance technical quality
                with delivery commitments.
              </Typography>
            </div>

            <div className="mt-12 space-y-3">
              <Heading level="h2">Technical skillset</Heading>

              <Divider />

              {/* <div className="grid gap-y-1 gap-x-6 grid-cols-1 sm:grid-cols-[auto_1fr]">
                <Typography level="caption">
                  <strong>Core</strong>
                </Typography>
                <Typography level="caption">
                  TypeScript • React • Next • Node
                </Typography>

                <Typography level="caption" className="mt-3 sm:mt-0">
                  <strong>Styling</strong>
                </Typography>
                <Typography level="caption">
                  TailwindCSS • Sass • VanillaExtract
                </Typography>

                <Typography level="caption" className="mt-3 sm:mt-0">
                  <strong>Data & APIs</strong>
                </Typography>
                <Typography level="caption">
                  GraphQL • REST • OpenAPI • Express • MongoDB
                </Typography>

                <Typography level="caption" className="mt-3 sm:mt-0">
                  <strong>Testing</strong>
                </Typography>
                <Typography level="caption">
                  Playwright • React Testing Library • Jest
                </Typography>

                <Typography level="caption" className="mt-3 sm:mt-0">
                  <strong>Tooling</strong>
                </Typography>
                <Typography level="caption">
                  Vercel • GitHub Actions • Headless CMS
                </Typography>

                <Typography level="caption" className="mt-3 sm:mt-0">
                  <strong>Practice</strong>
                </Typography>
                <Typography level="caption">
                  Accessibility (WCAG) • Semantic HTML • Design systems
                </Typography>
              </div> */}

              <Typography level="subheading">
                TypeScript • React • Next • Node • TailwindCSS • Sass •
                VanillaExtract • GraphQL • REST • OpenAPI • Express • MongoDB •
                Playwright • React Testing Library • Jest • Vercel • GitHub
                Actions • Headless CMS • Accessibility (WCAG) • Semantic HTML •
                Design systems
              </Typography>
            </div>
            <div className="mt-12 space-y-3">
              <Heading level="h2">Work experience</Heading>

              <Divider />

              <Heading level="h3">Senior Front End Software Engineer</Heading>
              <Typography>
                <strong>AKQA</strong> • Auckland • April 2025 - Present
              </Typography>
              <Typography>
                TypeScript | React | Next | TailwindCSS | VanillaExtract
              </Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Provide engineering support for a large supermarket chain's
                    membership platform launch, facilitating 500,000+ customer
                    signups within the first two weeks. Ship urgent production
                    fixes and rapidly implement changes to meet unforeseen
                    requirements under intense, high-traffic launch conditions.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Embed as the sole AKQA engineer within an established
                    in-client squad, quickly building trust and becoming a key
                    contributor in team ceremonies and technical decisions.
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
                    streamlined testing strategy, reducing fragile Playwright
                    suites that blocked deployments and refocusing efforts on
                    meaningful happy-path coverage.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Research and evaluate agentic engineering workflows,
                    presenting comparative analysis of competing approaches to
                    the wider agency ahead of adoption on client projects.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Champion continuous refactoring of tightly-coupled
                    components in a checkout serving tens of thousands of
                    customers daily, extracting reusable UI and utilities to
                    reduce cost of change.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Identify and remediate critical accessibility failures
                    across eCommerce sites, including unusable navigation and
                    missing skip-to-content links.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Partner with back-end engineers during technical planning to
                    design API contracts and map front-end/back-end
                    interactions, ensuring alignment before implementation.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Back End Engineer (Freelance)</Heading>
              <Typography>
                <strong>GuChat</strong> • Remote • August 2024 - February 2025
              </Typography>
              <Typography>TypeScript | Node | Express | OpenAPI</Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Sole engineer on a public-facing API for a gamified Telegram
                    applet, keeping the service small and decoupled from
                    surrounding systems to hold a sub 100ms response time.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Generated a self-validating OpenAPI spec directly from the
                    API source code so it was always guaranteed to match the
                    implementation, maintained alongside a developer guide with
                    embedded examples.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Established end-to-end type safety by having the applet
                    generate its client types from that spec, upskilling a
                    separate contractor team on the code generation techniques
                    involved.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Worked directly with the client to translate business goals
                    into technical requirements, presenting options and
                    trade-offs to support decisions on approach.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front End Software Engineer</Heading>
              <Typography>
                <strong>Lendable</strong> (consumer lending) • London, UK • May
                2023 - May 2024
              </Typography>
              <Typography>TypeScript | React | Next | Sass</Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Modularised core UI components in a codebase left unstable
                    by an abandoned CSS migration, with pervasive overrides,
                    element-level styles, and long-running production incidents.
                    Introduced automated visual regression testing and made CSS
                    inheritance maps to identify entrypoints for refactoring,
                    giving the business the technical capability to take on a
                    new whitelabel contract that the previous architecture could
                    not have delivered.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Restored an outdated and unmaintained API spec by
                    reverse-engineering it from back-end source, then
                    established a standard requiring spec changes alongside API
                    changes. Made the spec a reliable contract between front-end
                    and back-end teams, and adopted tooling to generate
                    TypeScript types from it.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Led the rapid development and deployment of a custom static
                    careers site, ensuring zero downtime in recruitment
                    activities while transitioning between ATS providers,
                    delivering a brand-consistent UI under a tight deadline and
                    without design input.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Reduced customer onboarding steps by implementing
                    OpenBanking integration.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Increased customer safety by adding scam prevention features
                    to the application flow.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Presented regularly at Front End Guild sessions and
                    personally recruited engineers from across the business to
                    attend, roughly doubling regular attendance.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front End Software Engineer</Heading>
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
                    Translated rigorous Figma component specs into
                    pixel-perfect, accessible, reusable React components,
                    negotiating with designers during product shaping where more
                    practical implementation alternatives existed.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Shared ownership with one other front-end engineer of how
                    the design system was structured in the codebase, including
                    the mapping between code-level style variables and their
                    Figma counterparts.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Established software patterns for form handling and
                    branching user flows, increasing flexibility, scalability,
                    and maintainability across the product.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Built static marketing pages with content served from a
                    headless CMS, using Incremental Static Regeneration to keep
                    content current without sacrificing performance.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Wrote end-to-end Playwright tests and configured a Bitbucket
                    pipeline build step to run them, improving release
                    stability.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Built the front-end measurement layer — Mixpanel event
                    tracking, FullStory session replay, and bespoke A/B testing
                    capability to validate assumptions about user behaviour.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Full stack Software Engineer</Heading>
              <Typography>
                <strong>Renti Ltd</strong> • Auckland, NZ • Aug 2021 - Nov 2021
              </Typography>
              <Typography>
                React | Next | Node | Express | MongoDB | GraphQL | Sass
              </Typography>

              <ul className="list-disc ml-8">
                <li>
                  <Typography level="caption">
                    Worked on the React front end, using server-side rendering
                    for multi-step flows and forms.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Worked across the back end, building API routes and GraphQL
                    resolvers against existing database schemas.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Shared responsibility for sprint planning, story pointing,
                    work elaboration, and MVP scoping in a small team with no
                    dedicated product role.
                  </Typography>
                </li>
              </ul>

              <Divider />

              <Heading level="h3">Front End and Automation Engineer</Heading>
              <Typography>
                <strong>Probity Consulting</strong> • Auckland, NZ • Jul 2018 -
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
                    Workshopped directly with the client to scope and build a
                    web portal for truck drivers to manage shipping data,
                    covering complex forms, file upload/download, CRUD
                    operations, authentication, and user permissions.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Designed, built, and deployed automation solutions against
                    large-scale ERP systems, including a fully autonomous UiPath
                    bot for Zespri that scraped external carrier websites and
                    entered shipping updates into SAP. Worked in secure
                    government environments handling sensitive payroll and
                    medical data.
                  </Typography>
                </li>
                <li>
                  <Typography level="caption">
                    Conducted technical interviews and candidate selection, and
                    trained junior staff.
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
