import React from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogPost } from "../../../content/blog/types";
import { PostCard } from "./post-card";

interface PostGridProps {
  posts: BlogPost[];
}

export function PostGrid({ posts }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <Section className="py-12">
        <Container>
          <div className="text-center text-text-muted py-12 border-2 border-dashed border-border rounded-xl">
            No blog posts found.
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
