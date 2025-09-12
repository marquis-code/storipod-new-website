import { GATEWAY_ENDPOINT } from "../axios.config";
import type { CreateCommentDto } from "@/types/comment.ts";

export const comments_api = {
  $_create_comment: (payload: CreateCommentDto) => {
    const url = "/comments";
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_create_comment_for_blog: (blogId: string, payload: CreateCommentDto) => {
    const url = `/comments/${blogId}/comments`;
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_get_comments_by_blog: (blogId: string) => {
    const url = `/comments/blog/${blogId}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_comment: (id: string) => {
    const url = `/comments/${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_replies: (id: string) => {
    const url = `/comments/${id}/replies`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_update_comment: (id: string, content: string) => {
    const url = `/comments/${id}`;
    return GATEWAY_ENDPOINT.patch(url, { content });
  },
  $_delete_comment: (id: string) => {
    const url = `/comments/${id}`;
    return GATEWAY_ENDPOINT.delete(url);
  },
  $_like_comment: (id: string) => {
    const url = `/comments/${id}/like`;
    return GATEWAY_ENDPOINT.post(url);
  },
  $_unlike_comment: (id: string) => {
    const url = `/comments/${id}/like`;
    return GATEWAY_ENDPOINT.delete(url);
  },
};
