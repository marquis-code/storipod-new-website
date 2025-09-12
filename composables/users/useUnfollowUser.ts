import { ref } from 'vue';
import { users_api } from '@/api_factory/modules/users';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useUnfollowUser = () => {
  const loading = ref(false);

  const unfollowUser = async (id: string) => {
    loading.value = true;
    try {
      await users_api.$_unfollow_user(id);
      showToast({ title: 'Success', message: 'User unfollowed.', toastType: 'success', duration: 2000 });
    } catch {
      showToast({ title: 'Error', message: 'Failed to unfollow user.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { unfollowUser, loading };
};
