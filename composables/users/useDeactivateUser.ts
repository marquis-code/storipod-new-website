import { ref } from 'vue';
import { users_api } from '@/api_factory/modules/users';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useDeactivateUser = () => {
  const loading = ref(false);

  const deactivateUser = async (id: string) => {
    loading.value = true;
    try {
      await users_api.$_deactivate_user(id);
      showToast({ title: 'Success', message: 'User deactivated.', toastType: 'success', duration: 2000 });
    } catch {
      showToast({ title: 'Error', message: 'Failed to deactivate user.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { deactivateUser, loading };
};
