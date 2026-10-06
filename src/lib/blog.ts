import { blogPosts, EDITORIAL_AUTHOR } from "../../content/blog/posts";
import { BlogPost } from "../../content/blog/types";

/**
 * Attaches the resolved author to a blog post.
 */
function resolvePost(post: BlogPost): BlogPost {
  return {
    ...post,
    author: post.authorId === EDITORIAL_AUTHOR.id ? EDITORIAL_AUTHOR : undefined
  };
}

/**
 * Retrieves all published blog posts.
 * Currently uses local static data from content/blog/posts.ts
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate a brief async delay to mimic fetching data
  await new Promise((resolve) => setTimeout(resolve, 50));
  
  // Sort posts by date descending (newest first) and resolve authors
  return [...blogPosts]
    .map(resolvePost)
    .sort((a, b) => {
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

/**
 * Retrieves a single blog post by its slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  const post = blogPosts.find((p) => p.slug === slug);
  return post ? resolvePost(post) : null;
}
