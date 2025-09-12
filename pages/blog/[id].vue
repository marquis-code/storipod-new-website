<!-- Blog Detail Page: pages/blog/[slug].vue -->
<template>
  <div class="min-h-screen bg-white">
    <!-- Header with Auth -->
    <header class="border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button 
              @click="navigateTo('/')"
              class="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
            </button>
            <div class="text-lg font-bold">Blog</div>
          </div>
          
          <div class="flex items-center space-x-4">
            <button 
              v-if="!isLoggedIn"
              @click="showAuthModal('signup')"
              class="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Get started
            </button>
            <button 
              v-if="!isLoggedIn"
              @click="showAuthModal('login')"
              class="px-4 py-2 text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors duration-200"
            >
              Sign In
            </button>
            <div v-if="isLoggedIn" class="flex items-center space-x-3">
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
          </div>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="animate-pulse">
        <div class="h-4 bg-gray-200 rounded w-32 mb-8"></div>
        <div class="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div class="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div class="h-6 bg-gray-200 rounded w-5/6 mb-8"></div>
        <div class="flex items-center space-x-4 mb-8">
          <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded w-32"></div>
            <div class="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
      <p class="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
      <button 
        @click="navigateTo('/')"
        class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
      >
        Back to Home
      </button>
    </div>

    <!-- Article Content -->
    <div v-else-if="blog" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Member-only badge -->
      <div v-if="blog?.isPinned" class="flex items-center space-x-2 mb-8">
        <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span class="text-yellow-600 text-sm font-medium">Member-only story</span>
      </div>

      <!-- Article Title -->
      <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
        {{ blog.title }}
      </h1>

      <!-- Article Subtitle -->
      <p v-if="blog.excerpt" class="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl">
        {{ blog.excerpt }}
      </p>

      <!-- Author Info & Meta -->
      <div class="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
        <div class="flex items-center space-x-4">
          <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
            <img 
              v-if="blog.author?.avatar" 
              :src="blog.author.avatar" 
              :alt="`${blog.author.firstName} ${blog.author.lastName}`"
              class="w-full h-full object-cover"
            >
            <div v-else class="w-full h-full flex items-center justify-center text-gray-600 font-medium">
              {{ blog.author?.firstName?.charAt(0) }}{{ blog.author?.lastName?.charAt(0) }}
            </div>
          </div>
          <div>
            <div class="flex items-center space-x-3">
              <span class="font-medium text-gray-900">
                {{ blog.author?.firstName }} {{ blog.author?.lastName }}
              </span>
              <button 
                v-if="!isLoggedIn"
                @click="showAuthModal('login')"
                class="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
              >
                Follow
              </button>
              <button 
                v-else
                class="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200"
              >
                Follow
              </button>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-500 mt-1">
              <span>{{ blog.readTime }} min read</span>
              <span>·</span>
              <time :datetime="blog.publishedAt">{{ formatDate(blog.publishedAt) }}</time>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-2">
          <button 
            @click="handleLike"
            :class="[
              'flex items-center space-x-2 p-2 rounded-full transition-colors duration-200',
              isLiked ? 'text-red-500 hover:bg-red-50' : 'text-gray-400 hover:bg-gray-100'
            ]"
            :aria-label="isLiked ? 'Unlike this post' : 'Like this post'"
          >
            <svg class="w-5 h-5" :fill="isLiked ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="text-sm">{{ likesCount }}</span>
          </button>

          <button 
            @click="handleComment"
            class="flex items-center space-x-2 p-2 rounded-full text-gray-400 hover:bg-gray-100 transition-colors duration-200"
            :aria-label="'Add comment'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="text-sm">{{ commentsCount }}</span>
          </button>

          <button 
            class="p-2 rounded-full text-gray-400 hover:bg-gray-100 transition-colors duration-200"
            @click="handleBookmark"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </button>

          <button class="p-2 rounded-full text-gray-400 hover:bg-gray-100 transition-colors duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Featured Image -->
      <div v-if="blog.featuredImage && !blog.featuredImage.includes('example.com')" class="mb-12">
        <img 
          :src="blog.featuredImage" 
          :alt="blog.title"
          class="w-full h-96 object-cover rounded-lg"
        >
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none mb-16">
        <div v-html="formatContent(blog.content)" class="text-lg leading-relaxed text-gray-800"></div>
      </div>

      <!-- Tags -->
      <div v-if="blog.tags && blog.tags.length > 0" class="flex flex-wrap gap-2 mb-16 pt-8 border-t border-gray-200">
        <span 
          v-for="tag in blog.tags" 
          :key="tag"
          class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Comments Section -->
      <section class="border-t border-gray-200 pt-12">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900">
            Responses ({{ commentsCount }})
          </h2>
        </div>

        <!-- Comment Input -->
        <div class="mb-12">
          <div class="flex items-start space-x-4">
            <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span class="text-sm font-medium text-gray-600">
                {{ isLoggedIn ? user?.firstName?.charAt(0) : 'U' }}
              </span>
            </div>
            <div class="flex-1">
              <div 
                class="w-full p-4 border border-gray-200 rounded-lg cursor-text hover:border-gray-300 transition-colors duration-200 bg-gray-50"
                @click="handleCommentInput"
              >
                <p class="text-gray-500">What are your thoughts?</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Comments Loading -->
        <div v-if="commentsLoading" class="space-y-6">
          <div v-for="i in 3" :key="i" class="animate-pulse flex items-start space-x-4">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-gray-200 rounded w-1/4"></div>
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>

        <!-- Comments List -->
        <div v-else-if="comments.length > 0" class="space-y-8">
          <div 
            v-for="comment in comments" 
            :key="comment.id"
            class="flex items-start space-x-4"
          >
            <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              <img 
                v-if="comment?.author?.avatar" 
                :src="comment.author.avatar" 
                :alt="comment.author.name"
                class="w-full h-full object-cover"
              >
              <div v-else class="w-full h-full flex items-center justify-center text-sm font-medium text-gray-600">
                {{ comment?.author?.name?.charAt(0) }}
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center space-x-2 mb-2">
                <span class="font-medium text-gray-900">{{ comment?.author?.name }}</span>
                <span class="text-sm text-gray-500">{{ formatDate(comment?.createdAt) }}</span>
              </div>
              <p class="text-gray-700 leading-relaxed mb-3">{{ comment?.content }}</p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <button 
                  @click="toggleCommentLike(comment.id)"
                  class="flex items-center space-x-1 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  <span>{{ comment.likes || 0 }}</span>
                </button>
                <button class="hover:text-gray-700 transition-colors duration-200">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty Comments State -->
        <div v-else class="text-center py-12">
          <svg class="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No responses yet</h3>
          <p class="text-gray-500 mb-4">Be the first to share your thoughts on this article.</p>
          <button 
            @click="handleCommentInput"
            class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Write a response
          </button>
        </div>
      </section>

      <!-- More from Author Section -->
      <section v-if="moreFromAuthor.length > 0" class="mt-20 pt-12 border-t border-gray-200">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">
          More from {{ blog.author?.firstName }} {{ blog.author?.lastName }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article 
            v-for="relatedBlog in moreFromAuthor" 
            :key="relatedBlog.id"
            class="group cursor-pointer"
            @click="navigateTo(`/blog/${relatedBlog._id}`)"
          >
            <div class="mb-4">
              <div v-if="relatedBlog.featuredImage && !relatedBlog.featuredImage.includes('example.com')" class="w-full h-48 rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img 
                  :src="relatedBlog.featuredImage" 
                  :alt="relatedBlog.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
              </div>
              <div v-else class="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
                {{ relatedBlog.title }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2">
                {{ relatedBlog.excerpt }}
              </p>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <time :datetime="relatedBlog.publishedAt">{{ formatDate(relatedBlog.publishedAt) }}</time>
                <span class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>{{ relatedBlog.viewCount || 0 }}</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Comment Modal -->
    <Teleport to="body">
      <div 
        v-if="showCommentModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click.self="showCommentModal = false"
      >
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900">Write a response</h3>
              <button 
                @click="showCommentModal = false"
                class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start space-x-4 mb-4">
              <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span class="text-sm font-medium text-gray-600">
                  {{ user?.firstName?.charAt(0) || 'U' }}
                </span>
              </div>
              <div class="text-sm text-gray-600">
                <p class="font-medium">{{ user?.firstName || 'User' }}</p>
                <p>Responding to <span class="font-medium">{{ blog?.author?.firstName }} {{ blog?.author?.lastName }}</span></p>
              </div>
            </div>
            <form @submit.prevent="submitComment">
              <textarea
                v-model="newComment"
                placeholder="What are your thoughts?"
                class="w-full p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-black focus:border-transparent"
                rows="6"
                :disabled="submittingComment"
              ></textarea>
              <div class="flex items-center justify-between mt-4">
                <p class="text-sm text-gray-500">
                  {{ newComment.length }}/280 characters
                </p>
                <div class="flex items-center space-x-3">
                  <button 
                    type="button"
                    @click="showCommentModal = false"
                    class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    :disabled="submittingComment"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    :disabled="!newComment.trim() || newComment.length > 280 || submittingComment"
                    class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {{ submittingComment ? 'Publishing...' : 'Respond' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Auth Modal -->
    <Teleport to="body">
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
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useFetchBlogById } from "@/composables/blogs/useFetchBlog"
import { useGetComments } from "@/composables/comments/useFetchComments"
import { useRegister } from "@/composables/users/useRegister"
import { useLikeBlog } from "@/composables/blogs/useLikeBlog"
import { useLogin } from "@/composables/users/useLogin"
import { useCreateComment } from "@/composables/comments/useCreateComment"
const { blog, fetchBlogById, loading } = useFetchBlogById()
const { comments,loading: commentsLoading } = useGetComments()
const {  register, loading: registering } = useRegister()
const { login, loading: logining } = useLogin()
const { likeBlog: handleLike, loading: likingBlog } = useLikeBlog()
const { form, createComment, loading: creatingComment } = useCreateComment()
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

interface Blog {
  id: string
  _id: string
  title: string
  excerpt: string
  content: string
  author: {
    firstName: string
    lastName: string
    avatar?: string
  }
  featuredImage?: string
  tags?: string[]
  publishedAt: string
  readTime: number
  likes?: string[]
  isPinned?: boolean
}

interface Comment {
  id: string
  content: string
  author: {
    name: string
    avatar?: string
  }
  createdAt: string
  likes: number
  replies?: Comment[]
}

const route = useRoute()
const router = useRouter()

const error = ref(false)
const showCommentModal = ref(false)
const newComment = ref('')
const submittingComment = ref(false)
const moreFromAuthor = ref<Blog[]>([])

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

// Computed properties
const isLiked = computed(() => {
  if (!blog.value || !isLoggedIn.value) return false
  return blog.value.likes?.includes(user.value?.id || '') || false
})

const likesCount = computed(() => blog.value?.likes?.length || 0)
const commentsCount = computed(() => comments.value.length || 0)

// Check if user is logged in on mount
onMounted(() => {
  const token = process.client ? localStorage.getItem('auth_token') : null
  const userData = process.client ? localStorage.getItem('user_data') : null
  
  if (token && userData) {
    try {
      user.value = JSON.parse(userData)
    } catch (error) {
      console.error('Error parsing user data:', error)
      if (process.client) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
      }
    }
  }
  
})


// Fetch more posts from author
const fetchMoreFromAuthor = async () => {
  if (!blog.value) return
  
  try {
    // This would typically fetch from API, but for demo we'll use mock data
    // In real implementation, you'd fetch blogs by author ID
    const response = await $fetch(`/api/blogs?author=${blog.value.author.firstName}`)
    moreFromAuthor.value = (response.data || [])
      .filter((b: Blog) => b.id !== blog.value?.id)
      .slice(0, 4)
  } catch (err) {
    console.error('Error fetching more from author:', err)
    // Fallback to empty array
    moreFromAuthor.value = []
  }
}

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

// Handle like with auth check
// const handleLike = async () => {
//   if (!requireAuth() || !blog.value) return
  
//   try {
//     await $fetch(`/api/blogs/${blog.value.id}/like`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
//       }
//     })
    
//     // Update local state
//     if (isLiked.value) {
//       blog.value.likes = blog.value.likes?.filter(id => id !== user.value?.id) || []
//     } else {
//       blog.value.likes = [...(blog.value.likes || []), user.value?.id || '']
//     }
//   } catch (error) {
//     console.error('Error toggling like:', error)
//   }
// }

// Handle comment with auth check
const handleComment = () => {
  if (!requireAuth()) return
  showCommentModal.value = true
}

// Handle comment input
const handleCommentInput = () => {
  if (!requireAuth()) return
  showCommentModal.value = true
}

// Handle bookmark with auth check
const handleBookmark = () => {
  if (!requireAuth()) return
  // Implement bookmark functionality
  console.log('Bookmark functionality')
}

// Submit comment
const submitComment = async () => {
  if (!newComment.value.trim() || !blog.value || !isLoggedIn.value) return
  
  try {

    await createComment(newComment.value.trim()).then((response) => {
          // Add new comment to the list
          comments.value.unshift(response.data)
          newComment.value = ''
          showCommentModal.value = false
    })
    // submittingComment.value = true
    
    // const response = await $fetch(`/api/blogs/${blog.value.id}/comments`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    //   },
    //   body: {
    //     content: newComment.value.trim()
    //   }
    // })
  
  } catch (err) {
    console.error('Error submitting comment:', err)
  } finally {
    submittingComment.value = false
  }
}

// Toggle comment like
const toggleCommentLike = async (commentId: string) => {
  if (!requireAuth() || !blog.value) return
  
  try {
    await $fetch(`/api/blogs/${blog.value.id}/comments/${commentId}/like`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    })
    
    // Update local comment likes
    const comment = comments.value.find(c => c.id === commentId)
    if (comment) {
      comment.likes = (comment.likes || 0) + 1
    }
  } catch (err) {
    console.error('Error toggling comment like:', err)
  }
}

// Format content (basic HTML formatting)
const formatContent = (content: string) => {
  if (!content) return ''
  
  // Convert line breaks to paragraphs
  return content
    .split('\n\n')
    .map(paragraph => `<p class="mb-6">${paragraph.replace(/\n/g, '<br>')}</p>`)
    .join('')
}

// Format date
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


// SEO
watchEffect(() => {
  if (blog.value) {
    useHead({
      title: blog.value.title,
      meta: [
        { name: 'description', content: blog.value.excerpt },
        { name: 'keywords', content: blog.value.tags?.join(', ') || '' }
      ]
    })
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
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