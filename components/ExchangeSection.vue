<template>
  <section class="bg-white py-8 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <!-- Left Content - Storipod Platform -->
        <div class="space-y-8">
          <!-- Header Stats -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="text-center sm:text-left">
              <p class="text-gray-600 text-sm font-medium mb-1">Registered users</p>
              <p class="text-black text-2xl font-bold">100k plus</p>
            </div>
            <div class="text-center sm:text-left">
              <p class="text-gray-600 text-sm font-medium mb-1">Creators income uplift</p>
              <p class="text-black text-2xl font-bold">20x</p>
            </div>
            <div class="text-center sm:text-left">
              <p class="text-gray-600 text-sm font-medium mb-1">Payments</p>
              <p class="text-black text-2xl font-bold">Stablecoin powered</p>
            </div>
          </div>

          <!-- Platform Header -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-[#00A1C1] rounded-full"></div>
                <h2 class="text-black text-xl font-bold">Storipod</h2>
                <span class="text-gray-400 text-lg">•</span>
                <span class="text-gray-600 text-sm font-medium">Live Stories</span>
              </div>
              <button class="text-gray-600 hover:text-[#00A1C1] transition-colors text-sm font-medium border border-gray-200 hover:border-[#00A1C1] px-4 py-2 rounded-lg">
                Preview
              </button>
            </div>

            <!-- Story Items -->
            <div class="space-y-8">
              <!-- Short Story Episode -->
              <div class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 class="text-black font-bold text-lg mb-3">Short Story Episode one</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  The train sighed and the city lights blinked. She scrolled for answers and found a story that paid her rent one month later.
                </p>
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <span class="font-medium">1.2k reads</span>
                    <span>•</span>
                    <span class="font-medium">98 tips</span>
                  </div>
                  <button class="bg-[#00A1C1] hover:bg-[#008DA8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md">
                    Unlock 0.01 USDC
                  </button>
                </div>
              </div>

              <!-- Microfiction Exchange -->
              <div class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 class="text-black font-bold text-lg mb-3">Microfiction exchange</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  A two line exchange that paid the creator ten microtips in five minutes.
                </p>
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <span class="font-medium">420 reads</span>
                    <span>•</span>
                    <span class="font-medium">10 tips</span>
                  </div>
                  <button class="bg-[#00A1C1] hover:bg-[#008DA8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md">
                    Tip 0.005 USDC
                  </button>
                </div>
              </div>

              <!-- Serialized Drama -->
              <div class="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 class="text-black font-bold text-lg mb-3">Serialized drama • chapter one</h3>
                <p class="text-gray-700 text-sm leading-relaxed mb-4">
                  Serialized publishing with gated chapters. Readers pay micro amounts to unlock episodes instantly.
                </p>
                <div class="flex items-center justify-between flex-wrap gap-3">
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <span class="font-medium">8.6k reads</span>
                    <span>•</span>
                    <span class="font-medium">320 subscriptions</span>
                  </div>
                  <button class="bg-[#00A1C1] hover:bg-[#008DA8] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md">
                    Subscribe 0.5 USDC month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Video Section -->
        <div class="relative order-first lg:order-last">
          <!-- Video Container -->
          <div class="relative overflow-hidden">
            <video 
              ref="videoRef"
              class="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-lg shadow-lg"
              :autoplay="autoplay"
              :muted="muted"
              :loop="loop"
              :controls="controls"
              :poster="poster"
            >
              <source :src="videoSrc" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          
          <!-- Attribution Link -->
          <div class="mt-3 lg:mt-4 flex justify-center lg:justify-start">
            <a 
              href="https://beta.ventures/our-investments/" 
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-2 lg:space-x-3 text-green-600 hover:text-green-700 font-medium transition-colors group"
            >
              <span class="font-semibold text-sm lg:text-base">IKE Eze</span>
              <img 
                src="@/assets/images/beta-ventures-logo.png" 
                alt="Beta Ventures Logo"
                class="h-6 lg:h-8 w-auto transition-transform group-hover:scale-105"
              />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  videoSrc?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  poster?: string
}

const props = withDefaults(defineProps<Props>(), {
  videoSrc: '/interview.mp4', // Replace with your actual video path
  autoplay: true,
  muted: true,
  loop: true,
  controls: true,
  poster: ''
})

const videoRef = ref<HTMLVideoElement | null>(null)

// Optional: Add video control methods
const playVideo = () => {
  if (videoRef.value) {
    videoRef.value.play()
  }
}

const pauseVideo = () => {
  if (videoRef.value) {
    videoRef.value.pause()
  }
}

// Optional: Handle video events
onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener('loadeddata', () => {
      console.log('Video loaded')
    })
    
    videoRef.value.addEventListener('error', (e) => {
      console.error('Video error:', e)
    })
  }
})

// Expose methods if needed
defineExpose({
  playVideo,
  pauseVideo,
  videoRef
})
</script>

<style scoped>
/* Custom video styles */
video {
  border-radius: inherit;
}

/* Ensure video maintains aspect ratio while respecting height */
video {
  object-fit: cover;
  object-position: center;
}

/* Hover effects for attribution */
.group:hover img {
  transform: scale(1.05);
}

/* Focus styles for accessibility */
a:focus {
  outline: 2px solid rgb(34 197 94);
  outline-offset: 2px;
}

button:focus {
  outline: 2px solid rgb(147 51 234);
  outline-offset: 2px;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .bg-gray-900 {
    padding: 1rem;
  }
}

/* Ensure proper spacing on mobile */
@media (max-width: 1024px) {
  .lg\:gap-16 {
    gap: 2rem;
  }
}

/* Smooth transitions for interactive elements */
button {
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: translateY(-1px);
}

/* Dark theme styling for the platform interface */
.bg-gray-900 {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  border: 1px solid #374151;
}
</style>