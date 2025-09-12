<!-- Blog Listing Page -->
<template>
  <div class="min-h-screen bg-white">
    <!-- Header Banner -->
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2 text-amber-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-sm font-medium">Writing is for everyone. Register for Innovative Day</span>
          </div>
          <div class="lg:flex items-center lg:space-x-4 space-y-3 lg:space-y-0">
            <button 
              v-if="!isLoggedIn"
              @click="showAuthModal('signup')"
              class="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Create Account
            </button>
            <button 
              v-if="!isLoggedIn"
              @click="showAuthModal('login')"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              Sign In
            </button>
            <div v-if="isLoggedIn" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span class="text-xs font-medium text-gray-600">
                  {{ user?.firstName?.charAt(0) }}{{ user?.lastName?.charAt(0) }}
                </span>
              </div>
              <button 
                @click="logout"
                class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
            <button 
              class="text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors duration-200"
              aria-label="Close banner"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-8 py-8">
        
        <!-- Main Content -->
        <main class="flex-1 lg:order-1 order-2 lg:max-h-screen lg:overflow-y-auto" role="main">
          <!-- Navigation Tabs -->
          <div class="border-b border-gray-200 mb-8">
            <nav class="-mb-px flex space-x-8" aria-label="Blog navigation">
              <button 
                class="border-b-2 border-gray-900 py-2 px-1 text-sm font-medium text-gray-900"
                aria-current="page"
              >
                For you
              </button>
              <button 
                class="border-b-2 border-transparent py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
              >
                Featured
              </button>
            </nav>
          </div>

          <!-- Following Notice -->
          <div class="bg-gray-50 rounded-lg p-4 mb-8 flex items-start justify-between">
            <p class="text-sm text-gray-700 flex-1">
              "Following" and your topics are now part of the new Following page, which you can find from the sidebar.
            </p>
            <button class="text-sm text-gray-900 hover:text-gray-700 underline ml-4 whitespace-nowrap">
              Okay, got it
            </button>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="space-y-8" aria-live="polite" aria-label="Loading blog posts">
            <div v-for="i in 3" :key="i" class="animate-pulse">
              <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-4">
                    <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-24"></div>
                    <div class="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-4 bg-gray-200 rounded w-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div class="flex items-center space-x-4 mt-4">
                    <div class="h-4 bg-gray-200 rounded w-16"></div>
                    <div class="h-4 bg-gray-200 rounded w-12"></div>
                    <div class="h-4 bg-gray-200 rounded w-8"></div>
                  </div>
                </div>
                <div class="w-full lg:w-48 h-32 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>

          <!-- Blog Posts -->
          <div v-else class="space-y-8">
            <article 
              v-for="blog in filteredBlogs" 
              :key="blog.id"
              class="group cursor-pointer hover:bg-gray-50 hover:rounded-lg hover:p-4 transition-all duration-200"
              :aria-labelledby="`blog-title-${blog.id}`"
              role="article"
              @click="navigateToBlog(blog._id)"
            >
              <div class="flex flex-col lg:flex-row lg:items-start gap-6">
                <!-- Blog Content -->
                <div class="flex-1 min-w-0">
                  <!-- Author Info -->
                  <div class="flex items-center space-x-3 mb-4">
                    <div class="flex-shrink-0">
                      <div v-if="blog.author.avatar" class="w-6 h-6 rounded-full overflow-hidden">
                        <img 
                          :src="blog.author.avatar" 
                          :alt="`${blog.author.firstName} ${blog.author.lastName}`"
                          class="w-full h-full object-cover"
                        >
                      </div>
                      <div v-else class="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <span class="text-xs font-medium text-gray-600">
                          {{ blog.author.firstName.charAt(0) }}{{ blog.author.lastName.charAt(0) }}
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2 text-sm text-gray-600 min-w-0">
                      <span class="font-medium truncate">
                        {{ blog.author.firstName }} {{ blog.author.lastName }}
                      </span>
                      <span class="text-gray-400">in</span>
                      <span class="font-medium text-gray-700 truncate">
                        {{ blog.categories[0] }}
                      </span>
                    </div>
                  </div>

                  <!-- Blog Title & Content -->
                  <div class="mb-4">
                    <h2 
                      :id="`blog-title-${blog.id}`"
                      class="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-gray-700 transition-colors duration-200"
                    >
                      {{ blog.title }}
                    </h2>
                    <p class="text-gray-600 text-sm lg:text-base line-clamp-2 lg:line-clamp-3">
                      {{ blog.excerpt }}
                    </p>
                  </div>

                  <!-- Blog Meta -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4 text-sm text-gray-500">
                      <!-- Pinned Badge -->
                      <div v-if="blog.isPinned" class="flex items-center space-x-1 text-yellow-600">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="text-xs font-medium">Pinned</span>
                      </div>
                      
                      <!-- Publication Date -->
                      <time 
                        :datetime="blog.publishedAt"
                        class="whitespace-nowrap"
                      >
                        {{ formatDate(blog.publishedAt) }}
                      </time>

                      <!-- Reading Stats -->
                      <div class="flex items-center space-x-4">
                        <span class="flex items-center space-x-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          <span>{{ blog.viewCount || 0 }}</span>
                        </span>
                        
                        <span class="flex items-center space-x-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>{{ blog.readTime }} min read</span>
                        </span>
                      </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex items-center space-x-2">
                      <!-- Comments -->
                      <button 
                        class="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        :aria-label="`View comments for ${blog.title}`"
                        @click.stop="handleComment(blog._id)"
                      >
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                        <span class="sr-only">{{ blog.comments?.length || 0 }} comments</span>
                      </button>

                      <!-- Like -->
                      <button 
                        class="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-1"
                        :aria-label="`Like ${blog.title}`"
                        @click.stop="handleLike(blog.id)"
                      >
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                        <span class="text-sm text-gray-500">{{ blog.likes?.length || 0 }}</span>
                      </button>
                    </div>
                  </div>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mt-4">
                    <span 
                      v-for="tag in blog.tags.slice(0, 3)" 
                      :key="tag"
                      class="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                      @click.stop
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Featured Image -->
                <div class="flex-shrink-0 order-first lg:order-last">
                  <div class="w-full lg:w-48 h-32 lg:h-24 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      v-if="blog.featuredImage && !blog.featuredImage.includes('example.com')" 
                      :src="blog.featuredImage" 
                      :alt="blog.title"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    >
                    <div v-else class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>

        <!-- Sticky Sidebar -->
        <aside class="lg:w-80 lg:order-2 order-1 flex-shrink-0 lg:sticky lg:top-8 lg:h-fit" role="complementary">
          <!-- Categories Filter -->
          <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Categories</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                @click="selectedCategory = 'all'"
                :class="[
                  'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                  selectedCategory === 'all' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                All
              </button>
              <button 
                v-for="category in categories" 
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                  selectedCategory === category 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Auth Modal -->
    <div 
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closeAuthModal"
    >
      <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">
            {{ modalType === 'login' ? 'Welcome back' : 'Join us today' }}
          </h2>
          <button 
            @click="closeAuthModal"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleAuth">
          <div class="space-y-4">
            <!-- Signup Fields -->
            <template v-if="modalType === 'signup'">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    v-model="authForm.firstName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    v-model="authForm.lastName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                </div>
              </div>
            </template>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                v-model="authForm.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                v-model="authForm.password"
                type="password"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
            </div>
          </div>

          <button
            type="submit"
            :disabled="authLoading"
            class="w-full mt-6 px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ authLoading ? 'Processing...' : (modalType === 'login' ? 'Sign In' : 'Create Account') }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <button 
            @click="switchAuthMode"
            class="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            {{ modalType === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetBlogs } from "@/composables/blogs/useGetBlogs"
