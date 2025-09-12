<!-- components/CommentModal.vue -->
<template>
  <Teleport to="body">
    <div 
      v-if="show"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Write a response</h3>
            <button 
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <!-- User Info -->
          <div class="flex items-start space-x-4 mb-4">
            <div class="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
              <img 
                v-if="currentUser?.avatar" 
                :src="currentUser.avatar" 
                :alt="currentUser.name"
                class="w-full h-full object-cover"
              >
              <div v-else class="w-full h-full flex items-center justify-center text-sm font-medium text-gray-600">
                {{ currentUser?.name?.charAt(0) || 'U' }}
              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p class="font-medium">{{ currentUser?.name || 'User' }}</p>
              <p v-if="respondingTo">
                Responding to <span class="font-medium">{{ respondingTo }}</span>
              </p>
            </div>
          </div>

          <!-- Comment Form -->
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <textarea
                v-model="comment"
                ref="textareaRef"
                placeholder="What are your thoughts?"
                class="w-full p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                :rows="rows"
                :disabled="submitting"
                :maxlength="maxLength"
                @input="adjustTextareaHeight"
              ></textarea>
            </div>

            <!-- Character Count and Actions -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <p class="text-sm text-gray-500">
                  {{ comment.length }}/{{ maxLength }} characters
                </p>
                <div 
                  v-if="comment.length > maxLength * 0.8" 
                  class="text-xs"
                  :class="comment.length > maxLength ? 'text-red-500' : 'text-yellow-500'"
                >
                  {{ comment.length > maxLength ? 'Character limit exceeded' : 'Approaching limit' }}
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <button 
                  type="button"
                  @click="closeModal"
                  class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  :disabled="submitting"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  :disabled="!isValidComment || submitting"
                  class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <svg 
                    v-if="submitting"
                    class="animate-spin w-4 h-4"
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ submitting ? 'Publishing...' : 'Respond' }}</span>
                </button>
              </div>
            </div>
          </form>

          <!-- Guidelines (Optional) -->
          <div v-if="showGuidelines" class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-sm font-medium text-gray-900 mb-2">Community Guidelines</h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Be respectful and constructive</li>
              <li>• Stay on topic</li>
              <li>• No spam or self-promotion</li>
              <li>• Keep comments under {{ maxLength }} characters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
  respondingTo?: string
  maxLength?: number
  showGuidelines?: boolean
  currentUser?: {
    name: string
    avatar?: string
  }
}

interface Emits {
  (e: 'close'): void
  (e: 'submit', comment: string): void
}

const props = withDefaults(defineProps<Props>(), {
  maxLength: 1000,
  showGuidelines: false
})

const emit = defineEmits<Emits>()

// Reactive data
const comment = ref('')
const submitting = ref(false)
const rows = ref(4)
const textareaRef = ref<HTMLTextAreaElement>()

// Computed
const isValidComment = computed(() => {
  return comment.value.trim().length > 0 && 
         comment.value.length <= props.maxLength
})

// Methods
const closeModal = () => {
  if (submitting.value) return
  emit('close')
  resetForm()
}

const handleSubmit = async () => {
  if (!isValidComment.value || submitting.value) return
  
  try {
    submitting.value = true
    emit('submit', comment.value.trim())
    
    // Wait a bit to show the loading state
    await new Promise(resolve => setTimeout(resolve, 500))
    
    resetForm()
    emit('close')
  } catch (error) {
    console.error('Error submitting comment:', error)
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  comment.value = ''
  rows.value = 4
}

const adjustTextareaHeight = () => {
  nextTick(() => {
    const textarea = textareaRef.value
    if (!textarea) return
    
    // Reset height to recalculate
    textarea.style.height = 'auto'
    
    // Calculate new height based on content
    const newHeight = Math.max(textarea.scrollHeight, 100)
    const maxHeight = 300
    
    if (newHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`
      textarea.style.overflowY = 'auto'
    } else {
      textarea.style.height = `${newHeight}px`
      textarea.style.overflowY = 'hidden'
    }
  })
}

// Focus textarea when modal opens
watch(() => props.show, (newShow) => {
  if (newShow) {
    nextTick(() => {
      textareaRef.value?.focus()
    })
  }
})

// Keyboard shortcuts
const handleKeydown = (event: KeyboardEvent) => {
  // Cmd/Ctrl + Enter to submit
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
    event.preventDefault()
    handleSubmit()
  }
  
  // Escape to close
  if (event.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Focus styles */
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
}

/* Animation for modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>