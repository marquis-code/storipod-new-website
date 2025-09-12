import { ref } from 'vue';
import { users_api } from '@/api_factory/modules/users';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useFollowUser = () => {
  const loading = ref(false);

  const followUser = async (id: string) => {
    loading.value = true;
    try {
      await users_api.$_follow_user(id);
      showToast({ title: 'Success', message: 'User followed.', toastType: 'success', duration: 2000 });
    } catch {
      showToast({ title: 'Error', message: 'Failed to follow user.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { followUser, loading };
};
