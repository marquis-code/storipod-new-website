<template>
  <section class="py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Floating background shapes for visual appeal -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="floating-shape absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div class="floating-shape absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-30 animate-float-delayed"></div>
        <div class="floating-shape absolute bottom-20 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-25 animate-float-slow"></div>
      </div>

      <div class="text-center mb-16 relative z-10">
        <h2 
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 opacity-0 animate-fade-in-up"
          :class="{ 'animate-fade-in-up': isVisible }"
        >
          Why Choose 
          <span class="handwriting text-blue-600 relative">
            Hudia?
            <svg class="absolute -bottom-2 left-0 w-full h-3 text-blue-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,8 Q50,0 100,8" stroke="currentColor" stroke-width="2" fill="none" class="animate-draw-line"/>
            </svg>
          </span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div 
          v-for="(reason, index) in whyChooseUs" 
          :key="reason.title"
          class="text-center group transform hover:scale-110 transition-all duration-500 cursor-pointer opacity-0 translate-y-8"
          :class="{ 
            'animate-slide-in-up': isVisible,
            'hover:z-20 relative': true 
          }"
          :style="{ 
            animationDelay: (index * 150) + 'ms',
            transformOrigin: 'center bottom'
          }"
          @mouseenter="playHoverEffect(index)"
        >
          <!-- Icon Container with Pulse Effect -->
          <div class="relative mb-6">
            <div 
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto group-hover:shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 group-hover:rotate-6"
              :class="`icon-bounce-${index}`"
            >
              <!-- Pulse rings -->
              <div class="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700"></div>
              <div class="absolute inset-0 rounded-full bg-cyan-300 opacity-0 group-hover:opacity-20 group-hover:scale-200 transition-all duration-1000 delay-100"></div>
              
              <!-- Icons using Lucide Vue (common in Nuxt projects) -->
              <component 
                :is="reason.icon" 
                class="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            
            <!-- Floating particles effect -->
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="particle w-2 h-2 bg-blue-400 rounded-full absolute animate-float-particle-1"></div>
              <div class="particle w-1.5 h-1.5 bg-cyan-400 rounded-full absolute animate-float-particle-2"></div>
              <div class="particle w-1 h-1 bg-blue-300 rounded-full absolute animate-float-particle-3"></div>
            </div>
          </div>

          <!-- Content with stagger animation -->
          <h3 class="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-all duration-300 transform group-hover:-translate-y-1">
            {{ reason.title }}
          </h3>

          <p class="text-gray-600 text-sm leading-relaxed transform group-hover:text-gray-700 transition-all duration-300">
            {{ reason.description }}
          </p>

          <!-- Hover background effect -->
          <div class="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 transform scale-95 group-hover:scale-100"></div>
        </div>
      </div>

      <!-- Call to action with bounce animation -->
      <!-- <div class="text-center mt-16 opacity-0 animate-fade-in-up" :class="{ 'animate-fade-in-up': isVisible }" style="animation-delay: 800ms;">
        <button class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
          Get Started Today
          <span class="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Import icons from Lucide Vue (install with: npm install lucide-vue-next)
import { Target, Award, TrendingUp, Globe } from 'lucide-vue-next'

const isVisible = ref(false)

const whyChooseUs = [
  {
    title: 'Holistic Approach',
    description: 'We connect the dots across business functions for a unified strategy.',
    icon: Target
  },
  {
    title: 'Industry-Specific Expertise', 
    description: 'Our consultants are veterans in your field with proven track records.',
    icon: Award
  },
  {
    title: 'Results-Driven Partnerships',
    description: 'We measure our success by your growth and business outcomes.',
    icon: TrendingUp
  },
  {
    title: 'Global Network, Local Insight',
    description: 'We leverage a vast network to find your perfect business match.',
    icon: Globe
  }
]

const playHoverEffect = (index: number) => {
  // Add custom hover sound or haptic feedback here if needed
  console.log(`Hovered on item ${index}`)
}

onMounted(() => {
  // Trigger animations when component is mounted
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.handwriting {
  font-family: 'Caveat', 'Dancing Script', cursive;
}

/* Floating shapes animations */
.floating-shape {
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-8deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.animate-float { animation-name: float; }
.animate-float-delayed { animation-name: float-delayed; animation-delay: 2s; }
.animate-float-slow { animation-name: float-slow; animation-delay: 4s; }

/* Main content animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes draw-line {
  from {
    stroke-dasharray: 0 100;
  }
  to {
    stroke-dasharray: 100 0;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s ease-out forwards;
}

.animate-draw-line {
  animation: draw-line 2s ease-out 1s forwards;
  stroke-dasharray: 0 100;
}

/* Particle animations */
@keyframes float-particle-1 {
  0% { transform: translate(-10px, 0px) scale(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(-20px, -30px) scale(1); opacity: 0; }
}

@keyframes float-particle-2 {
  0% { transform: translate(5px, 5px) scale(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(15px, -25px) scale(1); opacity: 0; }
}

@keyframes float-particle-3 {
  0% { transform: translate(10px, -5px) scale(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(25px, -20px) scale(1); opacity: 0; }
}

.animate-float-particle-1 { animation: float-particle-1 1.5s ease-out infinite; }
.animate-float-particle-2 { animation: float-particle-2 1.8s ease-out infinite 0.3s; }
.animate-float-particle-3 { animation: float-particle-3 2s ease-out infinite 0.6s; }

/* Bounce effects for icons */
.icon-bounce-0:hover { animation: bounce-0 0.6s ease-in-out; }
.icon-bounce-1:hover { animation: bounce-1 0.6s ease-in-out 0.1s; }
.icon-bounce-2:hover { animation: bounce-2 0.6s ease-in-out 0.2s; }
.icon-bounce-3:hover { animation: bounce-3 0.6s ease-in-out 0.3s; }

@keyframes bounce-0 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(3deg); }
  50% { transform: translateY(-12px) rotate(6deg); }
  75% { transform: translateY(-4px) rotate(3deg); }
}

@keyframes bounce-1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-6px) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(-6deg); }
  75% { transform: translateY(-3px) rotate(-3deg); }
}

@keyframes bounce-2 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-7px) rotate(4deg); }
  50% { transform: translateY(-11px) rotate(8deg); }
  75% { transform: translateY(-2px) rotate(4deg); }
}

@keyframes bounce-3 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-5px) rotate(-2deg); }
  50% { transform: translateY(-9px) rotate(-4deg); }
  75% { transform: translateY(-3px) rotate(-2deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-shape {
    display: none; /* Hide floating shapes on mobile for performance */
  }
}

/* Dark mode support (optional) */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-br {
    background: linear-gradient(to bottom right, #1f2937, #1e3a8a);
  }
}
</style>