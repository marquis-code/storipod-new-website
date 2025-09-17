<template>
  <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
    <!-- Navigation -->
     <GlassyHeader />
    <!-- <header class="sticky top-0 backdrop-blur-md bg-white/85 dark:bg-whte border-b border-gray-200/30 dark:border-gray-700/30 z-50">
      <div class="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2 font-extrabold text-xl">
          <img src="@/assets/img/storipodLogo.svg" />
        </NuxtLink>
        
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="#features" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold transition-colors">Features</NuxtLink>
          <NuxtLink to="#creators" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold transition-colors">Creators</NuxtLink>
          <NuxtLink to="#advertisers" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold transition-colors">Advertisers</NuxtLink>
          <NuxtLink to="#business" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold transition-colors">Business Tools</NuxtLink>
          <NuxtLink to="#faq" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold transition-colors">FAQ</NuxtLink>
          <NuxtLink to="#download" class="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all hover:shadow-lg hover:-translate-y-0.5">Get the app</NuxtLink>
        </nav>

        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <nav class="px-5 py-4 space-y-3">
          <NuxtLink to="#features" @click="toggleMobileMenu" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold py-2">Features</NuxtLink>
          <NuxtLink to="#creators" @click="toggleMobileMenu" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold py-2">Creators</NuxtLink>
          <NuxtLink to="#advertisers" @click="toggleMobileMenu" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold py-2">Advertisers</NuxtLink>
          <NuxtLink to="#business" @click="toggleMobileMenu" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold py-2">Business Tools</NuxtLink>
          <NuxtLink to="#faq" @click="toggleMobileMenu" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-semibold py-2">FAQ</NuxtLink>
          <NuxtLink to="#download" @click="toggleMobileMenu" class="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all mt-4">Get the app</NuxtLink>
        </nav>
      </div>
    </header> -->




    <!-- Hero Section -->
     <HeroSection />
    <!-- <section class="max-w-7xl mx-auto px-5 py-16 md:py-24">
      <div class="grid lg:order-1 order-2 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <span class="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">New</span>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Read like social. <br>Earn like a creator.
          </h1>
          
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            Storipod turns reading into a feed you love—and lets writers get paid from day one. Follow topics, save threads, and support the voices you care about.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="#download" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all hover:shadow-lg hover:-translate-y-0.5">
              Download app
            </NuxtLink>
            <NuxtLink to="#creators" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              For creators
            </NuxtLink>
          </div>
          
          <div class="flex flex-wrap gap-6 pt-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl font-bold">100K+</span>
              <span class="text-gray-600 dark:text-gray-400">stories saved</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl font-bold">12 min</span>
              <span class="text-gray-600 dark:text-gray-400">avg. session</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-2xl font-bold">1-click</span>
              <span class="text-gray-600 dark:text-gray-400">payouts</span>
            </div>
          </div>
        </div>
        
        <div class="relative lg:order-2 order-1">
          <img src="@/assets/images/merged-hero.png" />
        </div>
      </div>
    </section> -->

    <DigitalAssetPlatform />
    <AnimatedVideoGrid />
    <ExchangeSection />

    <!-- Features Section -->
    <section id="features" class="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Why Storipod</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A clean reading flow, smart discovery, and thoughtful tools for writers and readers.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="feature in features" :key="feature.title" class="bg-gradient-to-b from-blue-50/80 dark:from-blue-900/20 to-transparent border border-blue-200/50 dark:border-blue-700/30 rounded-2xl p-6">
            <Icon :name="feature.icon" class="w-8 h-8 text-blue-500 mb-4" />
            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Creators Section -->
    <section id="creators" class="py-16">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-extrabold">Monetize your writing</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              Sell subscriptions, accept tips, and run paid newsletters—no plugins, no code. Unlock analytics, promo codes, and instant payouts.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="#" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all hover:shadow-lg hover:-translate-y-0.5">
                Start creating
              </NuxtLink>
              <NuxtLink to="#faq" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                See how payouts work
              </NuxtLink>
            </div>
          </div>
          
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="tool in creatorTools" :key="tool.title" class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 class="text-lg font-semibold mb-2">{{ tool.title }}</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{{ tool.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advertisers Section -->
    <section id="advertisers" class="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-7xl mx-auto px-5 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Native stories, real attention</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Reach thousands of engaged readers in a storytelling-first environment with native placements and creator partnerships.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="#" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all hover:shadow-lg hover:-translate-y-0.5">
            Start advertising
          </NuxtLink>
          <span class="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Business Suite</span>
        </div>
      </div>
    </section>

    <!-- Business Tools Section -->
    <section id="business" class="py-16">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Business Tools</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Single sign-on to Business Suite, Ads Manager, and Team Accounts—plan, publish, and measure in one place.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="tool in businessTools" :key="tool.title" class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="text-lg font-semibold mb-2">{{ tool.title }}</h4>
            <p class="text-gray-600 dark:text-gray-400">{{ tool.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="p-10">
      <FooterComponent />
    </div>

    <!-- FAQ Section -->
    <!-- <section id="faq" class="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div class="max-w-4xl mx-auto px-5">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center mb-12">FAQ</h2>
        
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-gray-200 dark:border-gray-700">
            <button 
              @click="toggleFaq(index)"
              class="w-full py-6 text-left font-semibold text-lg hover:text-blue-500 transition-colors flex items-center justify-between"
            >
              {{ faq.question }}
              <Icon 
                :name="openFaqIndex === index ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" 
                class="w-5 h-5 transition-transform"
              />
            </button>
            <div v-if="openFaqIndex === index" class="pb-6">
              <p class="text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Download Section -->
    <!-- <section id="download" class="py-16">
      <div class="max-w-7xl mx-auto px-5 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Get the app</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">Available on iOS and Android.</p>
        
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink to="#" class="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
            <Icon name="simple-icons:apple" class="w-8 h-8" />
            <div class="text-left">
              <div class="text-xs">Download on the</div>
              <div class="font-semibold">App Store</div>
            </div>
          </NuxtLink>
          <NuxtLink to="#" class="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
            <Icon name="simple-icons:googleplay" class="w-8 h-8" />
            <div class="text-left">
              <div class="text-xs">Get it on</div>
              <div class="font-semibold">Google Play</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section> -->

    <!-- Footer -->
    <!-- <footer class="py-12 border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h5 class="font-bold mb-3">Product</h5>
            <div class="space-y-2">
              <NuxtLink to="#creators" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Monetization</NuxtLink>
              <NuxtLink to="#features" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Newsletters</NuxtLink>
              <NuxtLink to="#faq" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Help Center</NuxtLink>
            </div>
          </div>
          
          <div>
            <h5 class="font-bold mb-3">Downloads</h5>
            <div class="space-y-2">
              <NuxtLink to="#download" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">iOS App</NuxtLink>
              <NuxtLink to="#download" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Android App</NuxtLink>
            </div>
          </div>
          
          <div>
            <h5 class="font-bold mb-3">Policies</h5>
            <div class="space-y-2">
              <NuxtLink to="#" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Terms</NuxtLink>
              <NuxtLink to="#" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Privacy</NuxtLink>
              <NuxtLink to="#" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Creator Eligibility</NuxtLink>
            </div>
          </div>
          
          <div>
            <h5 class="font-bold mb-3">Company</h5>
            <div class="space-y-2">
              <NuxtLink to="#" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">About</NuxtLink>
              <NuxtLink to="#" class="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Careers</NuxtLink>
            </div>
          </div>
          
          <div>
            <h5 class="font-bold mb-3">Social</h5>
            <div class="space-y-2">
              <NuxtLink to="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">X</NuxtLink>
              <span class="text-gray-400"> · </span>
              <NuxtLink to="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Instagram</NuxtLink>
              <span class="text-gray-400"> · </span>
              <NuxtLink to="#" class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">LinkedIn</NuxtLink>
            </div>
          </div>
        </div>
        
        <div class="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>© {{ currentYear }} Storipod</span>
            <span class="opacity-50">·</span>
            <NuxtLink to="#faq" class="hover:text-gray-900 dark:hover:text-gray-100">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script setup lang="ts">
interface FeedItem {
  id: number;
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface CreatorTool {
  title: string;
  description: string;
}

interface BusinessTool {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Reactive data
const isMobileMenuOpen = ref(false)
const openFaqIndex = ref(0)
const currentYear = new Date().getFullYear()

// Feed items for the hero demo
const feedItems: FeedItem[] = [
  {
    id: 1,
    title: "Why attention > clicks",
    description: "A short read on designing for meaningful reading time..."
  },
  {
    id: 2,
    title: "Crypto & Policy Weekly",
    description: "This week's stablecoin frameworks and market notes."
  },
  {
    id: 3,
    title: "From your highlights",
    description: "Dive back into saved threads across your topics."
  }
]

// Features data
const features: Feature[] = [
  {
    title: "Personalized feed",
    description: "Follow topics and creators; your feed adapts as you read.",
    icon: "heroicons:user-circle"
  },
  {
    title: "Save & go deep",
    description: "Threaded stories, highlights, and collections for focused sessions.",
    icon: "heroicons:bookmark"
  },
  {
    title: "Audio mode",
    description: "Listen to long reads on the go—offline included.",
    icon: "heroicons:speaker-wave"
  }
]

// Creator tools data
const creatorTools: CreatorTool[] = [
  {
    title: "Paywalls",
    description: "Flexible metered, members-only, and early access."
  },
  {
    title: "Newsletters",
    description: "Send free or paid editions with built-in delivery."
  },
  {
    title: "Analytics",
    description: "See what resonates—by topic, post, and cohort."
  },
  {
    title: "Payouts",
    description: "Connect once, get paid as you publish."
  }
]

// Business tools data
const businessTools: BusinessTool[] = [
  {
    title: "Suite",
    description: "Calendar, drafts, approvals."
  },
  {
    title: "Ads Manager",
    description: "Native units with performance insights."
  },
  {
    title: "Teams",
    description: "Roles, permissions, and audit logs."
  }
]

// FAQ data
const faqs: FAQ[] = [
  {
    question: "How do creator payouts work?",
    answer: "Connect your account once; payouts are triggered automatically based on your monetization settings."
  },
  {
    question: "Can I import my subscribers?",
    answer: "Yes—bring your list from other platforms and keep your relationships intact."
  },
  {
    question: "Is there a free plan?",
    answer: "Reading is free; creators can start free and upgrade anytime."
  }
]

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index
}

// SEO
useHead({
  title: 'Storipod — Read like social. Earn like a creator.',
  meta: [
    {
      name: 'description',
      content: 'Storipod turns reading into a feed you love—and lets writers get paid from day one. Follow topics, save threads, and support the voices you care about.'
    },
    {
      property: 'og:title',
      content: 'Storipod — Read like social. Earn like a creator.'
    },
    {
      property: 'og:description',
      content: 'Storipod turns reading into a feed you love—and lets writers get paid from day one.'
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap'
    }
  ]
})
</script>