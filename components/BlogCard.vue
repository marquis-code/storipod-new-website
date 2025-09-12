<template>
  <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div v-if="blog.coverImage" class="h-48 bg-gray-200">
      <img 
        :src="blog.coverImage" 
        :alt="blog.title"
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="p-6">
      <div class="flex items-center mb-4">
        <img 
          :src="blog.author.avatar || '/default-avatar.png'" 
          :alt="blog.author.name"
          class="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p class="text-sm font-medium text-gray-900">{{ blog.author.name }}</p>
          <p class="text-xs text-gray-500">{{ formatDate(blog.createdAt) }}</p>
        </div>
      </div>
      
      <h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {{ blog.title }}
      </h2>
      
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ blog.excerpt }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in blog.tags" 
          :key="tag"
          class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <span>{{ blog.readTime }} min read</span>
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            {{ blog.likes.length }}
          </span>
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
            </svg>
            {{ blog.comments.length }}
          </span>
        </div>
        
        <NuxtLink 
          :to="`/blog/${blog._id}`"
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  blog: Blog
}

defineProps<Props>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
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
</style>