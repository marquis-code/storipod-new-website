<template>
  <section id="team" class="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
    <!-- Dynamic Background Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Animated mesh gradient -->
      <div class="absolute inset-0 opacity-30">
        <div 
          class="absolute w-96 h-96 rounded-full mix-blend-multiply animate-blob"
          :style="{ 
            background: 'linear-gradient(45deg, #3b82f6, #06b6d4)',
            top: '10%',
            left: '10%'
          }"
        ></div>
        <div 
          class="absolute w-96 h-96 rounded-full mix-blend-multiply animate-blob animation-delay-2000"
          :style="{ 
            background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
            top: '70%',
            right: '10%'
          }"
        ></div>
        <div 
          class="absolute w-96 h-96 rounded-full mix-blend-multiply animate-blob animation-delay-4000"
          :style="{ 
            background: 'linear-gradient(45deg, #06b6d4, #3b82f6)',
            bottom: '20%',
            left: '20%'
          }"
        ></div>
      </div>

      <!-- Floating elements -->
      <div class="floating-elements">
        <div 
          v-for="i in 12" 
          :key="i" 
          class="floating-element"
          :style="getFloatingElementStyle(i)"
        ></div>
      </div>

      <!-- Animated grid pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Enhanced Header Section -->
      <div class="text-center mb-24">
        <!-- Animated badge -->
        <div class="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 opacity-0 animate-slide-down" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
          <div class="relative">
            <div class="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
            <div class="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-ping"></div>
          </div>
          <span class="text-blue-600 font-semibold tracking-wider text-sm">Our Expert Team</span>
        </div>

        <!-- Main title with morphing effect -->
        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-8 opacity-0 animate-text-reveal" style="animation-delay: 0.5s; animation-fill-mode: forwards;">
          <span class="inline-block">The Strategic</span>
          <br>
          <span class="inline-block relative">
            Minds Behind
            <span class="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl rounded-full"></span>
            <span class="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift">
              Hudia
            </span>
          </span>
        </h2>

        <!-- Animated description -->
        <p class="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style="animation-delay: 1s; animation-fill-mode: forwards;">
          Our strength lies in our <span class="text-blue-600 font-semibold">collective expertise</span>. 
          Meet the seasoned professionals and industry specialists dedicated to 
          <span class="text-cyan-600 font-semibold">crafting your success story</span>.
        </p>

        <!-- Interactive stats -->
        <!-- <div class="flex justify-center gap-12 mt-12 opacity-0 animate-slide-up" style="animation-delay: 1.3s; animation-fill-mode: forwards;">
          <div class="text-center group cursor-pointer">
            <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {{ animatedStats.experience }}+
            </div>
            <div class="text-gray-500 text-sm font-medium">Years Experience</div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {{ animatedStats.projects }}+
            </div>
            <div class="text-gray-500 text-sm font-medium">Projects Delivered</div>
          </div>
          <div class="text-center group cursor-pointer">
            <div class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {{ animatedStats.awards }}+
            </div>
            <div class="text-gray-500 text-sm font-medium">Industry Awards</div>
          </div>
        </div> -->
      </div>

      <!-- Team Grid with Revolutionary Design -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="member.name"
          :ref="el => teamRefs[index] = el"
          class="group relative opacity-0 animate-card-entrance"
          :style="{ animationDelay: (index * 150 + 800) + 'ms', animationFillMode: 'forwards' }"
          @mouseenter="onMemberHover(index)"
          @mouseleave="onMemberLeave(index)"
        >
          <!-- Main card -->
          <div class="relative bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-4 hover:rotate-1 group-hover:scale-[1.02]">
            
            <!-- Animated border -->
            <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-border animate-gradient-border"></div>
            </div>

            <!-- Image section with advanced effects -->
            <div class="relative h-80 overflow-hidden">
              <!-- Background pattern -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
              
              <!-- Profile image -->
              <img 
                :src="member.image" 
                :alt="member.name" 
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                :style="{ filter: 'contrast(1.1) saturate(1.2)' }"
              >
              
              <!-- Overlay effects -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <!-- Floating particles -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  v-for="i in 8" 
                  :key="i"
                  class="absolute w-2 h-2 bg-white rounded-full animate-float-particle"
                  :style="getParticleStyle(i)"
                ></div>
              </div>

              <!-- Hover content -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div class="text-center text-white">
                  <div class="flex gap-4 mb-4">
                    <!-- Social links with animations -->
                    <a 
                      v-for="social in member.socials" 
                      :key="social.platform"
                      :href="social.url"
                      class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    >
                      <component :is="social.icon" class="w-6 h-6" />
                    </a>
                  </div>
                  <button class="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white font-medium hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            <!-- Content section -->
            <div class="p-8 relative">
              <!-- Decorative element -->
              <div class="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform -translate-y-4 group-hover:w-20 transition-all duration-500"></div>
              
              <div class="space-y-4">
                <!-- Name with typewriter effect -->
                <h3 class="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {{ member.name }}
                </h3>
                
                <!-- Title with gradient -->
                <p class="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {{ member.title }}
                </p>
                
                <!-- Bio with reveal animation -->
                <p class="text-gray-600 leading-relaxed transform transition-all duration-300 group-hover:text-gray-700">
                  {{ member.bio }}
                </p>
                
                <!-- Skills tags -->
                <div class="flex flex-wrap gap-2 pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span 
                    v-for="skill in member.skills" 
                    :key="skill"
                    class="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 text-sm rounded-full font-medium border border-blue-100"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Background glow effect -->
            <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 blur-2xl transform scale-105"></div>
          </div>
        </div>
      </div>

      <!-- Interactive CTA Section -->
      <div class="text-center opacity-0 animate-fade-in-up" style="animation-delay: 2s; animation-fill-mode: forwards;">
        <div class="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-white overflow-hidden">
          <!-- Animated background pattern -->
          <!-- <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          </div> -->
          
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-4">Ready to Work with Our Team?</h3>
            <p class="text-base mb-8 opacity-90">Let's discuss how our expertise can drive your business forward</p>
            
            <button @click="openWhatsApp" class="group bg-white text-blue-600 px-10 py-3 rounded-full font-bold text-base hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <span class="relative z-10 flex items-center gap-3">
                Get Started Today
                <svg class="w-6 h-6 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
              <!-- Ripple effect -->
              <div class="absolute inset-0 bg-blue-100 transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 rounded-full transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Linkedin, Twitter, Mail, Github } from 'lucide-vue-next'