import { useRegister } from "@/composables/users/useRegister"
import { useLogin } from "@/composables/users/useLogin"
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
}

interface AuthForm {
  firstName: string
  lastName: string
  email: string
  password: string
}

// Get blogs data from composable
const { blogs, loading } = useGetBlogs()
const {  register, loading: registering } = useRegister()
const { login, loading: logining } = useLogin()

// Auth state
const showModal = ref(false)
const modalType = ref<'login' | 'signup'>('login')
const authLoading = ref(false)
const user = ref<User | null>(null)
const isLoggedIn = computed(() => !!user.value)

// Auth form data
const authForm = ref<AuthForm>({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})

// Filter state
const selectedCategory = ref('all')

// Sample recommended topics
const recommendedTopics = ref([
  'Fitness', 'Data Structures', 'Nft', 'Rust', 'Self', 'Self Improvement', 'Python'
])

// Extract categories from blogs
const categories = computed(() => {
  if (!blogs.value) return []
  const allCategories = blogs.value.flatMap(blog => blog.categories || [])
  return [...new Set(allCategories)]
})

// Filter blogs based on selected category
const filteredBlogs = computed(() => {
  if (!blogs.value) return []
  if (selectedCategory.value === 'all') return blogs.value
  
  return blogs.value.filter(blog => 
    blog.categories && blog.categories.includes(selectedCategory.value)
  )
})

