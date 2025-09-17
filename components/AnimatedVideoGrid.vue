<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(video, index) in videos"
        :key="video.id"
        class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        :class="[
          'opacity-0 translate-y-8',
          { 'animate-fade-in-up': isVisible }
        ]"
        :style="{ animationDelay: `${index * 200}ms` }"
      >
        <!-- Video Container with fixed height -->
        <div class="relative w-full h-56 md:h-64 lg:h-96 bg-black overflow-hidden">
          <video
            ref="videoRefs"
            :src="video.src"
            :poster="video.poster"
            class="w-full h-full object-cover cursor-pointer"
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
            @loadstart="onVideoLoadStart(index)"
            @canplay="onVideoCanPlay(index)"
            @error="onVideoError(index)"
            @click="toggleVideoSound(index)"
          >
            Your browser does not support the video tag.
          </video>
          
          <!-- Loading overlay -->
          <div 
            v-if="videoStates[index]?.loading"
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          <!-- Error overlay -->
          <div 
            v-if="videoStates[index]?.error"
            class="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          >
            <div class="text-white text-center p-4">
              <svg class="w-12 h-12 mx-auto mb-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-sm">Video failed to load</p>
            </div>
          </div>
          
          <!-- Sound toggle overlay -->
          <div 
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center pointer-events-none"
            :class="{ 'opacity-100': videoStates[index]?.isMuted, 'opacity-0 group-hover:opacity-100': !videoStates[index]?.isMuted }"
          >
            <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg 
                v-if="videoStates[index]?.isMuted" 
                class="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
              </svg>
              <svg 
                v-else 
                class="w-8 h-8 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
              </svg>
            </div>
          </div>

          <!-- Custom controls -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="flex items-center justify-center text-white text-xs">
              <button 
                @click.stop="toggleVideoSound(index)"
                class="flex items-center space-x-1 hover:text-blue-400 transition-colors bg-black bg-opacity-50 px-2 py-1 rounded"
              >
                <svg v-if="videoStates[index]?.isMuted" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
                </svg>
                <svg v-else class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                </svg>
                <span>{{ videoStates[index]?.isMuted ? 'Click to unmute' : 'Sound on' }}</span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Video Description -->
        <div class="p-3 bg-gradient-to-b from-white to-gray-50">
          <h3 class="text-lg font-bold text-center text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
            {{ video.title }}
          </h3>
          <!-- <p class="text-gray-600 text-xs leading-relaxed mb-2">
            {{ video.description }}
          </p> -->
          <!-- <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {{ video.duration }}
            </span>
            <span class="text-xs text-gray-500">
              {{ video.category }}
            </span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Video {
  id: number
  src: string
  poster?: string
  title: string
  description: string
  duration: string
  category: string
}

interface VideoState {
  loading: boolean
  error: boolean
  canPlay: boolean
  isPlaying: boolean
  isMuted: boolean
}

// Sample videos from public folder - adjust paths as needed
const videos = ref<Video[]>([
  {
    id: 1,
    src: '/advert1.mp4', // Place your video files in public/videos/
    poster: '/images/video1-poster.jpg', // Optional poster images in public/images/
    title: 'Create and publish',
    description: 'Explore the wonders of nature through this captivating journey across diverse landscapes and wildlife.',
    duration: '3:45',
    category: 'Nature'
  },
  {
    id: 2,
    src: '/advert2.mp4',
    poster: '/images/video2-poster.jpg',
    title: 'Monetize your audience',
    description: 'Discover the latest breakthroughs in technology and how they are shaping our future.',
    duration: '5:20',
    category: 'Technology'
  },
  {
    id: 3,
    src: '/advert3.mp4',
    poster: '/images/video3-poster.jpg',
    title: 'Receive stablecoins',
    description: 'A behind-the-scenes look at the creative design process from concept to completion.',
    duration: '4:15',
    category: 'Design'
  }
])

// Video loading states
const videoStates = ref<Record<number, VideoState>>({})

// Video element references
const videoRefs = ref<HTMLVideoElement[]>([])

// Initialize video states
onMounted(() => {
  videos.value.forEach((_, index) => {
    videoStates.value[index] = {
      loading: true,
      error: false,
      canPlay: false,
      isPlaying: false,
      isMuted: true
    }
  })
})

// Animation visibility
const isVisible = ref(false)

// Video event handlers
const onVideoLoadStart = (index: number) => {
  videoStates.value[index] = {
    ...videoStates.value[index],
    loading: true,
    error: false
  }
}

const onVideoCanPlay = async (index: number) => {
  videoStates.value[index] = {
    ...videoStates.value[index],
    loading: false,
    canPlay: true
  }
  
  // Auto-play video when ready (muted)
  const video = videoRefs.value[index]
  if (video) {
    try {
      await video.play()
      videoStates.value[index].isPlaying = true
    } catch (error) {
      console.log('Auto-play failed for video', index, error)
    }
  }
}

const onVideoError = (index: number) => {
  videoStates.value[index] = {
    ...videoStates.value[index],
    loading: false,
    error: true
  }
}

// Toggle video sound (muted/unmuted)
const toggleVideoSound = (index: number) => {
  const video = videoRefs.value[index]
  if (!video) return

  video.muted = !video.muted
  videoStates.value[index].isMuted = video.muted
  
  // Provide visual feedback
  if (!video.muted) {
    console.log('Video unmuted - playing with sound')
  }
}

// Listen for video ended events
const setupVideoListeners = () => {
  videoRefs.value.forEach((video, index) => {
    if (video) {
      video.addEventListener('ended', () => {
        videoStates.value[index].isPlaying = false
      })
      
      video.addEventListener('pause', () => {
        videoStates.value[index].isPlaying = false
      })
      
      video.addEventListener('play', () => {
        videoStates.value[index].isPlaying = true
      })
    }
  })
}

// Trigger animations on mount
onMounted(() => {
  nextTick(() => {
    isVisible.value = true
    setupVideoListeners()
  })
})

// Update listeners when video refs change
watch(videoRefs, () => {
  nextTick(setupVideoListeners)
}, { flush: 'post' })
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Ensure videos fill their containers completely */
video {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}

/* Remove default video controls */
video::-webkit-media-controls {
  display: none !important;
}

video::-webkit-media-controls-panel {
  display: none !important;
}

video::-webkit-media-controls-play-button {
  display: none !important;
}

video::-webkit-media-controls-start-playback-button {
  display: none !important;
}

/* Smooth hover transitions */
.group:hover video {
  filter: brightness(1.05);
  transform: scale(1.02);
  transition: all 0.3s ease;
}

/* Ensure consistent container heights - increased for full video display */
.group > div:first-child {
  min-height: 14rem; /* h-56 equivalent */
}

@media (min-width: 768px) {
  .group > div:first-child {
    min-height: 16rem; /* h-64 equivalent */
  }
}

@media (min-width: 1024px) {
  .group > div:first-child {
    min-height: 18rem; /* h-72 equivalent */
  }
}
</style>