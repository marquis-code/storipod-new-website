<template>
  <div class="min-h-screen bg-black">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-gray-800">
      <div class="flex h-20 items-center px-6 relative">
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden p-2 hover:bg-gray-800/50 rounded-md transition-colors"
          >
            <Menu class="h-5 w-5 text-white" />
          </button>
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="@/assets/images/storipod-logo-white.png" class="h-56 w-auto" />
            <!-- <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span class="font-bold text-xl text-white">Storipod</span> -->
          </NuxtLink>
        </div>

        <!-- Desktop Search -->
        <div class="hidden md:flex flex-1 max-w-md mx-auto px-8">
          <div class="relative w-full">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              v-model="searchQuery"
              @input="handleSearch"
              @focus="showSearchResults = true"
              placeholder="Search FAQs..." 
              class="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 text-white placeholder-gray-400"
            />
            
            <!-- Desktop Search Results -->
            <div v-if="showSearchResults && filteredResults.length > 0" 
                 class="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-lg max-h-64 overflow-y-auto z-50">
              <div v-for="result in filteredResults" :key="`${result.sectionId}-${result.questionIndex}`"
                   @click="selectSearchResult(result)"
                   class="px-4 py-3 hover:bg-gray-800 cursor-pointer border-b border-gray-800 last:border-b-0">
                <p class="text-sm font-medium text-white">{{ result.question }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ result.sectionTitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Search Button -->
        <div class="md:hidden flex-1 flex justify-end">
          <button 
            @click="toggleMobileSearch"
            class="p-2 hover:bg-gray-800/50 rounded-md transition-colors"
          >
            <Search class="h-5 w-5 text-white" />
          </button>
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <button class="px-4 py-2 text-sm text-white hover:bg-gray-800/50 rounded-md transition-colors">
            Contact Support
          </button>
        </div>
      </div>

      <!-- Mobile Search Overlay -->
      <div v-if="mobileSearchOpen" 
           class="md:hidden absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-sm p-4 border-b border-gray-800 animate-slide-down">
        <div class="flex items-center space-x-3">
          <button @click="toggleMobileSearch" class="p-2 hover:bg-gray-800/50 rounded-md">
            <ChevronLeft class="h-5 w-5 text-white" />
          </button>
          <div class="flex-1 relative">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              ref="mobileSearchInput"
              v-model="searchQuery"
              @input="handleSearch"
              placeholder="Search FAQs..." 
              class="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/20 text-white placeholder-gray-400"
            />
          </div>
        </div>
        
        <!-- Mobile Search Results -->
        <div v-if="filteredResults.length > 0" 
             class="mt-4 bg-gray-900 border border-gray-700 rounded-md max-h-64 overflow-y-auto">
          <div v-for="result in filteredResults" :key="`${result.sectionId}-${result.questionIndex}`"
               @click="selectSearchResult(result)"
               class="px-4 py-3 hover:bg-gray-800 cursor-pointer border-b border-gray-800 last:border-b-0">
            <p class="text-sm font-medium text-white">{{ result.question }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ result.sectionTitle }}</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div v-if="mobileMenuOpen" 
         class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
         @click="toggleMobileMenu">
      <div class="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto transform animate-slide-in-left"
           @click.stop>
        <div class="p-6">
          <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h2>
          <nav class="space-y-2">
            <button
              v-for="item in sidebarItems"
              :key="item.id"
              @click="scrollToSection(item.id, true)"
              :class="[
                'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group',
                activeItem === item.id
                  ? 'bg-accent text-black'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              ]"
            >
              <component :is="item.icon" class="h-4 w-4 flex-shrink-0" />
              <span class="text-sm font-medium flex-1">{{ item.label }}</span>
              <ChevronRight
                :class="[
                  'h-4 w-4 transition-transform duration-200',
                  activeItem === item.id ? 'rotate-90' : 'group-hover:translate-x-0.5'
                ]"
              />
            </button>
          </nav>

          <div class="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h3 class="text-sm font-semibold text-white mb-2">Need More Help?</h3>
            <p class="text-xs text-gray-400 mb-3">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button class="w-full bg-accent text-black text-xs font-medium py-2 px-3 rounded-md hover:bg-accent/90 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <!-- Desktop Sidebar -->
      <!-- <aside class="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto hidden lg:block">
        <div class="p-6">
          <h2 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h2>
          <nav class="space-y-2">
            <button
              v-for="item in sidebarItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="[
                'w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group',
                activeItem === item.id
                  ? 'bg-accent text-black'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              ]"
            >
              <component :is="item.icon" class="h-4 w-4 flex-shrink-0" />
              <span class="text-sm font-medium flex-1">{{ item.label }}</span>
              <ChevronRight
                :class="[
                  'h-4 w-4 transition-transform duration-200',
                  activeItem === item.id ? 'rotate-90' : 'group-hover:translate-x-0.5'
                ]"
              />
            </button>
          </nav>

          <div class="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <h3 class="text-sm font-semibold text-white mb-2">Need More Help?</h3>
            <p class="text-xs text-gray-400 mb-3">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button class="w-full bg-accent text-black text-xs font-medium py-2 px-3 rounded-md hover:bg-accent/90 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </aside> -->

      <!-- Main Content -->
      <main class="">
        <div class="max-w-7xl mx-auto px-6 py-16">
          <div class="mb-16 text-center">
            <h1 class="text-5xl font-bold text-white mb-6 text-balance tracking-tight">
              Frequently Asked Questions
            </h1>
            <p class="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about Storipod. Can't find what you're looking for?
              <span class="text-accent font-medium"> Contact our support team</span>.
            </p>
          </div>

          <div class="space-y-6">
            <!-- FAQ Section Component -->
            <div
              v-for="section in faqSections"
              :key="section.id"
              :id="section.id"
              class="scroll-mt-24 h-fit"
              :class="{ 'lg:col-span-2': section.id === 'verification' }"
            >
              <div class="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6 border-b border-gray-800">
                  <div class="flex items-center gap-3">
                    <HelpCircle class="h-6 w-6 text-white" />
                    <h2 class="text-2xl font-bold text-white tracking-tight">{{ section.title }}</h2>
                  </div>
                </div>

                <div class="divide-y divide-gray-800">
                  <div
                    v-for="(item, index) in section.questions"
                    :key="index"
                    class="group"
                  >
                    <button
                      @click="toggleItem(section.id, index)"
                      class="w-full px-8 py-6 text-left hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:bg-gray-800/70 focus:ring-2 focus:ring-accent/20"
                    >
                      <div class="flex items-start justify-between gap-4">
                        <h3 class="text-lg font-semibold text-white leading-relaxed text-pretty group-hover:text-accent transition-colors">
                          {{ item.question }}
                        </h3>
                        <ChevronDown
                          :class="[
                            'h-6 w-6 text-white transition-all duration-300 flex-shrink-0 mt-1',
                            isItemOpen(section.id, index) ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                          ]"
                        />
                      </div>
                    </button>

                    <div
                      :class="[
                        'overflow-hidden transition-all duration-500 ease-out',
                        isItemOpen(section.id, index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      ]"
                    >
                      <div class="px-8 pb-6">
                        <div class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-accent/30">
                          <p class="text-gray-300 leading-relaxed text-pretty text-base">{{ item.answer }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-20 text-center">
            <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-12">
              <h2 class="text-3xl font-bold text-white mb-4">Still have questions?</h2>
              <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed on Storipod. Get personalized assistance with your
                account, content strategy, or technical issues.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors">
                  Contact Support
                </button>
                <button class="border border-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Join Community
                </button>
              </div>
            </div>
          </div>

          <!-- Footer - Now inside main content area -->
          <footer class="bg-gray-900 border-t border-gray-800 mt-16 rounded-2xl">
            <div class="max-w-6xl mx-auto px-6 py-12">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="space-y-4">
                  <NuxtLink to="/" class="flex items-center space-x-2">
                    <img src="@/assets/images/storipod-logo-white.png" class="h-32 w-auto" />
                    <!-- <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span class="text-primary-foreground font-bold text-sm">S</span>
                    </div>
                    <span class="font-bold text-xl text-white">Storipod</span> -->
                  </NuxtLink>
                  <p class="text-sm text-gray-400 leading-relaxed">Tell Your Story</p>
                  <p class="text-xs text-gray-400">© 2024 Storipod</p>
                </div>

                <div>
                  <h3 class="font-semibold text-white mb-4">Downloads</h3>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-accent transition-colors">iOS App</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Android App</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Desktop App</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Browser Extension</a></li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-semibold text-white mb-4">Policies</h3>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-accent transition-colors">Do not sell my personal information</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Terms of Service</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Privacy Policy</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Community Guidelines</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Accessibility & Disability Accommodations</a></li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-semibold text-white mb-4">Contact</h3>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-accent transition-colors">About Us</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Careers</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Press</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">Support</a></li>
                    <li><a href="#" class="hover:text-accent transition-colors">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import { 
  Search, 
  Menu, 
  ChevronRight, 
  ChevronDown, 
  ChevronLeft,
  HelpCircle,
  FileText, 
  DollarSign, 
  Lock, 
  Megaphone, 
  Gift, 
  CreditCard, 
  Shield 
} from 'lucide-vue-next'

// Types
interface FAQItem {
  question: string
  answer: string
}

interface FAQSection {
  id: string
  title: string
  questions: FAQItem[]
}

interface SidebarItem {
  id: string
  label: string
  icon: any
}

interface SearchResult {
  sectionId: string
  sectionTitle: string
  questionIndex: number
  question: string
  answer: string
}

// Reactive state
const searchQuery = ref('')
const activeItem = ref('content')
const openItems = reactive<Record<string, number[]>>({})
const mobileMenuOpen = ref(false)
const mobileSearchOpen = ref(false)
const showSearchResults = ref(false)
const filteredResults = ref<SearchResult[]>([])
const mobileSearchInput = ref<HTMLInputElement | null>(null)

// Sidebar items
const sidebarItems: SidebarItem[] = [
  { id: "content", label: "Content", icon: FileText },
  { id: "monetization", label: "Monetization Basics", icon: DollarSign },
  { id: "locked-content", label: "Locked Content", icon: Lock },
  { id: "pods-ads", label: "Pods and Ads", icon: Megaphone },
  { id: "tips-gifts", label: "Tips and Gifts", icon: Gift },
  { id: "payout-wallet", label: "Payout and Wallet", icon: CreditCard },
  { id: "verification", label: "Account Verification and Security", icon: Shield },
]

// FAQ sections data
const faqSections: FAQSection[] = [
  {
    id: "content",
    title: "Content & Creation",
    questions: [
      {
        question: "How can I make money on Storipod?",
        answer: "You can monetize your content on Storipod through various methods including premium subscriptions, one-time purchases, tips from listeners, and brand partnerships. Our creator program offers multiple revenue streams to help you earn from your storytelling.",
      },
      {
        question: "What is Pult?",
        answer: "Pult is Storipod's advanced content management system that helps creators organize, schedule, and distribute their stories across multiple platforms. It includes analytics, audience insights, and automated publishing features.",
      },
      {
        question: "Do I need Pult to make money on Storipod?",
        answer: "No, Pult is not required to monetize your content on Storipod. However, it provides valuable tools and insights that can help you grow your audience and increase your earnings more effectively.",
      },
    ]
  },
  {
    id: "monetization",
    title: "Monetization Basics",
    questions: [
      {
        question: "What are the different ways to earn on Storipod?",
        answer: "Storipod offers multiple monetization options: subscription-based content, pay-per-story purchases, listener tips and donations, sponsored content opportunities, affiliate marketing integration, and exclusive premium content tiers.",
      },
      {
        question: "How much of my earnings do I get to keep?",
        answer: "Storipod takes a competitive platform fee, and you keep the majority of your earnings. The exact percentage depends on your creator tier and payment method. Premium creators enjoy reduced fees and additional benefits.",
      },
      {
        question: "Are there any extra fees besides Storipod's 30% platform fee?",
        answer: "Beyond our platform fee, standard payment processing fees apply (typically 2.9% + $0.30 per transaction). There are no hidden fees, setup costs, or monthly charges. You only pay when you earn.",
      },
    ]
  },
  {
    id: "locked-content",
    title: "Premium Content & Locking",
    questions: [
      {
        question: "What does it mean to 'lock' a post?",
        answer: "Locking a post means making it available only to paying subscribers or purchasers. Locked content appears with a preview, but the full story requires payment to access. This is perfect for premium content and exclusive stories.",
      },
      {
        question: "Is there a minimum price I can set for locked posts?",
        answer: "Yes, there's a minimum price of $0.99 for locked posts to ensure meaningful transactions and cover processing costs. You can set any price above this minimum based on your content's value.",
      },
      {
        question: "Can people see my locked posts before paying?",
        answer: "Locked posts show a preview including the title, description, and first few sentences. This gives potential buyers a taste of your content while encouraging them to purchase the full story.",
      },
      {
        question: "How often can I change the price of my locked posts?",
        answer: "You can adjust prices for your locked posts at any time. However, changes only apply to new purchases - existing subscribers maintain their current pricing tier until renewal.",
      },
      {
        question: "Can I offer discounts on my locked posts?",
        answer: "Yes! You can create promotional campaigns, limited-time discounts, and special offers for your locked content. Use our built-in promotion tools to attract new subscribers and reward loyal listeners.",
      },
    ]
  },
  {
    id: "pods-ads",
    title: "Advertising & Promotion",
    questions: [
      {
        question: "What is Pult used for?",
        answer: "Pult is our comprehensive creator toolkit that includes content scheduling, audience analytics, cross-platform publishing, revenue tracking, and advanced customization options for your Storipod presence.",
      },
      {
        question: "Do I have to pay to use Pult?",
        answer: "Pult offers both free and premium tiers. The free version includes basic features, while premium subscriptions unlock advanced analytics, priority support, and enhanced monetization tools.",
      },
      {
        question: "How do I create an ad with Pult?",
        answer: "In Pult, navigate to the 'Advertising' section, choose your campaign type, set your target audience, upload your creative assets, and set your budget. Our guided setup process makes it easy to launch effective ad campaigns.",
      },
    ]
  },
  {
    id: "tips-gifts",
    title: "Tips & Community Support",
    questions: [
      {
        question: "What is the 'Support a Creator' feature?",
        answer: "The 'Support a Creator' feature allows listeners to send direct tips and gifts to their favorite storytellers. It's a way for your audience to show appreciation and provide additional financial support beyond subscriptions.",
      },
      {
        question: "Is there a limit on how much someone can gift me?",
        answer: "There are reasonable limits in place for security purposes, but they're set high enough not to restrict genuine support. Large gifts may require additional verification for both sender and recipient protection.",
      },
      {
        question: "Do I receive notifications when I get a gift?",
        answer: "Yes! You'll receive instant notifications for all tips and gifts, including the amount and any message from the supporter. You can customize notification preferences in your account settings.",
      },
    ]
  },
  {
    id: "payout-wallet",
    title: "Payments & Withdrawals",
    questions: [
      {
        question: "How do I withdraw my earnings?",
        answer: "Access your creator dashboard, go to 'Earnings', and click 'Withdraw'. You can transfer funds to your bank account, PayPal, or other supported payment methods. Minimum withdrawal amounts apply.",
      },
      {
        question: "How does Storipod calculate my payout balance?",
        answer: "Your payout balance includes all confirmed earnings from subscriptions, purchases, tips, and ad revenue, minus platform fees and any applicable taxes. Pending transactions are shown separately until confirmed.",
      },
      {
        question: "Where can I see my earnings?",
        answer: "Your complete earnings breakdown is available in the creator dashboard under 'Analytics' and 'Earnings'. You can view daily, weekly, monthly, and yearly reports with detailed transaction histories.",
      },
    ]
  },
  {
    id: "verification",
    title: "Account Verification & Security",
    questions: [
      {
        question: "What is KYC verification, and why do I need it?",
        answer: "KYC (Know Your Customer) verification is a security process that confirms your identity. It's required for creators who want to monetize their content and ensures compliance with financial regulations and platform security.",
      },
      {
        question: "How long does KYC verification take?",
        answer: "KYC verification typically takes 1-3 business days once you submit all required documents. You'll receive email updates throughout the process, and urgent cases are prioritized for faster review.",
      },
    ]
  }
]

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileSearchOpen.value) {
    mobileSearchOpen.value = false
  }
}

