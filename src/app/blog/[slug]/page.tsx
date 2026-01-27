import { blogs } from "@/content/blogs";
import ArticlePage from "@/features/article/ArticlePage";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogs.find((b) => b.slug === slug);
  if (!post) return null;

  return (
    <ArticlePage
      article={post}
      basePath="blog"
    />
  );
}
