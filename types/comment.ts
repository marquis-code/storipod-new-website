export interface Comment {
  _id: string;
  content: string;
  author: string; // userId
  blog: string; // blogId
  parentComment?: string | null;
  likes: string[]; // userIds
  isEdited: boolean;
  isActive: boolean;
  replies: string[]; // commentIds
  createdAt: string;
  updatedAt: string;
}

// ✅ Matches backend CreateCommentDto
export interface CreateCommentDto {
  content: string;
  blog?: string; // blogId
  parentComment?: string; // commentId
}
