import { ref } from 'vue';
import { comments_api } from '@/api_factory/modules/comments';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useUpdateComment = () => {
  const loading = ref(false);

  const updateComment = async (id: string, content: string) => {
    loading.value = true;
    try {
      await comments_api.$_update_comment(id, content);
      showToast({ title: 'Success', message: 'Comment updated.', toastType: 'success', duration: 2000 });
    } catch {
      showToast({ title: 'Error', message: 'Failed to update comment.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { updateComment, loading };
};
