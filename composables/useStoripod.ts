import type { FeedItem, Feature, CreatorTool, BusinessTool, FAQ } from '~/types'

export const useStoripod = () => {
  // Reactive state
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Hero feed items
  const feedItems = ref<FeedItem[]>([
    {
      id: 1,
      title: "Why attention > clicks",
      description: "A short read on designing for meaningful reading time...",
      author: "Sarah Chen",
      readTime: "3 min read",
      category: "Design"
    },
    {
      id: 2,
      title: "Crypto & Policy Weekly",
      description: "This week's stablecoin frameworks and market notes.",
      author: "Alex Rivera",
      readTime: "8 min read",
      category: "Crypto"
    },
    {
      id: 3,
      title: "From your highlights",
      description: "Dive back into saved threads across your topics.",
      author: "System",
      readTime: "2 min read",
      category: "Personal"
    }
  ])

  // Features data
  const features = ref<Feature[]>([
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
  ])

  // Creator tools
  const creatorTools = ref<CreatorTool[]>([
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
  ])

  // Business tools
  const businessTools = ref<BusinessTool[]>([
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
  ])

  // FAQ data
  const faqs = ref<FAQ[]>([
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
    },
    {
      question: "What analytics are available?",
      answer: "Track views, engagement, subscriber growth, revenue, and more with detailed breakdowns by content and audience segments."
    },
    {
      question: "How does the audio feature work?",
      answer: "Our AI-powered text-to-speech converts articles to natural-sounding audio. Download for offline listening or stream directly in the app."
    }
  ])

  // Statistics
  const stats = ref({
    storiesSaved: '100K+',
    avgSession: '12 min',
    payoutSpeed: '1-click'
  })

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

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Analytics tracking would go here
    console.log('Track event:', eventName, properties)
  }

  const subscribeToNewsletter = async (email: string) => {
    isLoading.value = true
    error.value = null
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      trackEvent('newsletter_subscribe', { email })
      return { success: true }
    } catch (err) {
      error.value = 'Failed to subscribe. Please try again.'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const downloadApp = (platform: 'ios' | 'android') => {
    trackEvent('app_download_click', { platform })
    
    // In a real app, these would be actual store URLs
    const urls = {
      ios: 'https://apps.apple.com/app/storipod',
      android: 'https://play.google.com/store/apps/details?id=com.storipod.app'
    }
    
    window.open(urls[platform], '_blank')
  }

  const shareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Storipod - Read like social. Earn like a creator.',
          text: 'Check out Storipod - the new way to read and support creators!',
          url: window.location.href
        })
        trackEvent('app_share', { method: 'native' })
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(window.location.href)
      trackEvent('app_share', { method: 'clipboard' })
    }
  }

  return {
    // State
    isLoading: readonly(isLoading),
    error: readonly(error),
    feedItems: readonly(feedItems),
    features: readonly(features),
    creatorTools: readonly(creatorTools),
    businessTools: readonly(businessTools),
    faqs: readonly(faqs),
    stats: readonly(stats),
    
    // Methods
    scrollToSection,
    trackEvent,
    subscribeToNewsletter,
    downloadApp,
    shareApp
  }
}