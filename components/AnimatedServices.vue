<template>
  <section id="services" class="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse-slow"></div>
      <div class="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-100 rounded-full opacity-30 animate-pulse-slow-delayed"></div>
      
      <!-- Floating geometric shapes -->
      <div class="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-blue-300 rotate-45 opacity-20 animate-spin-slow"></div>
      <div class="absolute top-3/4 right-1/3 w-6 h-6 bg-cyan-300 rounded-full opacity-30 animate-bounce-slow"></div>
      <div class="absolute top-1/2 left-1/6 w-4 h-4 bg-blue-400 transform rotate-45 opacity-25 animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section with Enhanced Animation -->
      <div class="text-center mb-20">
        <div class="opacity-0 animate-fade-in-up" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
          <div class="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm mb-6">
            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Our Services
          </div>
        </div>
        
        <h2 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 opacity-0 animate-slide-up" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          Our 
          <span class="relative inline-block">
            <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Integrated Expertise
            </span>
            <!-- Animated underline -->
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 animate-scale-x" style="animation-delay: 1.2s; animation-fill-mode: forwards;"></div>
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 0.8s; animation-fill-mode: forwards;">
          Comprehensive solutions tailored to your unique business challenges, 
          <span class="text-blue-600 font-medium">powered by innovation</span> and 
          <span class="text-cyan-600 font-medium">driven by results</span>
        </p>
      </div>

      <!-- Services Grid with Staggered Animation -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          :ref="el => serviceRefs[index] = el"
          class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 border border-gray-100 overflow-hidden service-card opacity-0"
          :class="`animate-slide-in-up-${index}`"
          :style="{ animationDelay: (index * 150 + 600) + 'ms', animationFillMode: 'forwards' }"
          @mouseenter="onServiceHover(index)"
          @mouseleave="onServiceLeave(index)"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            <img 
              :src="service.backgroundImage" 
              :alt="service.title"
              class="w-full h-full object-cover"
            >
          </div>
          
          <!-- Decorative Elements -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-bl-3xl transform translate-x-6 -translate-y-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"></div>
          <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-tr-2xl transform -translate-x-4 translate-y-4 group-hover:scale-110 transition-all duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-20">
            <!-- Icon Container with Enhanced Animation -->
            <div class="relative mb-8">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <component 
                  :is="service.icon" 
                  class="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              
              <!-- Floating particles around icon -->
              <div class="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div class="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style="animation-delay: 0.3s;"></div>
                <div class="absolute top-1/2 right-0 w-1 h-1 bg-blue-300 rounded-full animate-ping" style="animation-delay: 0.6s;"></div>
              </div>
            </div>
            
            <!-- Title with Gradient Effect -->
            <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {{ service.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              {{ service.description }}
            </p>
            
            <!-- Key Benefits -->
            <div class="mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="benefit in service.benefits" 
                  :key="benefit"
                  class="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium"
                >
                  {{ benefit }}
                </span>
              </div>
            </div>
            
            <!-- CTA with Enhanced Animation -->
            <div class="flex items-center justify-between">
              <button class="group/btn flex items-center text-blue-600 hover:text-cyan-500 transition-colors duration-300 font-medium">
                <span class="transform group-hover/btn:translate-x-1 transition-transform duration-300">Learn More</span>
                <svg class="w-5 h-5 ml-2 transform group-hover/btn:translate-x-2 group-hover/btn:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
              
              <!-- Service Number -->
              <div class="text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
            </div>
          </div>
          
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <!-- Border Animation -->
          <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-border"></div>
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="text-center mt-20 opacity-0 animate-fade-in-up" style="animation-delay: 1.8s; animation-fill-mode: forwards;">
        <div class="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our integrated expertise can drive your success forward
          </p>
          <button @click="openWhatsApp" class="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span class="flex items-center gap-2">
              Schedule a Consultation
              <svg class="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Import icons from Lucide Vue
import { 
  Search, 
  Users, 
  Zap, 
  Heart, 
  Megaphone, 
  Truck 
} from 'lucide-vue-next'

const serviceRefs = ref<HTMLElement[]>([])

const services = [
  {
    title: 'Market Research & Intelligence',
    description: 'Deep-dive analysis to inform your strategy with comprehensive competitive landscape insights and data-driven recommendations.',
    icon: Search,
    benefits: ['Competitive Analysis', 'Market Trends', 'Consumer Insights'],
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'Business Matching & Development',
    description: 'Forging powerful partnerships for growth through our extensive network connections and strategic relationship building.',
    icon: Users,
    benefits: ['Partnership Development', 'Network Expansion', 'Strategic Alliances'],
    backgroundImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'Energy Sector Advisory',
    description: 'Navigating the evolving energy landscape with expert guidance, sustainability strategies, and innovative solutions.',
    icon: Zap,
    benefits: ['Renewable Energy', 'Sustainability', 'Energy Efficiency'],
    backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'HR & Operational Excellence',
    description: 'Empowering your greatest asset: your people, through strategic HR solutions and operational optimization.',
    icon: Heart,
    benefits: ['Talent Management', 'Process Optimization', 'Culture Development'],
    backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'PR & Brand Publicity Management',
    description: 'Amplifying your presence, online and offline, with strategic communication and comprehensive brand management.',
    icon: Megaphone,
    benefits: ['Brand Strategy', 'Digital Marketing', 'Crisis Management'],
    backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&q=80'
  },
  {
    title: 'Agriculture & Logistics Consulting',
    description: 'Optimizing your supply chain from source to market with expert guidance in agricultural innovation and logistics.',
    icon: Truck,
    benefits: ['Supply Chain', 'Agricultural Tech', 'Distribution'],
    backgroundImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=500&h=300&fit=crop&q=80'
  }
]

const onServiceHover = (index: number) => {
  const element = serviceRefs.value[index]
  if (element) {
    element.style.transform = 'translateY(-12px) scale(1.02)'
  }
}

const onServiceLeave = (index: number) => {
  const element = serviceRefs.value[index]
  if (element) {
    element.style.transform = 'translateY(0) scale(1)'
  }
}

onMounted(() => {
  // Add intersection observer for additional animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view')
      }
    })
  })

  serviceRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})

const openWhatsApp = () => {
  const message = encodeURIComponent('Hello! I\'m interested in learning more about Hudia\'s consulting services.')
  window.open(`https://wa.me/+2347060727672?text=${message}`, '_blank')
}
</script>

<style scoped>
/* Animation Keyframes */
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

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scale-x {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation Classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.animate-scale-x {
  animation: scale-x 0.8s ease-out forwards;
  transform-origin: left;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
  animation: pulse-slow 4s ease-in-out infinite 2s;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

/* Dynamic slide-in animations for each service */
.animate-slide-in-up-0,
.animate-slide-in-up-1,
.animate-slide-in-up-2,
.animate-slide-in-up-3,
.animate-slide-in-up-4,
.animate-slide-in-up-5 {
  animation: slide-in-up 0.8s ease-out forwards;
}

/* Service Card Enhancements */
.service-card {
  position: relative;
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.service-card:hover {
  box-shadow: 
    0 25px 50px -12px rgba(59, 130, 246, 0.15),
    0 0 30px rgba(59, 130, 246, 0.1);
}

/* Background blur effect */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .service-card {
    transform: none !important;
  }
  
  .service-card:hover {
    transform: translateY(-4px) !important;
  }
}

/* Gradient border animation */
@keyframes gradient-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.service-card:hover .gradient-border {
  animation: gradient-border 3s ease infinite;
}
</style>