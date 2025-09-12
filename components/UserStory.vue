<template>
  <section class="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
    <!-- Subtle Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-30"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-gray-50 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-25/20 to-gray-25/20 rounded-full blur-3xl opacity-20"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="text-center mb-16 md:mb-20">
        <div class="inline-block mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <div class="h-1 w-24 bg-blue-600 rounded-full mx-auto"></div>
        </div>
        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real results from real partnerships. See how we've transformed businesses across industries.
        </p>
      </div>

      <!-- Industry Filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="industry in industries"
          :key="industry"
          @click="handleIndustryChange(industry)"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          :class="activeIndustry === industry
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border border-gray-200'"
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
        <div class="overflow-hidden rounded-2xl">
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
              <div class="max-w-5xl mx-auto">
                <div class="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  
                  <!-- Subtle Hover Accent -->
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <!-- Content -->
                  <div class="relative z-10">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-8">
                      <div class="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium shadow-lg">
                        <component :is="study.iconName" :size="20" />
                        {{ study.industry }}
                      </div>
                      <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                        <component :is="study.iconName" :size="32" class="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <h3 class="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      {{ study.client }}
                    </h3>
                    
                    <!-- Content Grid -->
                    <div class="grid md:grid-cols-2 gap-8 mb-8">
                      <div class="space-y-6">
                        <!-- Challenge -->
                        <div class="group/item">
                          <h4 class="text-xl font-semibold text-red-600 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                            Challenge
                          </h4>
                          <p class="text-gray-700 leading-relaxed text-sm md:text-base">
                            {{ study.challenge }}
                          </p>
                        </div>
                        
                        <!-- Solution -->
                        <div class="group/item">
                          <h4 class="text-xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                            Solution
                          </h4>
                          <p class="text-gray-700 leading-relaxed text-sm md:text-base">
                            {{ study.solution }}
                          </p>
                        </div>
                      </div>

                      <div>
                        <!-- Results -->
                        <div class="group/item mb-6">
                          <h4 class="text-xl font-semibold text-green-600 mb-3 flex items-center gap-2">
                            <div class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                            Results
                          </h4>
                          <p class="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
                            {{ study.result }}
                          </p>
                        </div>
                        
                        <!-- Animated Stats -->
                        <div class="grid grid-cols-2 gap-4">
                          <div 
                            v-for="(stat, statIndex) in study.stats" 
                            :key="statIndex" 
                            class="relative transform hover:scale-105 transition-transform duration-300"
                          >
                            <div class="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 text-center group-hover:border-blue-200 transition-all duration-300 shadow-md hover:shadow-lg">
                              <div class="text-3xl md:text-4xl font-bold mb-2 text-gray-900 counter-animation">
                                {{ animatedStats[`${study.id}-${statIndex}`] || 0 }}{{ stat.suffix }}
                              </div>
                              <div class="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                {{ stat.label }}
                              </div>
                            </div>
                            <!-- Subtle Success Indicator -->
                            <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-80 animate-ping"></div>
                            <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Decorative Corner Elements -->
                  <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-2xl"></div>
                  <div class="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-100/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200 hover:border-blue-300 z-20 group hover:scale-110"
        >
          <ChevronLeftIcon :size="20" class="group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200 hover:border-blue-300 z-20 group hover:scale-110"
        >
          <ChevronRightIcon :size="20" class="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <!-- Slide Indicators -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="(_, index) in filteredCaseStudies"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
          :class="currentSlide === index
            ? 'bg-blue-600 scale-125'
            : 'bg-gray-300 hover:bg-gray-400'"
        />
      </div>

      <!-- Progress Bar -->
      <div class="max-w-sm mx-auto mt-6">
        <div class="w-full bg-gray-200 rounded-full h-1">
          <div 
            class="bg-blue-600 h-1 rounded-full transition-all duration-300"
            :style="{ width: `${((currentSlide + 1) / filteredCaseStudies.length) * 100}%` }"
          ></div>
        </div>
      </div>
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
  }, 5000) // Slightly longer interval for better readability
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
      const increment = stat.value / 60 // Smoother animation
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        animatedStats.value[`${study.id}-${index}`] = Math.floor(current)
      }, 25) // Faster updates for smoother animation
    })
  }, 300)
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
.counter-animation {
  transition: all 0.3s ease-out;
}

/* Smooth hover animations */
.group:hover .counter-animation {
  transform: scale(1.05);
}

/* Custom scrollbar for potential future use */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Subtle entrance animations */
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

.group {
  animation: fadeInUp 0.6s ease-out;
}
</style>