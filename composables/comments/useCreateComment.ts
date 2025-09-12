import { ref } from 'vue';
import { comments_api } from '@/api_factory/modules/comments';
import { useCustomToast } from '@/composables/core/useCustomToast';
import type { CreateCommentDto } from '~/types/comment';

const { showToast } = useCustomToast();

export const useCreateComment = () => {
  const loading = ref(false);
  const form = ref<CreateCommentDto>({ content: '' });

  const createComment = async (payload: any) => {
    loading.value = true;
    try {
      const res = await comments_api.$_create_comment(payload);
      showToast({ title: 'Success', message: 'Comment added.', toastType: 'success', duration: 2000 });
      return res.data;
    } catch {
      showToast({ title: 'Error', message: 'Failed to add comment.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { form, createComment, loading };
};