const toggleMobileSearch = async () => {
  mobileSearchOpen.value = !mobileSearchOpen.value
  if (mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }
  
  if (mobileSearchOpen.value) {
    await nextTick()
    if (mobileSearchInput.value) {
      mobileSearchInput.value.focus()
    }
  }
}

const scrollToSection = (id: string, closeMobileMenu: boolean = false) => {
  activeItem.value = id
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  
  if (closeMobileMenu) {
    mobileMenuOpen.value = false
  }
}

const toggleItem = (sectionId: string, index: number) => {
  if (!openItems[sectionId]) {
    openItems[sectionId] = []
  }
  
  const items = openItems[sectionId]
  const itemIndex = items.indexOf(index)
  
  if (itemIndex > -1) {
    items.splice(itemIndex, 1)
  } else {
    items.push(index)
  }
}

const isItemOpen = (sectionId: string, index: number): boolean => {
  return openItems[sectionId]?.includes(index) || false
}

const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    filteredResults.value = []
    showSearchResults.value = false
    return
  }

  const query = searchQuery.value.toLowerCase()
  const results: SearchResult[] = []

  faqSections.forEach(section => {
    section.questions.forEach((question, index) => {
      if (
        question.question.toLowerCase().includes(query) ||
        question.answer.toLowerCase().includes(query)
      ) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          questionIndex: index,
          question: question.question,
          answer: question.answer
        })
      }
    })
  })

  filteredResults.value = results.slice(0, 8) // Limit results
  showSearchResults.value = results.length > 0
}

