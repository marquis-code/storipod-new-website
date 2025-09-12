<template>
  <section class="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)] animate-pulse"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block mb-6">
          <h2 class="text-2xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
            Success Stories
          </h2>
          <div class="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4 animate-pulse"></div>
        </div>
        <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Real results from real partnerships. See how we've transformed businesses across industries.
        </p>
      </div>

      <!-- Industry Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="industry in industries"
          :key="industry"
          @click="handleIndustryChange(industry)"
          class="px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          :class="activeIndustry === industry
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl shadow-purple-500/25 animate-pulse'
            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50 hover:border-purple-400/50'"
        >
          {{ industry }}
        </button>
      </div>

      <!-- Carousel Container -->
      <div 
        class="relative"
        @mouseenter="pauseAutoPlay"
        @mouseleave="resumeAutoPlay"
      >
        <!-- Main Carousel -->
        <div class="overflow-hidden rounded-3xl">
          <div 
            ref="carouselRef"
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="(study, index) in filteredCaseStudies" 
              :key="study.id" 
              class="w-full flex-shrink-0 px-4"
            >
              <div class="max-w-4xl mx-auto">
                <div class="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                  
                  <!-- Animated Border Glow -->
                  <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <!-- Content -->
                  <div class="relative z-10">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-8">
                      <div :class="`inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl font-bold shadow-lg`">
                        <component :is="study.iconName" :size="20" />
                        {{ study.industry }}
                      </div>
                      <div class="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                        <component :is="study.iconName" :size="32" class="text-cyan-400" />
                      </div>
                    </div>
                    
                    <h3 class="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
                      {{ study.client }}
                    </h3>
                    
                    <!-- Content Grid -->
                    <div class="grid md:grid-cols-2 gap-8 mb-8">
                      <div class="space-y-6">
                        <!-- Challenge -->
                        <div class="group/item">
                          <h4 class="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                            Challenge
                          </h4>
                          <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                            {{ study.challenge }}
                          </p>
                        </div>
                        
                        <!-- Solution -->
                        <div class="group/item">
                          <h4 class="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                            Solution
                          </h4>
                          <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                            {{ study.solution }}
                          </p>
                        </div>
                      </div>

                      <div>
                        <!-- Results -->
                        <div class="group/item mb-6">
                          <h4 class="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            Results
                          </h4>
                          <p class="text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                            {{ study.result }}
                          </p>
                        </div>
                        
                        <!-- Animated Stats -->
                        <div class="grid grid-cols-2 gap-4">
                          <div 
                            v-for="(stat, statIndex) in study.stats" 
                            :key="statIndex" 
                            class="relative"
                          >
                            <div class="bg-gradient-to-br from-black/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 text-center group-hover:border-cyan-400/30 transition-all duration-300">
                              <div :class="`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${study.color} bg-clip-text text-transparent`">
                                {{ animatedStats[`${study.id}-${statIndex}`] || 0 }}{{ stat.suffix }}
                              </div>
                              <div class="text-xs text-gray-400 font-medium">
                                {{ stat.label }}
                              </div>
                            </div>
                            <!-- Floating Animation -->
                            <div :class="`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${study.color} rounded-full animate-bounce opacity-80`"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Decorative Elements -->
                  <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                  <div class="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl border border-slate-600/50 hover:border-purple-400/50 z-20 group"
        >
          <ChevronLeftIcon :size="24" class="group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl border border-slate-600/50 hover:border-purple-400/50 z-20 group"
        >
          <ChevronRightIcon :size="24" class="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <!-- Slide Indicators -->
      <div class="flex justify-center gap-3 mt-8">
        <button
          v-for="(_, index) in filteredCaseStudies"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentSlide === index
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-125 shadow-lg shadow-purple-500/50'
            : 'bg-slate-600 hover:bg-slate-500'"
        />
      </div>

      <!-- Auto-play Indicator -->
      <!-- <div class="flex justify-center mt-4">
        <button
          @click="toggleAutoPlay"
          class="text-sm px-4 py-2 rounded-full transition-all duration-300"
          :class="isAutoPlaying 
            ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/30' 
            : 'text-gray-500 bg-slate-800/50 border border-slate-600/50'"
        >
          {{ isAutoPlaying ? '⏸️ Auto-playing' : '▶️ Paused' }}
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Star, TrendingUp, Users, Award } from 'lucide-vue-next'

interface CaseStudyStat {
  label: string
  value: number
  suffix: string
}

interface CaseStudy {
  id: number
  industry: string
  client: string
  challenge: string
  solution: string
  result: string
  stats: CaseStudyStat[]
  color: string
  iconName: string
}

// Reactive state
const activeIndustry = ref<string>('All')
const currentSlide = ref<number>(0)
const isAutoPlaying = ref<boolean>(true)
const animatedStats = ref<Record<string, number>>({})
const carouselRef = ref<HTMLElement>()

// Auto-play interval ref
let autoPlayInterval: NodeJS.Timeout | null = null

