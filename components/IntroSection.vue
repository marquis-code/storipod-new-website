<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Dynamic Background with Parallax -->
    <div class="absolute inset-0">
      <!-- Base gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      
      <!-- Hero image with dark overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[20s] ease-linear"
        :style="{ 
          backgroundImage: `url('/hero2.jpg')`,
          transform: `scale(${backgroundScale})` 
        }"
      ></div>
      
      <!-- Sophisticated dark overlay with gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-900/60"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-slate-900/50"></div>
      
      <!-- Animated geometric elements -->
      <div class="geometric-elements">
        <div 
          v-for="i in 8" 
          :key="i" 
          class="geometric-shape"
          :style="getGeometricStyle(i)"
          :class="`shape-${i}`"
        ></div>
      </div>
      
      <!-- Floating particles -->
      <div class="particles-container">
        <div 
          v-for="i in 20" 
          :key="i" 
          class="particle"
          :style="getParticleStyle(i)"
        ></div>
      </div>
    </div>
    
    <!-- Content Container -->
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
      <!-- Main Heading with Typewriter Effect -->
      <div class="mb-8 overflow-hidden">
        <div class="opacity-0 animate-fade-in-up" style="animation-delay: 0.3s; animation-fill-mode: forwards;">
          <div class="inline-block mb-4">
            <span class="text-blue-300 text-sm font-medium tracking-wider uppercase opacity-80">
              Premium Business Consulting
            </span>
            <div class="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-2"></div>
          </div>
        </div>
        
        <h1 class="relative">
          <span 
            class="block text-5xl md:text-7xl font-bold text-white mb-4 opacity-0 animate-slide-up-stagger"
            style="animation-delay: 0.6s; animation-fill-mode: forwards;"
          >
            <span class="relative inline-block">
              Connecting
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <span class="relative bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Strategy
              </span>
            </span>
          </span>
          
          <span 
            class="block handwriting text-4xl md:text-6xl text-slate-300 opacity-0 animate-slide-up-stagger"
            style="animation-delay: 0.9s; animation-fill-mode: forwards;"
          >
            <span class="relative">
              to Growth in a
              <span class="text-blue-300 relative">
                Complex World
                <!-- Animated underline -->
                <svg class="absolute -bottom-2 left-0 w-full h-3 text-blue-400/60 opacity-0 animate-draw-line-delayed" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,8 Q25,2 50,6 Q75,1 100,5" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </span>
            </span>
          </span>
        </h1>
      </div>
      
      <!-- Description with Staggered Animation -->
      <div 
        class="mb-12 opacity-0 animate-fade-in-up max-w-4xl mx-auto"
        style="animation-delay: 1.2s; animation-fill-mode: forwards;"
      >
        <p class="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
          <span class="text-blue-200 font-medium">Hudia Consulting</span> provides expert B2B advisory services to navigate challenges 
          and seize opportunities in <span class="text-cyan-200">energy</span>, <span class="text-cyan-200">HR</span>, 
          <span class="text-cyan-200">agriculture</span>, <span class="text-cyan-200">logistics</span>, and beyond.
        </p>
      </div>
      
      <!-- CTA Buttons with Hover Effects -->
      <div 
        class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 opacity-0 animate-fade-in-up"
        style="animation-delay: 1.5s; animation-fill-mode: forwards;"
      >
        <button 
          @click="scrollToSection('services')"
          class="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-base lg:text-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
        >
          <span class="relative z-10 flex items-center gap-2">
            Explore Our Solutions
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <!-- Ripple effect -->
          <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-full"></div>
        </button>
        
        <button 
          @click="scrollToSection('team')"
          class="group px-10 py-4 border-2 border-slate-400/50 text-slate-200 rounded-full font-semibold text-base lg:text-lg hover:border-blue-400 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
        >
          <span class="flex items-center gap-2">
            Meet Our Team
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </button>
      </div>
      
      <!-- Stats Section -->
      <div 
        class="grid grid-cols-3 gap-8 mb-16 opacity-0 animate-fade-in-up max-w-2xl mx-auto"
        style="animation-delay: 1.8s; animation-fill-mode: forwards;"
      >
        <div class="text-center group">
          <div class="text-3xl font-bold text-blue-300 mb-1 transform group-hover:scale-110 transition-transform duration-300">
            {{ animatedStats.projects }}+
          </div>
          <div class="text-slate-400 text-sm">Projects</div>
        </div>
        <div class="text-center group">
          <div class="text-3xl font-bold text-cyan-300 mb-1 transform group-hover:scale-110 transition-transform duration-300">
            {{ animatedStats.clients }}+
          </div>
          <div class="text-slate-400 text-sm">Clients</div>
        </div>
        <div class="text-center group">
          <div class="text-3xl font-bold text-blue-300 mb-1 transform group-hover:scale-110 transition-transform duration-300">
            {{ animatedStats.years }}+
          </div>
          <div class="text-slate-400 text-sm">Years</div>
        </div>
      </div>
    </div>
    
    <!-- Enhanced Scroll Indicator -->
    <div 
      class="absolute hidden lg:block bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up cursor-pointer"
      style="animation-delay: 2.1s; animation-fill-mode: forwards;"
      @click="scrollToSection('services')"
    >
      <div class="flex flex-col items-center gap-2 group">
        <span class="text-slate-400 text-sm tracking-wider">Scroll to explore</span>
        <div class="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center relative overflow-hidden group-hover:border-blue-400 transition-colors duration-300">
          <div class="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const backgroundScale = ref(1)