const selectSearchResult = (result: SearchResult) => {
  // Open the specific FAQ item
  if (!openItems[result.sectionId]) {
    openItems[result.sectionId] = []
  }
  
  if (!openItems[result.sectionId].includes(result.questionIndex)) {
    openItems[result.sectionId].push(result.questionIndex)
  }

  // Scroll to section
  scrollToSection(result.sectionId)
  
  // Close search results and mobile overlays
  showSearchResults.value = false
  mobileSearchOpen.value = false
  mobileMenuOpen.value = false
  searchQuery.value = ''
}

// Scroll spy functionality
const handleScroll = () => {
  const sections = document.querySelectorAll('section[id], div[id]')
  const scrollY = window.scrollY + 100

  for (const section of sections) {
    const sectionTop = (section as HTMLElement).offsetTop
    const sectionHeight = (section as HTMLElement).offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && sectionId) {
      if (sidebarItems.some(item => item.id === sectionId)) {
        activeItem.value = sectionId
      }
    }
  }
}

// Close search results when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    showSearchResults.value = false
  }
}

// Initialize open items state
faqSections.forEach(section => {
  openItems[section.id] = []
})

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

// SEO Meta (for Nuxt 3)
useHead({
  title: 'FAQ - Storipod',
  meta: [
    { name: 'description', content: 'Find answers to common questions about Storipod. Learn about monetization, content creation, and platform features.' },
    { name: 'keywords', content: 'Storipod, FAQ, help, support, monetization, content creation' },
    { property: 'og:title', content: 'Frequently Asked Questions - Storipod' },
    { property: 'og:description', content: 'Find answers to common questions about Storipod platform features and monetization.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FAQ - Storipod' },
    { name: 'twitter:description', content: 'Find answers to common questions about Storipod.' }
  ]
})
</script>

