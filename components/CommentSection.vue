<template>
  <div class="mt-8">
    <h3 class="text-lg font-semibold mb-4">Comments ({{ comments.length }})</h3>
    
    <!-- Add Comment Form -->
    <form @submit.prevent="submitComment" class="mb-6">
      <textarea
        v-model="newComment"
        placeholder="Write a comment..."
        class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        rows="3"
      ></textarea>
      <button
        type="submit"
        :disabled="!newComment.trim() || submitting"
        class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ submitting ? 'Posting...' : 'Post Comment' }}
      </button>
    </form>
    
    <!-- Comments List -->
    <div class="space-y-4">
      <div
        v-for="comment in comments"
        :key="comment._id"
        class="bg-gray-50 p-4 rounded-md"
      >
        <div class="flex items-start space-x-3">
          <img
            :src="comment.author.avatar || '/default-avatar.png'"
            :alt="comment.author.name"
            class="w-8 h-8 rounded-full"
          />
          <div class="flex-1">
            <div class="flex items-center space-x-2">
              <h4 class="font-medium text-gray-900">{{ comment.author.name }}</h4>
              <span class="text-xs text-gray-500">{{ formatDate(comment.createdAt) }}</span>
            </div>
            <p class="mt-1 text-gray-700">{{ comment.content }}</p>
          </div>
        </div>
      </div>
      
      <div v-if="comments.length === 0" class="text-center py-8 text-gray-500">
        No comments yet. Be the first to comment!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  comments: Comment[]
  blogId: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  commentAdded: [comment: Comment]
}>()

const apiService = new ApiService()
const newComment = ref('')
const submitting = ref(false)

const submitComment = async () => {
  if (!newComment.value.trim()) return
  
  submitting.value = true
  try {
    const comment = await apiService.addComment(props.blogId, {
      content: newComment.value.trim()
    })
    emit('commentAdded', comment)
    newComment.value = ''
  } catch (error) {
    console.error('Failed to add comment:', error)
  } finally {
    submitting.value = false
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>