const animatedStats = ref({ projects: 0, clients: 0, years: 0 })

// Animate background scale on scroll
const handleScroll = () => {
  const scrolled = window.scrollY
  const rate = scrolled * -0.0001
  backgroundScale.value = 1 + rate
}

// Animate stats numbers
const animateStats = () => {
  const targets = { projects: 150, clients: 85, years: 10 }
  const duration = 2000
  const start = Date.now()
  
  const animate = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    
    const easeOut = 1 - Math.pow(1 - progress, 3)
    
    animatedStats.value = {
      projects: Math.floor(targets.projects * easeOut),
      clients: Math.floor(targets.clients * easeOut),
      years: Math.floor(targets.years * easeOut)
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  animate()
}

// Generate geometric shapes
const getGeometricStyle = (index: number) => {
  const positions = [
    { top: '10%', left: '15%' },
    { top: '20%', right: '10%' },
    { bottom: '30%', left: '8%' },
    { top: '60%', right: '20%' },
    { bottom: '20%', right: '15%' },
    { top: '15%', left: '70%' },
    { bottom: '15%', left: '60%' },
    { top: '45%', left: '5%' }
  ]
  
  return {
    ...positions[index - 1],
    animationDelay: `${index * 0.8}s`,
    animationDuration: `${8 + index}s`
  }
}

// Generate particle positions
const getParticleStyle = (index: number) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 10}s`
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(animateStats, 2000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.handwriting {
  font-family: 'Caveat', 'Dancing Script', cursive;
}

/* Animation Keyframes */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up-stagger {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes draw-line-delayed {
  0% {
    opacity: 0;
    stroke-dasharray: 0 100;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    stroke-dasharray: 100 0;
  }
}

@keyframes scroll-indicator {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(12px);
    opacity: 0;
  }
}

@keyframes float-geometric {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) rotate(5deg);
  }
  50% {
    transform: translateY(-10px) rotate(10deg);
  }
  75% {
    transform: translateY(-15px) rotate(5deg);
  }
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(50px);
    opacity: 0;
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-slide-up-stagger {
  animation: slide-up-stagger 1.2s ease-out forwards;
}

.animate-draw-line-delayed {
  animation: draw-line-delayed 2s ease-out 1.5s forwards;
}

.animate-scroll-indicator {
  animation: scroll-indicator 1.5s ease-in-out infinite;
}

/* Geometric Elements */
.geometric-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.geometric-shape {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  animation: float-geometric infinite ease-in-out;
}

.shape-1 { border-radius: 50%; }
.shape-2 { transform: rotate(45deg); }
.shape-3 { border-radius: 20%; }
.shape-4 { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
.shape-5 { border-radius: 50%; border-color: rgba(34, 211, 238, 0.2); }
.shape-6 { transform: rotate(30deg); border-radius: 10px; }
.shape-7 { clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }
.shape-8 { border-radius: 50% 0; }

/* Particles */
.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border-radius: 50%;
  animation: float-particle infinite linear;
  opacity: 0.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .geometric-elements,
  .particles-container {
    display: none;
  }
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}
</style>