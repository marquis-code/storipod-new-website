import { GATEWAY_ENDPOINT } from "../axios.config";
import type { CreateBlogDto, UpdateBlogDto } from "@/types/blogs.ts";

export const blogs_api = {
  $_create_blog: (payload: CreateBlogDto) => {
    const url = "/blogs";
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_get_blogs: (query?: any) => {
    const url = "/blogs";
    return GATEWAY_ENDPOINT.get(url, { params: query });
  },
  $_get_trending_blogs: () => {
    const url = "/blogs/trending";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_featured_blogs: () => {
    const url = "/blogs/featured";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_blogs_by_author: (authorId: string) => {
    const url = `/blogs/author/${authorId}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_blog_by_slug: (slug: string) => {
    const url = `/blogs/slug/${slug}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_blog: (id: string) => {
    const url = `/blogs/${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_update_blog: (id: string, payload: UpdateBlogDto) => {
    const url = `/blogs/${id}`;
    return GATEWAY_ENDPOINT.patch(url, payload);
  },
  $_delete_blog: (id: string) => {
    const url = `/blogs/${id}`;
    return GATEWAY_ENDPOINT.delete(url);
  },
  $_like_blog: (id: string) => {
    const url = `/blogs/${id}/like`;
    return GATEWAY_ENDPOINT.post(url);
  },
  $_unlike_blog: (id: string) => {
    const url = `/blogs/${id}/like`;
    return GATEWAY_ENDPOINT.delete(url);
  },

  // Admin
  $_admin_get_all: (query?: any) => {
    const url = "/blogs/admin/all";
    return GATEWAY_ENDPOINT.get(url, { params: query });
  },
  $_admin_pin_blog: (id: string) => {
    const url = `/blogs/admin/${id}/pin`;
    return GATEWAY_ENDPOINT.patch(url);
  },
  $_admin_unpin_blog: (id: string) => {
    const url = `/blogs/admin/${id}/unpin`;
    return GATEWAY_ENDPOINT.patch(url);
  },
};
