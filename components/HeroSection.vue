<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    
    <section class="py-16 bg-black/30 backdrop-blur-sm overflow-hidden">
      <div class="flex animate-marquee whitespace-nowrap">
        <div v-for="(type, index) in researchTypes" :key="`first-${index}`" 
             class="mx-4 md:mx-8 text-lg md:text-2xl font-semibold text-white/70 hover:text-cyan-400 transition-colors cursor-pointer">
          {{ type }}
        </div>
        <!-- Duplicate for seamless loop -->
        <div v-for="(type, index) in researchTypes" :key="`second-${index}`" 
             class="mx-4 md:mx-8 text-lg md:text-2xl font-semibold text-white/70 hover:text-cyan-400 transition-colors cursor-pointer">
          {{ type }}
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 md:py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Our Services</h2>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth through strategic insights and powerful connections.
          </p>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Market Research Card -->
          <div class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-2xl mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Market Research</h3>
              <p class="text-gray-300 text-base md:text-lg mb-6">
                Deep market insights through comprehensive analysis, competitive intelligence, and strategic recommendations.
              </p>
              <button class="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Learn More →
              </button>
            </div>
          </div>

          <!-- Business Matching Card -->
          <div class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Business Matching</h3>
              <p class="text-gray-300 text-base md:text-lg mb-6">
                Strategic partnerships through our curated network of distributors, suppliers, and potential collaborators.
              </p>
              <button class="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                Explore Partnerships →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Methodology Section -->
    <section id="methodology" class="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900/50 to-black/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Our Methodology</h2>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A proven 4-step process that transforms complex market challenges into clear, actionable strategies.
          </p>
        </div>

        <!-- Interactive Process Steps -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div v-for="(step, index) in methodologies" :key="index"
                 class="group cursor-pointer p-6 rounded-2xl transition-all"
                 :class="currentMethodology === index ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50' : 'bg-slate-800/30 border border-slate-700/50 hover:border-slate-600'"
                 @click="currentMethodology = index">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all"
                     :class="currentMethodology === index ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white' : 'bg-slate-700 text-gray-300'">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-bold transition-colors"
                      :class="currentMethodology === index ? 'text-white' : 'text-gray-300'">
                    {{ step.title }}
                  </h3>
                  <p class="text-gray-400 mt-2 text-sm md:text-base">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-64 md:h-96 rounded-3xl overflow-hidden">
            <img :src="methodologies[currentMethodology].image" 
                 :alt="methodologies[currentMethodology].title"
                 class="w-full h-full object-cover transition-all duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
              <h4 class="text-xl md:text-2xl font-bold">{{ methodologies[currentMethodology].title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Matching Process -->
    <section class="py-16 md:py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Partnership Process</h2>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            From initial profiling to successful partnerships - we guide you through every step.
          </p>
        </div>

        <!-- Matching Types Carousel -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="(type, index) in matchingTypes" :key="index"
               class="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-400/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">{{ type.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ type.description }}</p>
            <ul class="space-y-1">
              <li v-for="feature in type.features" :key="feature" class="text-xs text-gray-400 flex items-center">
                <div class="w-1 h-1 bg-emerald-400 rounded-full mr-2"></div>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Process Steps -->
        <div class="relative">
          <!-- Connection Line -->
          <div class="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 hidden lg:block"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(step, index) in matchingSteps" :key="index"
                 class="relative text-center group cursor-pointer"
                 @click="currentMatching = index">
              <!-- Step Circle -->
              <div class="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-6 transition-all"
                   :class="currentMatching === index ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white scale-110' : 'bg-slate-700 text-gray-300 group-hover:scale-105'">
                {{ index + 1 }}
                <div v-if="currentMatching === index" class="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-3">{{ step.title }}</h3>
              <p class="text-gray-300 text-sm mb-4">{{ step.shortDesc }}</p>
              
              <!-- Expanded Description -->
              <div v-if="currentMatching === index" 
                   class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30">
                <p class="text-gray-300 text-sm leading-relaxed">{{ step.detailedDesc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section id="cases" class="py-16 md:py-24 px-4 bg-gradient-to-b from-black/50 to-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Success Stories</h2>
          <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real partnerships. See how we've transformed businesses across industries.
          </p>
        </div>

        <!-- Industry Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button v-for="industry in industries" :key="industry"
                  @click="activeIndustry = industry"
                  class="px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base"
                  :class="activeIndustry === industry ? 
                    'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' : 
                    'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'">
            {{ industry }}
          </button>
        </div>

        <!-- Case Studies Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="study in filteredCaseStudies" :key="study.id"
               class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-emerald-400/50 transition-all hover:shadow-xl hover:shadow-emerald-500/10 group">
            
            <!-- Industry Badge -->
            <div class="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              {{ study.industry }}
            </div>
            
            <h3 class="text-xl md:text-2xl font-bold text-white mb-4">{{ study.client }}</h3>
            
            <!-- Challenge -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-emerald-400 mb-2">Challenge</h4>
              <p class="text-gray-300 text-sm leading-relaxed">{{ study.challenge }}</p>
            </div>
            
            <!-- Solution -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-purple-400 mb-2">Solution</h4>
              <p class="text-gray-300 text-sm leading-relaxed">{{ study.solution }}</p>
            </div>
            
            <!-- Results -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold text-cyan-400 mb-3">Results</h4>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">{{ study.result }}</p>
              
              <!-- Stats -->
              <div class="grid grid-cols-2 gap-4">
                <div v-for="stat in study.stats" :key="stat.label" 
                     class="text-center p-4 bg-black/30 rounded-xl">
                  <div class="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    {{ stat.animatedValue }}{{ stat.suffix }}
                  </div>
                  <div class="text-xs text-gray-400 mt-1">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats Marquee -->
    <section class="py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 overflow-hidden">
      <div class="flex animate-marquee-slow whitespace-nowrap">
        <div v-for="(stat, index) in impactStats" :key="`impact-first-${index}`" 
             class="mx-8 md:mx-16 text-center">
          <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {{ stat.value }}
          </div>
          <div class="text-gray-300 font-semibold mt-2 text-sm md:text-base">{{ stat.label }}</div>
        </div>
        <!-- Duplicate for seamless loop -->
        <div v-for="(stat, index) in impactStats" :key="`impact-second-${index}`" 
             class="mx-8 md:mx-16 text-center">
          <div class="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {{ stat.value }}
          </div>
          <div class="text-gray-300 font-semibold mt-2 text-sm md:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900/80 to-black/80">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Let's Start Your Transformation</h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to turn market challenges into growth opportunities? Get in touch with our experts.
          </p>
        </div>

        <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-700/50">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-semibold mb-2">Full Name</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label class="block text-white font-semibold mb-2">Email Address</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-white font-semibold mb-2">Company</label>
                <input 
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your Company Ltd."
                />
              </div>
              <div>
                <label class="block text-white font-semibold mb-2">Service Interest</label>
                <select 
                  v-model="form.service"
                  class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="market-research">Market Research</option>
                  <option value="business-matching">Business Matching</option>
                  <option value="both">Both Services</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
            </div>
            
            <div>
              <label class="block text-white font-semibold mb-2">Project Details</label>
              <textarea 
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, challenges, or goals..."
              ></textarea>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="relative z-10" v-if="!isSubmitting">Send Message</span>
                <span class="relative z-10 flex items-center" v-else>
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button 
                type="button"
                class="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-black transition-all hover:shadow-lg hover:shadow-emerald-400/25"
              >
                Schedule Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900/30 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-8">Ready to Transform Your Business?</h2>
        <p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join the growing network of successful businesses who've accelerated their growth with our strategic insights and powerful partnerships.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button class="group relative px-8 md:px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
            <span class="relative z-10">Start Your Journey</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button class="px-8 md:px-12 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-bold text-lg hover:bg-emerald-400 hover:text-black transition-all hover:shadow-lg hover:shadow-emerald-400/25">
            Download Brochure
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-cyan-400">150+</div>
            <div class="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-purple-400">95%</div>
            <div class="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-emerald-400">50+</div>
            <div class="text-gray-400 text-sm">Industries</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold text-pink-400">25+</div>
            <div class="text-gray-400 text-sm">Countries</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
      <div class="max-w-6xl mx-auto">
        <div class="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl p-8 md:p-12 border border-cyan-400/30 backdrop-blur-sm">
          <div class="text-center max-w-3xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">Stay Ahead of Market Trends</h3>
            <p class="text-gray-300 mb-8 text-lg">
              Get exclusive insights, market intelligence reports, and partnership opportunities delivered to your inbox.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                v-model="newsletterEmail"
                type="email" 
                placeholder="Enter your email"
                class="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-full text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <button 
                @click="subscribeNewsletter"
                :disabled="isSubscribing"
                class="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50"
              >
                <span v-if="!isSubscribing">Subscribe</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              </button>
            </div>
            
            <p class="text-xs text-gray-400 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 px-4 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <div class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              MarketForce Pro
            </div>
            <p class="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming businesses through strategic market research and powerful partnership connections. Your success is our mission.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.172 1.416-.896 2.535-2.174 3.35-.642.408-1.392.61-2.25.61-.858 0-1.608-.202-2.25-.61-1.278-.815-2.002-1.934-2.174-3.35-.086-.708.054-1.407.42-2.094.732-1.371 2.234-2.266 3.75-2.266s3.018.895 3.75 2.266c.366.687.506 1.386.42 2.094z"/></svg>
              </a>
            </div>
          </div>
          
          <!-- Services -->
          <div>
            <h4 class="text-white font-bold mb-4">Services</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Market Research</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Business Matching</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Strategic Consulting</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Partnership Development</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Investment Connections</a></li>
            </ul>
          </div>
          
          <!-- Company -->
          <div>
            <h4 class="text-white font-bold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Footer -->
        <div class="border-t border-slate-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 MarketForce Pro. All rights reserved. | Empowering Business Growth Through Strategic Intelligence
            </div>
            <div class="flex space-x-6 text-sm text-gray-500">
              <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Success/Error Messages -->
    <div v-if="showMessage" 
         class="fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all"
         :class="messageType === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'">
      <div class="flex items-center space-x-2">
        <svg v-if="messageType === 'success'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <span>{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue'

// Define types
interface Methodology {
  title: string
  description: string
  image: string
}

interface MatchingStep {
  title: string
  shortDesc: string
  detailedDesc: string
}

interface MatchingType {
  title: string
  description: string
  icon: string
  features: string[]
}

interface CaseStudy {
  id: number
  industry: string
  client: string
  challenge: string
  solution: string
  result: string
  stats: Array<{
    label: string
    value: number
    suffix: string
    animatedValue: number
  }>
}

interface ImpactStat {
  value: string
  label: string
}

interface ContactForm {
  name: string
  email: string
  company: string
  service: string
  message: string
}

// Reactive data
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const isSubmitting = ref(false)
const isSubscribing = ref(false)
const currentMethodology = ref(0)
const currentMatching = ref(0)
const activeIndustry = ref('All')
const currentWord = ref('')
const typingText = ref('')
const newsletterEmail = ref('')
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

// Form data
const form = ref<ContactForm>({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})

// Word flipping animation data
const flipWords = ['Uncertainty', 'Confusion', 'Guesswork', 'Assumptions']
const typingWords = ['Powerful Partnerships', 'Strategic Alliances', 'Growth Connections', 'Business Networks']

// Methodology data
const methodologies = ref<Methodology[]>([
  {
    title: 'Define & Scoping',
    description: 'We collaborate with you to pinpoint the key questions and establish clear research objectives that align with your strategic goals.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Data Collection',
    description: 'Utilizing comprehensive primary sources (surveys, interviews) and secondary sources (databases, industry reports) for complete market intelligence.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Analysis & Synthesis',
    description: 'Our expert analysts identify patterns, opportunities, and threats using advanced analytical frameworks and industry-leading methodologies.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Actionable Reporting',
    description: 'We present findings in a clear, strategic framework tailored for executives, enabling confident decision-making and strategic planning.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
])

// Research types for marquee
const researchTypes = ref([
  'Competitive Intelligence',
  'Customer Sentiment Analysis', 
  'Market Sizing & Forecasting',
  'Product Launch Feasibility',
  'Regulatory Impact Analysis',
  'Supply Chain Mapping',
  'Investment Analysis',
  'Risk Assessment',
  'Market Entry Strategy',
  'Consumer Behavior Studies'
])

// Business matching process steps
const matchingSteps = ref<MatchingStep[]>([
  {
    title: 'Profile',
    shortDesc: 'Deep understanding of your goals',
    detailedDesc: 'We develop a comprehensive understanding of your business goals, capabilities, market position, and ideal partner profile through detailed consultations and strategic analysis.'
  },
  {
    title: 'Identify', 
    shortDesc: 'Curated partner shortlists',
    detailedDesc: 'We leverage our proprietary network and advanced research tools to create a carefully curated shortlist of high-potential matches that align with your specific requirements.'
  },
  {
    title: 'Introduce',
    shortDesc: 'Professional facilitated connections',
    detailedDesc: 'We facilitate professional introductions with comprehensive context for both parties, ensuring productive first meetings and establishing strong foundations for partnerships.'
  },
  {
    title: 'Support',
    shortDesc: 'Ongoing partnership guidance',
    detailedDesc: 'We provide continuous support through initial meetings and negotiations, helping both parties build sustainable, mutually beneficial business relationships.'
  }
])

// Matching types carousel data
const matchingTypes = ref<MatchingType[]>([
  {
    title: 'Distribution & Sales',
    description: 'Find new channels to expand your market reach',
    icon: 'TruckIcon',
    features: [
      'Regional distribution partners',
      'International sales networks', 
      'E-commerce partnerships',
      'Retail channel access'
    ]
  },
  {
    title: 'Strategic Alliances',
    description: 'Collaborate on technology and innovative projects',
    icon: 'UsersIcon',
    features: [
      'Technology partnerships',
      'Joint venture opportunities',
      'Research collaborations',
      'Innovation ecosystems'
    ]
  },
  {
    title: 'Sourcing & Supply',
    description: 'Identify reliable suppliers and optimize costs',
    icon: 'SearchIcon',
    features: [
      'Qualified suppliers',
      'Cost optimization',
      'Quality assurance',
      'Supply chain resilience'
    ]
  },
  {
    title: 'Investment & Acquisition',
    description: 'Connect with investors and acquisition targets',
    icon: 'TrendingUpIcon',
    features: [
      'Angel investors',
      'Venture capital firms',
      'Strategic acquirers',
      'Growth capital'
    ]
  }
])

// Case studies data
const caseStudies = ref<CaseStudy[]>([
  {
    id: 1,
    industry: 'Agriculture',
    client: 'Mid-sized Agro-processing Company',
    challenge: 'Needed to find international buyers for a new sustainable product line and expand into European markets.',
    solution: 'Conducted targeted global market research to identify high-potential regions and executed a comprehensive business matching campaign with qualified distributors.',
    result: 'Secured contracts with 3 major distributors in Europe within 8 months, increasing export revenue by 45% and establishing long-term market presence.',
    stats: [
      { label: 'Revenue Increase', value: 45, suffix: '%', animatedValue: 0 },
      { label: 'New Markets', value: 8, suffix: '', animatedValue: 0 }
    ]
  },
  {
    id: 2,
    industry: 'Energy', 
    client: 'Renewable Energy Tech Startup',
    challenge: 'Lack of visibility and credibility to attract investors and establish market presence in the competitive renewable energy sector.',
    solution: 'Full PR and brand management program, including strategic media outreach, award submissions, investor pitch coaching, and thought leadership development.',
    result: 'Featured in 5+ major industry publications, secured meetings with 3 target venture capital firms, and successfully closed a Series A funding round.',
    stats: [
      { label: 'Media Features', value: 5, suffix: '+', animatedValue: 0 },
      { label: 'VC Meetings', value: 3, suffix: '', animatedValue: 0 }
    ]
  },
  {
    id: 3,
    industry: 'Logistics',
    client: 'National Logistics Provider', 
    challenge: 'Inefficient HR processes leading to high driver turnover rates and increasing operational costs affecting service delivery.',
    solution: 'Comprehensive HR operational review leading to a redesigned recruitment process and new retention-focused incentive programs with performance metrics.',
    result: 'Reduced driver turnover by 30% in the first year and decreased recruitment costs by 22%, improving service quality and operational efficiency.',
    stats: [
      { label: 'Turnover Reduction', value: 30, suffix: '%', animatedValue: 0 },
      { label: 'Cost Savings', value: 22, suffix: '%', animatedValue: 0 }
    ]
  }
])

// Industry filter options
const industries = ref(['All', 'Energy', 'Agriculture', 'Logistics', 'HR', 'Technology'])

// Impact statistics for marquee
const impactStats = ref<ImpactStat[]>([
  { value: '150+', label: 'Successful Projects' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Industries Served' },
  { value: '25+', label: 'Countries Reached' },
  { value: '$2.5B+', label: 'Value Generated' },
  { value: '98%', label: 'Partnership Success Rate' }
])

// Computed properties
const filteredCaseStudies = computed(() => {
  if (activeIndustry.value === 'All') {
    return caseStudies.value
  }
  return caseStudies.value.filter(study => study.industry === activeIndustry.value)
})

// Animation functions
const startWordFlipping = () => {
  let currentIndex = 0
  setInterval(() => {
    currentWord.value = flipWords[currentIndex]
    currentIndex = (currentIndex + 1) % flipWords.length
  }, 2000)
}

const startTypingAnimation = () => {
  let currentIndex = 0
  let currentText = ''
  let isDeleting = false
  
  const type = () => {
    const fullText = typingWords[currentIndex]
    
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1)
    } else {
      currentText = fullText.substring(0, currentText.length + 1)
    }
    
    typingText.value = currentText
    
    let typeSpeed = isDeleting ? 50 : 100
    
    if (!isDeleting && currentText === fullText) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && currentText === '') {
      isDeleting = false
      currentIndex = (currentIndex + 1) % typingWords.length
      typeSpeed = 500
    }
    
    setTimeout(type, typeSpeed)
  }
  
  type()
}

const animateStats = () => {
  caseStudies.value.forEach(study => {
    study.stats.forEach(stat => {
      let current = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          stat.animatedValue = stat.value
          clearInterval(timer)
        } else {
          stat.animatedValue = Math.floor(current)
        }
      }, 30)
    })
  })
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Auto-rotate methodology
const startMethodologyRotation = () => {
  setInterval(() => {
    currentMethodology.value = (currentMethodology.value + 1) % methodologies.value.length
  }, 5000)
}

// Auto-rotate matching process
const startMatchingRotation = () => {
  setInterval(() => {
    currentMatching.value = (currentMatching.value + 1) % matchingSteps.value.length
  }, 4000)
}

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    }
    
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success')
  } catch (error) {
    showNotification('Failed to send message. Please try again.', 'error')
  } finally {
    isSubmitting.value = false
  }
}

