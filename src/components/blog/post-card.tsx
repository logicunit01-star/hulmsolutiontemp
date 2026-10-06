import React from "react";
import Link from "next/link";
import { BlogPost } from "../../../content/blog/types";
import { Card, CardContent } from "@/components/ui/card";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  // Format the date if it exists
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Card className="flex flex-col h-full bg-white border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 overflow-hidden group">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] bg-background-muted overflow-hidden">
        {post.featuredImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40">
            {/* Fallback pattern when no image is provided */}
            <span className="font-semibold text-2xl tracking-widest opacity-30">HULM</span>
          </div>
        )}
      </Link>
      
      <CardContent className="flex flex-col flex-grow p-6">
        <Link href={`/blog/${post.slug}`} className="group-hover:text-primary transition-colors">
          <h2 className="text-xl font-semibold text-[#152825] mb-3 leading-tight line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        {post.excerpt && (
          <p className="text-text-muted text-base mb-6 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex flex-wrap items-center text-sm text-text-muted gap-x-2 gap-y-1">
          {post.author && (
            <span className="font-medium text-text">
              {/* Only link author if we had an author slug, otherwise just show name */}
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
            <span className="text-border mx-1">•</span>
          )}
          
          {formattedDate && (
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          )}
          
          {formattedDate && post.readingTime && (
            <span className="text-border mx-1">•</span>
          )}
          
          {post.readingTime && (
            <span>{post.readingTime}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