// Check if user is logged in on mount
onMounted(() => {
  const token = process.client ? localStorage.getItem('auth_token') : null
  const userData = process.client ? localStorage.getItem('user_data') : null
  
  if (token && userData) {
    try {
      user.value = JSON.parse(userData)
    } catch (error) {
      console.error('Error parsing user data:', error)
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user_data')
    }
  }
})

// Auth functions
const showAuthModal = (type: 'login' | 'signup') => {
  modalType.value = type
  showModal.value = true
  resetAuthForm()
}

const closeAuthModal = () => {
  showModal.value = false
  resetAuthForm()
}

const switchAuthMode = () => {
  modalType.value = modalType.value === 'login' ? 'signup' : 'login'
  resetAuthForm()
}

const resetAuthForm = () => {
  authForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
}

const handleAuth = async () => {
  authLoading.value = true
  
  try {
    const endpoint = modalType.value === 'login' ? '/api/auth/login' : '/api/auth/signup'
    const payload = modalType.value === 'login' 
      ? { email: authForm.value.email, password: authForm.value.password }
      : authForm.value

      if(modalType.value === 'login'){
        await login(payload).then((response: any) => {
            localStorage.setItem('auth_token', response.token)
            localStorage.setItem('user_data', JSON.stringify(response.user))
        })
      }

      if(modalType.value === 'signup'){
         await register(payload).then((response: any) => {
            localStorage.setItem('auth_token', response.token)
            localStorage.setItem('user_data', JSON.stringify(response.user))
         })
      }

    // user.value = response.user
    closeAuthModal()
  } catch (error) {
    console.error('Authentication error:', error)
    // Handle error (show toast, etc.)
  } finally {
    authLoading.value = false
  }
}

const logout = () => {
  if (process.client) {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }
  user.value = null
}

const requireAuth = () => {
  if (!isLoggedIn.value) {
    showAuthModal('login')
    return false
  }
  return true
}

// Navigation function
const navigateToBlog = (id: string) => {
  navigateTo(`/blog/${id}`)
}

// Handle like with auth check
const handleLike = async (blogId: string) => {
  if (!requireAuth()) return
  
  try {
    // Make API call to toggle like
    await $fetch(`/api/blogs/${blogId}/like`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    
    // Refresh blogs data
    await refreshData()
  } catch (error) {
    console.error('Error toggling like:', error)
  }
}

// Handle comment with auth check
const handleComment = (blogId: string) => {
  if (!requireAuth()) return
  navigateToBlog(blogId)
}

// Format date function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  if (days < 365) return `${Math.floor(days / 30)} months ago`
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

// SEO Meta
useHead({
  title: 'Blog - Latest Articles and Insights',
  meta: [
    { name: 'description', content: 'Discover the latest articles and insights on web development, technology, and more.' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .line-clamp-2 {
    -webkit-line-clamp: 3;
  }
  
  /* Custom scrollbar for main content */
  main::-webkit-scrollbar {
    width: 6px;
  }
  
  main::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  main::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  main::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
}

/* Smooth transitions */
* {
  transition: all 0.2s ease-in-out;
}

/* Modal backdrop blur effect */
.fixed.inset-0 {
  backdrop-filter: blur(4px);
}

</style>