// Newsletter subscription
const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    newsletterEmail.value = ''
    showNotification('Successfully subscribed to newsletter!', 'success')
  } catch (error) {
    showNotification('Failed to subscribe. Please try again.', 'error')
  } finally {
    isSubscribing.value = false
  }
}

// Show notification
const showNotification = (msg: string, type: 'success' | 'error') => {
  message.value = msg
  messageType.value = type
  showMessage.value = true
  
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

// Lifecycle
onMounted(() => {
  startWordFlipping()
  startTypingAnimation()
  startMethodologyRotation()
  startMatchingRotation()
  
  // Set initial word
  currentWord.value = flipWords[0]
  
  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
  
  // Animate stats after a delay
  setTimeout(animateStats, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// SEO Meta
useHead({
  title: 'MarketForce Pro - Transform Market Research & Business Partnerships',
  meta: [
    { name: 'description', content: 'Leading market research and business matching services. Transform uncertainty into powerful partnerships and strategic growth opportunities.' },
    { name: 'keywords', content: 'market research, business matching, strategic partnerships, competitive intelligence, business growth' },
    { property: 'og:title', content: 'MarketForce Pro - Strategic Business Intelligence' },
    { property: 'og:description', content: 'Professional market research and business matching services for accelerated growth.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

@keyframes marquee-slow {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee-slow {
  animation: marquee-slow 45s linear infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1e293b;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #7c3aed);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient text animations */
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

/* Pulse animation variations */
@keyframes pulse-soft {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.4; }
}

.animate-pulse-soft {
  animation: pulse-soft 3s ease-in-out infinite;
}

/* Floating animation for background elements */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(2deg); }
  66% { transform: translateY(10px) rotate(-2deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Enhanced backdrop blur */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Custom border gradients */
.border-gradient {
  border-image: linear-gradient(45deg, #06b6d4, #8b5cf6, #10b981) 1;
}

/* Loading spinner enhancement */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

/* Enhanced shadow effects */
.shadow-glow-cyan {
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

.shadow-glow-purple {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.shadow-glow-emerald {
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .text-6xl { font-size: 3rem; line-height: 1; }
  .text-8xl { font-size: 4rem; line-height: 1; }
  .text-5xl { font-size: 2.5rem; line-height: 1.2; }
  .text-4xl { font-size: 2rem; line-height: 1.2; }
  .text-3xl { font-size: 1.75rem; line-height: 1.3; }
}

@media (max-width: 640px) {
  .text-6xl { font-size: 2.5rem; line-height: 1.1; }
  .text-8xl { font-size: 3rem; line-height: 1.1; }
  .text-5xl { font-size: 2rem; line-height: 1.2; }
  .text-4xl { font-size: 1.75rem; line-height: 1.3; }
  .text-3xl { font-size: 1.5rem; line-height: 1.3; }
  
  /* Mobile padding adjustments */
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .py-16 { padding-top: 3rem; padding-bottom: 3rem; }
  .py-24 { padding-top: 4rem; padding-bottom: 4rem; }
}

/* Form focus states */
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

/* Button hover animations */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

/* Gradient animations */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Card hover effects */
.group:hover {
  transform: translateY(-8px);
}

/* Mobile menu animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu {
  animation: slideDown 0.3s ease-out;
}

/* Success/Error message animations */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

.message-enter-active {
  animation: slideInRight 0.3s ease-out;
}

.message-leave-active {
  animation: slideOutRight 0.3s ease-in;
}

/* Loading states */
.loading {
  position: relative;
  overflow: hidden;
}

.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Intersection observer fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Enhanced text selection */
::selection {
  background: rgba(6, 182, 212, 0.3);
  color: white;
}

::-moz-selection {
  background: rgba(6, 182, 212, 0.3);
  color: white;
}

/* Print styles */
@media print {
  * {
    background: white !important;
    color: black !important;
  }
  
  .no-print {
    display: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .text-gray-300 { color: #e5e7eb; }
  .text-gray-400 { color: #d1d5db; }
  .border-slate-700 { border-color: #64748b; }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-pulse, .animate-bounce, .animate-spin {
    animation: none !important;
  }
}

/* Focus visible for better accessibility */
button:focus-visible, 
a:focus-visible, 
input:focus-visible, 
textarea:focus-visible, 
select:focus-visible {
  outline: 2px solid #06b6d4;
  outline-offset: 2px;
}

/* Skip link for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #06b6d4;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 6px;
}
</style>