import member1 from "@/assets/img/chief1.jpeg"
import member2 from "@/assets/img/chief2.jpeg"
import member3 from "@/assets/img/chief3.jpeg"

const teamRefs = ref<HTMLElement[]>([])
const animatedStats = ref({ experience: 0, projects: 0, awards: 0 })

const teamMembers = [
  {
 name: 'DuroRotimi O.',
    title: 'Business Development Expert',
    bio: 'Business Development Expert with over 10 years of experience in African markets.',
    image: member1,
    skills: ['Strategy', 'Leadership', 'M&A'],
    socials: [
      { platform: 'linkedin', icon: Linkedin, url: '#' },
      { platform: 'twitter', icon: Twitter, url: '#' },
      { platform: 'email', icon: Mail, url: '#' }
    ]
  },
  {
    name: 'Siraj A.',
    title: 'HR Specialist',
    bio: 'HR Specialist focused on workforce optimization and talent management.',
    image: member2,
    skills: ['Energy', 'Sustainability', 'Innovation'],
    socials: [
      { platform: 'linkedin', icon: Linkedin, url: '#' },
      { platform: 'github', icon: Github, url: '#' },
      { platform: 'email', icon: Mail, url: '#' }
    ]
  },
  {
    name: 'Samuel D.',
    title: 'Technology Consultant',
    bio: 'Technology Consultant with expertise in implementing innovative solutions.',
    image: member3,
    skills: ['HR Strategy', 'Operations', 'Analytics'],
    socials: [
      { platform: 'linkedin', icon: Linkedin, url: '#' },
      { platform: 'twitter', icon: Twitter, url: '#' },
      { platform: 'email', icon: Mail, url: '#' }
    ]
  },
//   {
//     name: 'James Thompson',
//     title: 'Market Research Lead',
//     bio: 'Former McKinsey principal with expertise in competitive intelligence and market entry strategies.',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
//     skills: ['Research', 'Analytics', 'Strategy'],
//     socials: [
//       { platform: 'linkedin', icon: Linkedin, url: '#' },
//       { platform: 'twitter', icon: Twitter, url: '#' },
//       { platform: 'email', icon: Mail, url: '#' }
//     ]
//   },
//   {
//     name: 'Lisa Park',
//     title: 'Brand & Communications',
//     bio: 'Award-winning brand strategist with 12+ years building global brands for Fortune 100 companies.',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80',
//     skills: ['Branding', 'PR', 'Digital Marketing'],
//     socials: [
//       { platform: 'linkedin', icon: Linkedin, url: '#' },
//       { platform: 'twitter', icon: Twitter, url: '#' },
//       { platform: 'github', icon: Github, url: '#' }
//     ]
//   },
//   {
//     name: 'David Kumar',
//     title: 'Supply Chain Expert',
//     bio: 'Former Amazon logistics director specializing in agricultural supply chains and distribution optimization.',
//     image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=500&fit=crop&q=80',
//     skills: ['Logistics', 'Agriculture', 'Tech'],
//     socials: [
//       { platform: 'linkedin', icon: Linkedin, url: '#' },
//       { platform: 'github', icon: Github, url: '#' },
//       { platform: 'email', icon: Mail, url: '#' }
//     ]
//   }
]

