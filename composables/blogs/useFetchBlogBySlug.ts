import { ref } from 'vue';
import { blogs_api } from '@/api_factory/modules/blogs';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useFetchBlogBySlug = () => {
  const loading = ref(false);
  const blog = ref<any>(null);

  const fetchBlogBySlug = async (slug: string) => {
    loading.value = true;
    try {
      const res = await blogs_api.$_get_blog_by_slug(slug);
      blog.value = res.data;
    } catch (err: any) {
      showToast({
        title: 'Error',
        message: err?.response?.data?.message || 'Failed to fetch blog by slug',
        toastType: 'error',
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return { blog, fetchBlogBySlug, loading };
};
