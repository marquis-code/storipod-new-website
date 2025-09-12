export enum BlogStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: string; // userId
  tags: string[];
  status: BlogStatus;
  featuredImage?: string | null;
  likes: string[]; // userIds
  viewCount: number;
  readTime: number; // minutes
  categories: string[];
  allowComments: boolean;
  isPinned: boolean;
  publishedAt?: string | null;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  } | null;
  createdAt: string;
  updatedAt: string;
}

// ✅ Matches backend CreateBlogDto
export interface CreateBlogDto {
  title: string;
  content: string;
  excerpt: string;
  tags?: string[];
  status?: BlogStatus;
  featuredImage?: string;
  categories?: string[];
  allowComments?: boolean;
  isPinned?: boolean;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// ✅ UpdateBlogDto is just partial
export type UpdateBlogDto = Partial<CreateBlogDto>;
