import { ref } from 'vue';
import { blogs_api } from '@/api_factory/modules/blogs';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useGetBlogs = () => {
  const loading = ref(false);
  const blogs = ref<any[]>([]);

  const getBlogs = async (query?: any) => {
    loading.value = true;
    try {
      const res = await blogs_api.$_get_blogs(query);
      console.log(res, 'code red')
      blogs.value = res?.data?.data?.blogs || [];
    } catch (err: any) {
      showToast({ title: 'Error', message: err?.response?.data?.message || 'Failed to fetch blogs', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getBlogs()
  })

  return { blogs, getBlogs, loading };
};
