import { ROUTE_MAP } from "@config/index";
import { Link } from "@ui/Link";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href={`${ROUTE_MAP.blogPosts.root}`}>
        {`Back to `}
        <code className="rounded-md bg-base-300 p-1 dark:bg-base-1000">
          blog
        </code>
      </Link>
      {children}
    </>
  );
}
