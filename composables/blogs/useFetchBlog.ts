import { ref } from 'vue';
import { blogs_api } from '@/api_factory/modules/blogs';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useFetchBlogById = () => {
  const loading = ref(false);
  const blog = ref<any>(null);
  const route = useRoute() as any

  const fetchBlogById = async () => {
    loading.value = true;
    try {
      const res = await blogs_api.$_get_blog(route.params.id);
      blog.value = res?.data?.data || {};
    } catch (err: any) {
      showToast({
        title: 'Error',
        message: err?.response?.data?.message || 'Failed to fetch blog by ID',
        toastType: 'error',
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchBlogById()
  })

  return { blog, fetchBlogById, loading };
};
