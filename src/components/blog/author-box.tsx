import React from "react";
import Link from "next/link";
import { Author } from "../../../content/blog/types";
import { Container } from "@/components/ui/container";

interface AuthorBoxProps {
  author?: Author;
}

export function AuthorBox({ author }: AuthorBoxProps) {
  if (!author) return null;

  return (
    <Container className="pb-16 md:pb-24">
      <div className="max-w-[800px] mx-auto bg-[#FAF9F5] rounded-2xl p-8 border border-[#E4E2DA] shadow-xs flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
        {author.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-sm shrink-0 bg-white" 
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-[#167c70]/10 flex items-center justify-center text-[#167c70] font-bold text-3xl border-4 border-white shadow-sm shrink-0">
            {author.name.charAt(0)}
          </div>
        )}
        
        <div className="flex flex-col space-y-2 justify-center h-full pt-2 md:pt-4">
          <h3 className="text-xl font-bold text-[#0F2A26]">
            {author.slug ? (
              <Link href={`/author/${author.slug}`} className="hover:text-[#167c70] transition-colors">
                {author.name}
              </Link>
            ) : (
              author.name
            )}
          </h3>
          
          {author.bio && (
            <p className="text-zinc-600 leading-relaxed text-sm">
              {author.bio}
            </p>
          )}
          
          {author.slug && (
            <div className="pt-2">
              <Link 
                href={`/author/${author.slug}`}
                className="text-sm font-semibold text-[#167c70] hover:text-[#125f57] transition-colors"
              >
                View all posts by {author.name} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
