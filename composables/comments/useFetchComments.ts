import { ref } from 'vue';
import { comments_api } from '@/api_factory/modules/comments';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useGetComments = () => {
  const loading = ref(false);
  const comments = ref<any[]>([]);
  const route = useRoute() as any

  const getComments = async () => {
    loading.value = true;
    try {
      const res = await comments_api.$_get_comments_by_blog(route.params.id);
      console.log(res, 'code red')
      comments.value = res?.data?.data?.comments || [];
    } catch (err: any) {
      showToast({ title: 'Error', message: err?.response?.data?.message || 'Failed to fetch comments', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getComments()
  })

  return { comments, getComments, loading };
};