<style scoped>
/* Custom animations */
@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}

.animate-slide-in-left {
  animation: slide-in-left 0.3s ease-out;
}

/* Custom styles */
.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

/* Ensure smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar for sidebar */
aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}

aside::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
  border-radius: 3px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

/* Search results scrollbar */
.max-h-64::-webkit-scrollbar {
  width: 4px;
}

.max-h-64::-webkit-scrollbar-track {
  background: transparent;
}

.max-h-64::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
  border-radius: 2px;
}

.max-h-64::-webkit-scrollbar-thumb:hover {
  background: rgb(107 114 128);
}

/* Focus states for accessibility */
input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}

/* Mobile menu backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Improved hover states */
.group:hover .group-hover\:translate-x-0\.5 {
  transform: translateX(0.125rem);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Smooth accordion animations */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}

/* Enhanced shadow effects */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Search result highlighting */
.search-highlight {
  background-color: rgba(59, 130, 246, 0.2);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

/* Mobile responsive improvements */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
  
  .px-8 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .py-6 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .border-gray-800 {
    border-color: #ffffff;
  }
  
  .text-gray-400 {
    color: #d1d5db;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-colors,
  .transition-transform,
  .animate-slide-down,
  .animate-slide-in-left {
    transition: none;
    animation: none;
  }
  
  .scroll-smooth {
    scroll-behavior: auto;
  }
}

/* Print styles */
@media print {
  .sticky,
  .fixed,
  aside,
  .animate-slide-down,
  .animate-slide-in-left {
    display: none !important;
  }
  
  .lg\:ml-80 {
    margin-left: 0 !important;
  }
  
  .bg-black,
  .bg-gray-900,
  .bg-gray-800 {
    background-color: white !important;
  }
  
  .text-white,
  .text-gray-300,
  .text-gray-400 {
    color: black !important;
  }
  
  .border-gray-800,
  .border-gray-700 {
    border-color: #e5e7eb !important;
  }
}

</style>