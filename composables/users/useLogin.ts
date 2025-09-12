import { ref } from 'vue';
import { auth_api } from '@/api_factory/modules/auth';
import { useCustomToast } from '@/composables/core/useCustomToast';
import type { LoginDto, AuthResponse } from '~/types/auth';

const { showToast } = useCustomToast();

export const useLogin = () => {
  const loading = ref(false);
  const credential = ref<LoginDto>({ email: '', password: '' });
  const user = ref<AuthResponse['user'] | null>(null);

  const login = async (payload: LoginDto) => {
    loading.value = true;
    try {
      const res = await auth_api.$_login(payload) as any;
      user.value = res.data.user;
      localStorage.setItem('auth_token', res.data.access_token)
      localStorage.setItem('user_data', res.data.user)
      showToast({ title: 'Welcome', message: `Hello ${user.value?.firstName}`, toastType: 'success', duration: 3000 });
      return res.data.user;
    } catch (err: any) {
      showToast({ title: 'Error', message: err?.response?.data?.message || 'Login failed', toastType: 'error', duration: 3000 });
    } finally {
      loading.value = false;
    }
  };

  return { credential, user, login, loading };
};
