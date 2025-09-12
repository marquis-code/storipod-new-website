import { ref } from 'vue';
import { blogs_api } from '@/api_factory/modules/blogs';
import { useCustomToast } from '@/composables/core/useCustomToast';
import type { CreateBlogDto } from '~/types/blog';

const { showToast } = useCustomToast();

export const useCreateBlog = () => {
  const loading = ref(false);
  const form = ref<CreateBlogDto>({
    title: '',
    content: '',
    excerpt: '',
  });

  const createBlog = async () => {
    loading.value = true;
    try {
      const res = await blogs_api.$_create_blog(form.value);
      showToast({ title: 'Success', message: 'Blog created.', toastType: 'success', duration: 2000 });
      return res.data;
    } catch {
      showToast({ title: 'Error', message: 'Blog creation failed.', toastType: 'error', duration: 2000 });
    } finally {
      loading.value = false;
    }
  };

  return { form, createBlog, loading };
};