// Animation functions
const animateStats = () => {
  const targets = { experience: 75, projects: 200, awards: 15 }
  const duration = 2000
  const start = Date.now()
  
  const animate = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    
    animatedStats.value = {
      experience: Math.floor(targets.experience * easeOut),
      projects: Math.floor(targets.projects * easeOut),
      awards: Math.floor(targets.awards * easeOut)
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  animate()
}

const getFloatingElementStyle = (index: number) => {
  const positions = [
    { top: '10%', left: '5%' },
    { top: '20%', right: '10%' },
    { bottom: '30%', left: '8%' },
    { top: '60%', right: '15%' },
    { bottom: '20%', right: '25%' },
    { top: '15%', left: '70%' },
    { bottom: '40%', left: '60%' },
    { top: '45%', left: '15%' },
    { top: '75%', left: '45%' },
    { bottom: '60%', right: '5%' },
    { top: '35%', left: '85%' },
    { bottom: '10%', left: '30%' }
  ]
  
  return {
    ...positions[index - 1],
    animationDelay: `${index * 0.5}s`,
    animationDuration: `${6 + index * 0.5}s`
  }
}

const getParticleStyle = (index: number) => {
  return {
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
    animationDelay: `${Math.random() * 2}s`,
    animationDuration: `${3 + Math.random() * 2}s`
  }
}

const onMemberHover = (index: number) => {
  const element = teamRefs.value[index]
  if (element) {
    element.style.zIndex = '20'
  }
}

const openWhatsApp = () => {
  const message = encodeURIComponent('Hello! I\'m interested in learning more about Hudia\'s consulting services.')
  window.open(`https://wa.me/+2347060727672?text=${message}`, '_blank')
}

const onMemberLeave = (index: number) => {
  const element = teamRefs.value[index]
  if (element) {
    element.style.zIndex = '10'
  }
}

onMounted(() => {
  setTimeout(animateStats, 1500)
  
  // Add scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view')
      }
    })
  })

  teamRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})
</script>

<style scoped>
/* Advanced Animation Keyframes */
@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-border {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes text-reveal {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

@keyframes card-entrance {
  0% {
    opacity: 0;
    transform: translateY(100px) rotateY(45deg) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateY(0deg) scale(1);
  }
}

@keyframes float-particle {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

/* Animation Classes */
.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

.animate-gradient-border {
  background-size: 200% 200%;
  animation: gradient-border 3s ease infinite;
}

.animate-text-reveal {
  animation: text-reveal 1.2s ease-out forwards;
}

.animate-card-entrance {
  animation: card-entrance 1s ease-out forwards;
}

.animate-float-particle {
  animation: float-particle 4s ease-in-out infinite;
}

.animate-slide-down {
  animation: slide-down 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3));
  border-radius: 50%;
  animation: float-particle infinite ease-in-out;
}

.floating-element:nth-child(odd) {
  border-radius: 20%;
  background: linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3));
}

/* Advanced hover effects */
.group:hover .animate-gradient-border {
  animation-duration: 1.5s;
}

/* Responsive optimizations */
@media (max-width: 768px) {
  .animate-blob,
  .floating-elements {
    display: none;
  }
  
  .animate-card-entrance {
    animation: fade-in-up 0.6s ease-out forwards;
  }
}

/* 3D Transform support */
.preserve-3d {
  transform-style: preserve-3d;
}

/* Backdrop blur enhancement */
@supports (backdrop-filter: blur(20px)) {
  .backdrop-blur-xl {
    backdrop-filter: blur(20px);
  }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(59, 130, 246, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border-radius: 4px;
}
</style>