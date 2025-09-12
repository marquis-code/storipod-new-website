import { ref } from 'vue';
import { auth_api } from '@/api_factory/modules/auth';
import { useCustomToast } from '@/composables/core/useCustomToast';

const { showToast } = useCustomToast();

export const useGetProfile = () => {
  const loading = ref(false);
  const profile = ref<any>(null);

  const getProfile = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_get_profile();
      profile.value = res.data;
    } catch (err: any) {
      showToast({ title: 'Error', message: err?.response?.data?.message || 'Failed to fetch profile', toastType: 'error', duration: 3000 });
    } finally {
      loading.value = false;
    }
  };

  return { profile, getProfile, loading };
};
