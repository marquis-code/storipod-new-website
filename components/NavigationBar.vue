<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
    :class="[
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-blue-100/50' 
        : 'bg-white/95 backdrop-blur-lg border-b border-blue-100/30',
      'transform transition-transform duration-300'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo Section -->
        <div 
          class="flex items-center space-x-2 cursor-pointer group relative overflow-hidden"
          @click="scrollToSection('home')"
        >
          <div class="relative">
            <img 
              src="@/assets/img/logo.png" 
              class="w-auto h-12 transform group-hover:scale-110 transition-transform duration-300" 
            />
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-10"></div>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <div 
            v-for="(item, index) in navItems" 
            :key="item.name"
            class="relative"
            :style="{ '--delay': index * 0.1 + 's' }"
          >
            <NuxtLink 
              @click="scrollToSection(item.id)"
              class="relative px-4 py-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 group font-medium rounded-xl hover:bg-blue-50/50"
            >
              <span class="relative z-10">{{ item.name }}</span>
              
              <!-- Animated underline -->
              <span class="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              
              <!-- Hover background effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop CTA Button -->
        <button 
          @click="openWhatsApp"
          class="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden group"
        >
          <span class="relative z-10">Get Free Consultation</span>
          <svg class="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </button>

        <!-- Mobile Hamburger Menu -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          :class="{ 'bg-blue-50': isMobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <div class="relative w-6 h-6">
            <!-- Hamburger lines -->
            <span 
              class="absolute left-0 w-6 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'"
            ></span>
            <span 
              class="absolute left-0 top-3 w-6 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
            ></span>
            <span 
              class="absolute left-0 w-6 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ease-out"
              :class="isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        @click="closeMobileMenu"
      ></div>
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition-all duration-300 ease-out"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-blue-100 z-50 lg:hidden"
        style="padding-top: env(safe-area-inset-top)"
      >
        <!-- Mobile Menu Header (same as main nav) -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center py-4">
            <div 
              class="flex items-center space-x-2 cursor-pointer group"
              @click="scrollToSection('home'); closeMobileMenu()"
            >
              <img 
                src="@/assets/img/logo.png" 
                class="w-auto h-12 transform group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            
            <button
              @click="closeMobileMenu"
              class="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-red-50 transition-colors duration-300"
              aria-label="Close menu"
            >
              <div class="relative w-6 h-6">
                <span class="absolute left-0 top-3 w-6 h-0.5 bg-gray-700 rounded-full transform rotate-45"></span>
                <span class="absolute left-0 top-3 w-6 h-0.5 bg-gray-700 rounded-full transform -rotate-45"></span>
              </div>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Items -->
        <div class="px-4 sm:px-6 pb-6 max-w-7xl mx-auto">
          <div class="space-y-2">
            <div
              v-for="(item, index) in navItems"
              :key="item.name"
              :style="{ 
                '--delay': index * 0.1 + 's',
                animationDelay: isMobileMenuOpen ? 'var(--delay)' : '0s'
              }"
              :class="[
                'transform transition-all duration-500',
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              ]"
            >
              <NuxtLink
                @click="scrollToSection(item.id); closeMobileMenu()"
                class="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 group relative overflow-hidden"
              >
                <span class="font-medium text-lg">{{ item.name }}</span>
                <svg 
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-gray-400 group-hover:text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                
                <!-- Animated background -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile CTA Button -->
          <div 
            class="mt-6 transform transition-all duration-500"
            :style="{ 
              '--delay': (navItems.length * 0.1 + 0.2) + 's',
              animationDelay: isMobileMenuOpen ? 'var(--delay)' : '0s'
            }"
            :class="[
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            ]"
          >
            <button 
              @click="openWhatsApp; closeMobileMenu()"
              class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-4 rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium text-lg relative overflow-hidden group"
            >
              <span class="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Free Consultation</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  name: string
  id: string
}

// Props/State
const scrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Sample nav items - adjust according to your actual navigation
const navItems: NavItem[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Contact', id: 'contact' },
]

// Methods
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number and message
  const phoneNumber = '+2347060727672' // Your WhatsApp number
  const message = 'Hello! I would like to get a free consultation.'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Handle scroll effect
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto' // Ensure body scroll is restored
})

// Close mobile menu when route changes or window resizes
watch(() => useRoute().path, () => {
  closeMobileMenu()
})

onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<style scoped>
/* Custom animations for mobile menu items */
@keyframes slideInFromRight {
  from {
    transform: translateX(2rem);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Smooth backdrop blur transitions */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

.backdrop-blur-lg {
  backdrop-filter: blur(16px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom shadow for mobile menu */
.shadow-mobile-menu {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Enhanced focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>