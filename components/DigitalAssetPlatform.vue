<template>
  <section class="bg-white py-14 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto text-center">
      <!-- Main Heading -->
      <h2 class="text-4xl sm:text-5xl lg:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
        Join one of Africa's leading<br class="hidden sm:block">
        digital asset platforms
      </h2>
      
      <!-- Description -->
      <p class="text-lg sm:text-xl font-thin text-gray-600 mb-16 max-w-3xl mx-auto leading-loose">
        As one of Nigeria's first SEC-backed cryptocurrency exchange platforms, we bring you six 
        years of dedicated effort and unwavering compliance. Trade confidently on a platform 
        that prioritises transparency and security at every step.
      </p>
      
      <!-- Stats Section -->
      <div ref="statsSection" class="grid grid-cols-1 md:grid-cols-3 gap-0 container mx-auto">
        <!-- First Stat -->
        <div class="relative p-8 sm:p-12 border-t border-gray-200 md:border-r md:border-gray-200">
          <div class="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            {{ formatNumber(animatedCreators) }}k+
          </div>
          <div class="text-lg sm:text-xl text-gray-600">
            Creators
          </div>
        </div>
        
        <!-- Second Stat -->
        <div class="relative p-8 sm:p-12 border-t border-gray-200 md:border-r md:border-gray-200">
          <div class="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            {{ Math.round(animatedPayouts) }}+
          </div>
          <div class="text-lg sm:text-xl text-gray-600">
            Payouts
          </div>
        </div>
        
        <!-- Third Stat -->
        <div class="relative p-8 sm:p-12 border-t border-gray-200">
          <div class="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
            {{ formatNumber(animatedTrades) }}m+
          </div>
          <div class="text-lg sm:text-xl text-gray-600">
            Trades Executed
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Animated values
const animatedCreators = ref(0)
const animatedPayouts = ref(0)
const animatedTrades = ref(0)

// Target values
const targetCreators = 250
const targetPayouts = 45
const targetTrades = 3

// Animation state
const isAnimating = ref(false)
const statsSection = ref<HTMLElement>()

// Intersection Observer
let observer: IntersectionObserver | null = null

// Easing function for smooth animation
const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4)
}

// Animation function
const animateValue = (
  currentRef: any,
  target: number,
  duration: number,
  delay: number = 0
) => {
  setTimeout(() => {
    const startTime = performance.now()
    const startValue = 0

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easedProgress = easeOutQuart(progress)
      currentRef.value = startValue + (target - startValue) * easedProgress

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, delay)
}

// Format number with commas
const formatNumber = (num: number): string => {
  return Math.round(num).toLocaleString()
}

// Start animations
const startAnimations = () => {
  if (isAnimating.value) return
  
  isAnimating.value = true
  
  // Stagger the animations for a more dynamic effect
  animateValue(animatedCreators, targetCreators, 2000, 0)
  animateValue(animatedPayouts, targetPayouts, 1800, 300)
  animateValue(animatedTrades, targetTrades, 2200, 600)
}

// Reset animations
const resetAnimations = () => {
  animatedCreators.value = 0
  animatedPayouts.value = 0
  animatedTrades.value = 0
  isAnimating.value = false
}

// Intersection Observer callback
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startAnimations()
    } else {
      // Uncomment the line below if you want to reset when out of view
      // resetAnimations()
    }
  })
}

onMounted(() => {
  if (statsSection.value) {
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Trigger when 30% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Start animation slightly before fully in view
    })
    
    observer.observe(statsSection.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Smooth transition for number changes */
.text-5xl, .text-6xl {
  transition: all 0.1s ease-out;
}

/* Add a subtle pulse effect during animation */
@keyframes pulse-subtle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* Apply pulse to stats during animation */
.relative:hover .text-5xl,
.relative:hover .text-6xl {
  animation: pulse-subtle 0.6s ease-in-out;
}
</style>