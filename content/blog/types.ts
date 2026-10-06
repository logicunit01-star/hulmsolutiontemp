export type Author = {
  id: string;
  slug: string;
  name: string;
  avatar?: string;
  bio?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  featuredImage?: {
    src: string;
    alt: string;
  };
  authorId: string;
  author?: Author; // Resolved at runtime
  publishedAt?: string;
  readingTime?: string;
  content?: string;
};
