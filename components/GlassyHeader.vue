<template>
  <header class="sticky top-0 backdrop-blur-md bg-white/85 border-b border-gray-200/30 z-50">
    <div class="max-w-7xl mx-auto px-5 flex items-center justify-between h-20">
      <!-- Logo positioned on left -->
      <NuxtLink to="/" class="flex items-center gap-2 font-extrabold text-xl z-10">
        <img src="@/assets/img/storipodLogo.svg" alt="Storipod Logo" class="h-8 w-auto" />
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink 
          to="#features" 
          class="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105"
        >
          Features
        </NuxtLink>
        <NuxtLink 
          to="#creators" 
          class="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105"
        >
          Creators
        </NuxtLink>
        <NuxtLink 
          to="#advertisers" 
          class="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105"
        >
          Advertisers
        </NuxtLink>
        <NuxtLink 
          to="#business" 
          class="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105"
        >
          Business Tools
        </NuxtLink>
        <NuxtLink 
          to="/faqs" 
          class="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105"
        >
          FAQ
        </NuxtLink>
        <NuxtLink 
          to="#download" 
          class="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105"
        >
          Get the app
        </NuxtLink>
      </nav>

      <!-- Mobile Hamburger Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-all duration-200 z-10 relative"
        :class="{ 'bg-gray-100/50': isMobileMenuOpen }"
      >
        <!-- Animated Hamburger Icon -->
        <div class="w-6 h-6 flex flex-col justify-center items-center relative">
          <span 
            class="block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out"
            :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
          ></span>
          <span 
            class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-in-out"
            :class="isMobileMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span 
            class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-in-out"
            :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
          ></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        @click="toggleMobileMenu"
      ></div>
    </Transition>

    <!-- Mobile Navigation Panel -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="transform translate-x-full opacity-0"
      enter-to-class="transform translate-x-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg border-l border-gray-200/30 z-40 shadow-2xl"
      >
        <nav class="px-6 py-8 space-y-6 h-full flex flex-col">
          <!-- Navigation Links with Staggered Animation -->
          <div class="space-y-4">
            <NuxtLink 
              v-for="(item, index) in navigationItems" 
              :key="item.to"
              :to="item.to" 
              @click="toggleMobileMenu" 
              class="group block relative overflow-hidden"
              :style="{ 'animation-delay': `${index * 100}ms` }"
              :class="isMobileMenuOpen ? 'animate-slide-in-right' : ''"
            >
              <div class="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-100/50 transition-all duration-200 group-hover:translate-x-2">
                <span class="text-gray-700 hover:text-gray-900 font-semibold text-lg">
                  {{ item.label }}
                </span>
                <ChevronRight class="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
              </div>
            </NuxtLink>
          </div>

          <!-- Divider -->
          <div class="border-t border-gray-200/50 my-6"></div>

          <!-- CTA Button -->
          <div class="mt-auto pb-4">
            <NuxtLink 
              to="#download" 
              @click="toggleMobileMenu" 
              class="flex items-center justify-center gap-3 rounded-2xl px-6 py-4 font-bold text-lg bg-gradient-to-r from-storipod-primary to-storipod-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              :class="isMobileMenuOpen ? 'animate-bounce-in' : ''"
              style="animation-delay: 600ms"
            >
              <span>Get the app</span>
              <div class="w-2 h-2 rounded-full bg-white/80 group-hover:bg-white transition-colors duration-200"></div>
            </NuxtLink>
          </div>

          <!-- Social Links or Additional Info -->
          <div class="text-center pt-4 border-t border-gray-200/30">
            <p class="text-sm text-gray-500">
              Join thousands of storytellers
            </p>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Navigation items
const navigationItems = [
  { to: '#features', label: 'Features' },
  { to: '#creators', label: 'Creators' },
  { to: '#advertisers', label: 'Advertisers' },
  { to: '#business', label: 'Business Tools' },
  { to: '/faqs', label: 'FAQ' }
]

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

// Close menu on route change
watch(() => useRoute().path, () => {
  if (isMobileMenuOpen.value) {
    toggleMobileMenu()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Custom animations */
@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce-in {
  0% {
    transform: scale(0.8) translateY(20px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out forwards;
}

.animate-bounce-in {
  animation: bounce-in 0.6s ease-out forwards;
  opacity: 0;
}

/* Enhanced glassmorphism effect */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.backdrop-blur-lg {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom shadow for mobile panel */
.shadow-2xl {
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Gradient background for CTA */
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* Hover effects */
.group:hover .group-hover\:translate-x-2 {
  transform: translateX(0.5rem);
}

.group:hover .group-hover\:text-gray-600 {
  color: rgb(75 85 99);
}

.group:hover .group-hover\:bg-white {
  background-color: rgb(255 255 255);
}

/* Mobile menu responsiveness */
@media (max-width: 640px) {
  .w-80 {
    width: 85vw;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-in-right,
  .animate-bounce-in,
  .transition-all {
    animation: none;
    transition: none;
  }
}

/* Focus states for accessibility */
button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}

a:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
  border-radius: 0.375rem;
}
</style>