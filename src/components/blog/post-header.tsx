import React from "react";
import Link from "next/link";
import { BlogPost } from "../../../content/blog/types";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-start space-y-6">
          <Link 
            href="/blogs"
            className="text-primary hover:text-primary-hover font-medium flex items-center text-sm mb-2 transition-colors"
          >
            ← Back to Blog
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-semibold text-[#152825] leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-base text-text-muted gap-x-3 gap-y-2 pt-4 border-t border-border/60 w-full">
            {post.author && (
              <span className="font-medium text-text flex items-center gap-2">
                {post.author.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-8 h-8 rounded-full object-cover bg-background-muted" 
                  />
                )}
                {post.author.slug ? (
                  <Link href={`/author/${post.author.slug}`} className="hover:text-primary transition-colors">
                    {post.author.name}
                  </Link>
                ) : (
                  post.author.name
                )}
              </span>
            )}
            
            {post.author && (formattedDate || post.readingTime) && (
              <span className="text-border">•</span>
            )}
            
            {formattedDate && (
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            )}
            
            {formattedDate && post.readingTime && (
              <span className="text-border">•</span>
            )}
            
            {post.readingTime && (
              <span>{post.readingTime}</span>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
