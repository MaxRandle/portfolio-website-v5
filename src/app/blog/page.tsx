import { readdirSync, existsSync } from "fs";
import { join } from "path";
import { ROUTE_MAP } from "@config/index";
import { Heading } from "@ui/Heading";
import { Link } from "@ui/Link";
import { Typography } from "@ui/Typography";

type BlogPostMetadata = {
  slug: string;
  title: string;
  summary?: string;
};

/*
TBH this would be better as just hard coded routes rather than 
reading the files with hard coded page locations etc etc.
*/

async function getBlogPostsFrontMatter(): Promise<BlogPostMetadata[]> {
  const postsDir = join(process.cwd(), "src/app/blog/(posts)");
  const slugs = readdirSync(postsDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(join(postsDir, entry.name, "page.mdx")),
    )
    .map((entry) => entry.name);

  return Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(
        `@src/app/blog/(posts)/${slug}/page.mdx`
      );
      return { slug, ...metadata };
    }),
  );
}

export default async function BlogPage() {
  const blogPostsFrontMatter = await getBlogPostsFrontMatter();

  return (
    <>
      <Heading className="mt-20" level={"h2"}>
        Blog
      </Heading>
      <ul className="mt-20 space-y-8">
        {blogPostsFrontMatter.map(({ slug, summary, title }) => (
          <li key={slug}>
            <Link
              className="text-lg sm:text-xl"
              href={ROUTE_MAP.blogPosts.slug(slug)}
            >
              {title}
            </Link>
            <Typography>{summary}</Typography>
          </li>
        ))}
      </ul>
    </>
  );
}