// Static data
const industries = ['All', 'Energy', 'Agriculture', 'Logistics', 'HR', 'Technology']

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: 'Agriculture',
    client: 'Mid-sized Agro-processing Company',
    challenge: 'Needed to find international buyers for a new sustainable product line and expand into European markets.',
    solution: 'Conducted targeted global market research to identify high-potential regions and executed a comprehensive business matching campaign with qualified distributors.',
    result: 'Secured contracts with 3 major distributors in Europe within 8 months, increasing export revenue by 45% and establishing long-term market presence.',
    stats: [
      { label: 'Revenue Increase', value: 45, suffix: '%' },
      { label: 'New Markets', value: 8, suffix: '' }
    ],
    color: 'from-white to-gray-300',
    iconName: 'TrendingUp'
  },
  {
    id: 2,
    industry: 'Energy', 
    client: 'Renewable Energy Tech Startup',
    challenge: 'Lack of visibility and credibility to attract investors and establish market presence in the competitive renewable energy sector.',
    solution: 'Full PR and brand management program, including strategic media outreach, award submissions, investor pitch coaching, and thought leadership development.',
    result: 'Featured in 5+ major industry publications, secured meetings with 3 target venture capital firms, and successfully closed a Series A funding round.',
    stats: [
      { label: 'Media Features', value: 5, suffix: '+' },
      { label: 'VC Meetings', value: 3, suffix: '' }
    ],
    color: 'from-white to-gray-300',
    iconName: 'Star'
  },
  {
    id: 3,
    industry: 'Logistics',
    client: 'National Logistics Provider', 
    challenge: 'Inefficient HR processes leading to high driver turnover rates and increasing operational costs affecting service delivery.',
    solution: 'Comprehensive HR operational review leading to a redesigned recruitment process and new retention-focused incentive programs with performance metrics.',
    result: 'Reduced driver turnover by 30% in the first year and decreased recruitment costs by 22%, improving service quality and operational efficiency.',
    stats: [
      { label: 'Turnover Reduction', value: 30, suffix: '%' },
      { label: 'Cost Savings', value: 22, suffix: '%' }
    ],
    color: 'from-white to-gray-300',
    iconName: 'Users'
  },
  {
    id: 4,
    industry: 'Technology',
    client: 'SaaS Platform Provider',
    challenge: 'Struggling to scale customer acquisition and needed to optimize their sales funnel for better conversion rates.',
    solution: 'Implemented data-driven sales optimization strategy with advanced analytics, A/B testing, and automated nurturing campaigns.',
    result: 'Achieved 180% increase in qualified leads and improved conversion rates by 67%, resulting in accelerated growth trajectory.',
    stats: [
      { label: 'Lead Increase', value: 180, suffix: '%' },
      { label: 'Conversion Boost', value: 67, suffix: '%' }
    ],
    color: 'from-white to-gray-300',
    iconName: 'Award'
  },
  {
    id: 5,
    industry: 'HR',
    client: 'Enterprise Consulting Firm',
    challenge: 'High employee turnover and low engagement scores affecting client satisfaction and company culture.',
    solution: 'Developed comprehensive employee engagement program with personalized career paths, mentorship programs, and culture transformation initiatives.',
    result: 'Increased employee satisfaction by 85% and reduced turnover by 60%, leading to improved client retention and company performance.',
    stats: [
      { label: 'Satisfaction Up', value: 85, suffix: '%' },
      { label: 'Turnover Down', value: 60, suffix: '%' }
    ],
    color: 'from-white to-gray-300',
    iconName: 'Users'
  }
]

// Computed properties
const filteredCaseStudies = computed(() => {
  if (activeIndustry.value === 'All') {
    return caseStudies
  }
  return caseStudies.filter(study => study.industry === activeIndustry.value)
})

// Methods
const handleIndustryChange = (industry: string) => {
  activeIndustry.value = industry
  currentSlide.value = 0
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % filteredCaseStudies.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + filteredCaseStudies.value.length) % filteredCaseStudies.value.length
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const startAutoPlay = () => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

const pauseAutoPlay = () => {
  isAutoPlaying.value = false
  stopAutoPlay()
}

const resumeAutoPlay = () => {
  isAutoPlaying.value = true
  startAutoPlay()
}

const toggleAutoPlay = () => {
  if (isAutoPlaying.value) {
    pauseAutoPlay()
  } else {
    resumeAutoPlay()
  }
}

const animateStats = (study: CaseStudy) => {
  const newAnimatedStats: Record<string, number> = {}
  
  study.stats.forEach((stat, index) => {
    newAnimatedStats[`${study.id}-${index}`] = 0
  })
  
  animatedStats.value = { ...animatedStats.value, ...newAnimatedStats }

  setTimeout(() => {
    study.stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        animatedStats.value[`${study.id}-${index}`] = Math.floor(current)
      }, 30)
    })
  }, 500)
}

// Watchers
watch(isAutoPlaying, (newValue) => {
  if (newValue) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
})

watch(currentSlide, () => {
  const currentStudy = filteredCaseStudies.value[currentSlide.value]
  if (currentStudy) {
    animateStats(currentStudy)
  }
})

watch(filteredCaseStudies, () => {
  if (currentSlide.value >= filteredCaseStudies.value.length) {
    currentSlide.value = 0
  }
})

// Lifecycle
onMounted(() => {
  if (isAutoPlaying.value) {
    startAutoPlay()
  }
  
  // Initialize stats animation for the first slide
  const currentStudy = filteredCaseStudies.value[currentSlide.value]
  if (currentStudy) {
    animateStats(currentStudy)
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
@keyframes gradient-x {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}
</style>