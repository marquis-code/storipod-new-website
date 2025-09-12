import { ref } from 'vue';
import { blogs_api } from '@/api_factory/modules/blogs';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useLikeBlog = () => {
  const loading = ref(false);
  const route = useRoute() as any

  const likeBlog = async (id: string) => {
    loading.value = true;
    try {
      await blogs_api.$_like_blog(route.params.id);
      showToast({ title: 'Success', message: 'Blog liked.', toastType: 'success', duration: 2000 });
    } catch {
      showToast({ title: 'Error', message: 'Failed to like blog.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { likeBlog, loading };
};
