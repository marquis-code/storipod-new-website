import { ref } from 'vue';
import { auth_api } from '@/api_factory/modules/auth';
import { useCustomToast } from '@/composables/core/useCustomToast';
import type { RegisterDto } from '~/types/auth';

const { showToast } = useCustomToast();

export const useRegister = () => {
  const loading = ref(false);
  const form = ref<RegisterDto>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const register = async (payload: RegisterDto) => {
    loading.value = true;
    try {
     const res =  await auth_api.$_register(payload);
      localStorage.setItem('auth_token', res.data.access_token)
      localStorage.setItem('user_data', res.data.user)
      showToast({ title: 'Success', message: 'Account created successfully.', toastType: 'success', duration: 3000 });
      return res
    } catch (err: any) {
      showToast({ title: 'Error', message: err?.response?.data?.message || 'Registration failed', toastType: 'error', duration: 3000 });
    } finally {
      loading.value = false;
    }
  };

  return { form, register, loading };
};
