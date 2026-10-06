import React from "react";
import { Container } from "@/components/ui/container";

interface PostContentProps {
  content?: string;
}

export function PostContent({ content }: PostContentProps) {
  if (!content) {
    return (
      <Container className="py-12">
        <div className="max-w-3xl mx-auto text-text-muted italic">
          No content provided for this article.
        </div>
      </Container>
    );
  }

  return (
    <Container className="pb-16 md:pb-24">
      <article 
        className="max-w-[800px] mx-auto prose prose-lg md:prose-xl prose-slate 
                   prose-headings:font-semibold prose-headings:text-text prose-headings:tracking-tight 
                   prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                   prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                   prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-6
                   prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                   prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-text prose-blockquote:italic prose-blockquote:rounded-r-lg
                   prose-ul:list-disc prose-ul:pl-6 prose-ul:text-text-muted
                   prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-text-muted
                   prose-li:my-2
                   max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
}
