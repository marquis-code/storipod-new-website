<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
     <NavigationBar />
    <!-- <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-blue-100 transition-all duration-300" :class="{ 'shadow-lg': scrolled }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2 cursor-pointer group" @click="scrollToSection('home')">
            <img src="@/assets/img/logo.png" class="w-auto h-12" />
          </div>
          
          <div class="hidden md:flex space-x-8">
            <NuxtLink v-for="item in navItems" :key="item.name" 
               @click="scrollToSection(item.id)"
               class="relative text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 group font-medium">
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </NuxtLink>
          </div>
          
          <button 
            @click="openWhatsApp"
            class="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
            Get Free Consultation
          </button>
        </div>
      </div>
    </nav> -->

    <IntroSection />

    <section class="py-16 bg-black backdrop-blur-sm overflow-hidden">
      <div class="flex animate-marquee whitespace-nowrap">
        <div v-for="(type, index) in researchTypes" :key="`first-${index}`" 
             class="mx-4 md:mx-8 text-lg md:text-2xl font-semibold text-white/70 hover:text-cyan-400 transition-colors cursor-pointer">
          {{ type }}
        </div>
        <div v-for="(type, index) in researchTypes" :key="`second-${index}`" 
             class="mx-4 md:mx-8 text-lg md:text-2xl font-semibold text-white/70 hover:text-cyan-400 transition-colors cursor-pointer">
          {{ type }}
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section id="about" class="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-8 slide-in-left">
            More Than Consultants
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-8"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="slide-in-left">
            <div class="prose prose-lg text-gray-700">
              <p class="text-xl leading-relaxed mb-6">
                At Hudia, we are more than consultants; we are your <strong class="text-blue-600">strategic partners in growth</strong>. 
                We understand that modern business challenges are interconnected.
              </p>
              <p class="text-xl leading-relaxed">
                That's why we offer an integrated suite of services—from deep market research and strategic 
                business matching to dynamic PR and operational excellence—all designed to build resilience, 
                unlock new markets, and propel your business forward.
              </p>
            </div>
          </div>
          <div class="slide-in-right">
            <div class="relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Strategic Partnership" 
                   class="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl group-hover:from-blue-600/30 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>


        <!-- Interactive Methodology Section -->
    <section id="methodology" class="py-16 md:py-24 px-4 bg-black text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-20">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-6">Our Methodology</h2>
          <p class="text-lg md:text-xl text-white max-w-3xl mx-auto">
            A proven 4-step process that transforms complex market challenges into clear, actionable strategies.
          </p>
        </div>

         <!-- <div class="w-24 h-1  mx-auto mb-8"></div> -->

        <!-- Interactive Process Steps -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div v-for="(step, index) in methodologies" :key="index"
                 class="group cursor-pointer p-6 rounded-2xl transition-all"
                 :class="currentMethodology === index ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50' : 'bg-slate-800/30 border border-slate-700/50 hover:border-slate-600'"
                 @click="currentMethodology = index">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all"
                     :class="currentMethodology === index ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white' : 'bg-slate-700 text-white'">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="text-lg md:text-xl font-bold transition-colors"
                      :class="currentMethodology === index ? 'text-white' : 'text-white'">
                    {{ step.title }}
                  </h3>
                  <p class="text-white mt-2 text-sm md:text-base">{{ step.description }}</p>
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

    <!-- Services Overview -->
     <AnimatedServices />
    <!-- <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Integrated Expertise</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique business challenges
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.title" 
               class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden service-card"
               :style="{ animationDelay: index * 0.2 + 's' }">
            
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-bl-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
              
              <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {{ service.title }}
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              
              <div class="flex items-center text-blue-600 group-hover:text-cyan-500 transition-colors duration-300">
                <span class="font-medium">Learn More</span>
                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section> -->

    <WhyChooseUs />
    <!-- <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why Choose <span class="handwriting text-blue-600">Hudia?</span>
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(reason, index) in whyChooseUs" :key="reason.title" 
               class="text-center group transform hover:scale-105 transition-all duration-300"
               :style="{ animationDelay: index * 0.15 + 's' }">
            
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-300">
              <component :is="reason.icon" class="w-10 h-10 text-white" />
            </div>
            
            <h3 class="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {{ reason.title }}
            </h3>
            
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section> -->
    <UserStory id="portfolio" />
    <!-- Team Section -->
     <TeamSection />
    <!-- <section id="team" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Strategic Minds Behind <span class="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Hudia</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto">
            Our strength lies in our collective expertise. Meet the seasoned professionals and 
            industry specialists dedicated to crafting your success story.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div v-for="(member, index) in teamMembers" :key="member.name" 
               class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
               :style="{ animationDelay: index * 0.2 + 's' }">
            
            <div class="relative overflow-hidden">
              <img :src="member.image" :alt="member.name" 
                   class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ member.name }}</h3>
              <p class="text-blue-600 font-medium mb-4">{{ member.title }}</p>
              <p class="text-gray-600 leading-relaxed">{{ member.bio }}</p>
            </div>
            
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Testimonial -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="relative">
          <svg class="absolute top-0 left-0 w-16 h-16 text-white/20 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.112-5.472-5.088-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          
          <blockquote class="text-2xl md:text-3xl text-white font-light italic mb-8 leading-relaxed">
            "Hudia's business matching service introduced us to a key distribution partner we had been trying to reach for years. Their market research was impeccably detailed."
          </blockquote>
          
          <div class="flex items-center justify-center space-x-4">
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div class="text-left">
              <p class="text-white font-medium">Client Name</p>
              <p class="text-blue-100">CEO, Agriculture Sector Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ready to <span class="handwriting text-blue-600">Transform</span> Your Business?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a no-obligation discovery call with our team today
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="slide-in-left">
            <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Get Your Free Consultation</h3>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="form-group">
                    <input 
                      v-model="form.name" 
                      type="text" 
                      required
                      placeholder="Your Name"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white">
                  </div>
                  <div class="form-group">
                    <input 
                      v-model="form.email" 
                      type="email" 
                      required
                      placeholder="Your Email"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white">
                  </div>
                </div>
                
                <div class="form-group">
                  <input 
                    v-model="form.phone" 
                    type="tel"
                    placeholder="Your Phone Number"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white">
                </div>
                
                <div class="form-group">
                  <select 
                    v-model="form.service" 
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white">
                    <option value="">Select Service of Interest</option>
                    <option value="market-research">Market Research & Intelligence</option>
                    <option value="business-matching">Business Matching & Development</option>
                    <option value="energy-advisory">Energy Sector Advisory</option>
                    <option value="hr-operations">HR & Operational Excellence</option>
                    <option value="pr-management">PR & Brand Publicity Management</option>
                    <option value="agriculture-logistics">Agriculture & Logistics Consulting</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <textarea 
                    v-model="form.message" 
                    rows="4" 
                    placeholder="Tell us about your business challenge..."
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white resize-none"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-xl font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50">
                  {{ isSubmitting ? 'Sending...' : 'Get Your Free Consultation' }}
                </button>
              </form>
            </div>
          </div>
          
          <div class="slide-in-right">
            <div class="space-y-8">
              <div class="flex items-start space-x-4 group">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-800 mb-2">Email Us</h4>
                  <p class="text-gray-600">info@hudialtd.com</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 group">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-bold text-gray-800 mb-2">WhatsApp</h4>
                  <p class="text-gray-600">+234 706 072 7672</p>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6">
                <h4 class="text-xl font-bold text-gray-800 mb-4">Why Start with a Free Consultation?</h4>
                <ul class="space-y-3">
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-700">No obligation, completely free</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-700">Understand your unique challenges</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-700">Tailored solutions and recommendations</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span class="text-gray-700">Connect with industry experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center space-x-3 mb-6">
                <img src="@/assets/img/logo.png" class="h-20 w-auto" />
            </div>
            <p class="text-white mb-6 leading-relaxed">
              Strategic Growth Partners helping businesses navigate complex challenges and seize opportunities across energy, HR, agriculture, logistics, and beyond.
            </p>
               
              <div class="flex space-x-4 mb-8">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/hudialtd" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </a>
            
            <!-- X (Twitter) -->
            <a href="https://x.com/hudiacon" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            </a>
            
            <!-- Facebook -->
            <a href="https://www.facebook.com/hudia" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>
            
            <!-- Instagram -->
            <a href="https://www.instagram.com/hudiacon" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.23 2.471h7.541c3.174 0 5.756 2.582 5.756 5.756v7.542c0 3.174-2.582 5.756-5.756 5.756H8.23c-3.174 0-5.756-2.582-5.756-5.756V8.227c0-3.174 2.582-5.756 5.756-5.756z"/>
                    <circle cx="12" cy="12" r="3.3"/>
                    <circle cx="17.5" cy="6.5" r="1.2"/>
                </svg>
            </a>
        </div>
          </div>
          
          <div>
            <h4 class="text-xl font-bold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#" @click="scrollToSection('home')" class="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</a></li>
              <li><a href="#" @click="scrollToSection('services')" class="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Services</a></li>
              <li><a href="#" @click="scrollToSection('team')" class="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Our Team</a></li>
              <li><a href="#" @click="scrollToSection('contact')" class="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Contact</a></li>
              <li><a href="#" class="text-white hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" class="text-white hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-xl font-bold mb-6">Contact Info</h4>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-white">info@hudialtd.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                <span class="text-white">+234 706 072 7672</span>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-white">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="text-xl font-bold mb-6">Stay Ahead of the Curve</h4>
            <p class="text-white mb-4">Subscribe to our insights newsletter</p>
            <form @submit.prevent="subscribeNewsletter" class="space-y-4">
              <input 
                v-model="newsletter.email"
                type="email" 
                required
                placeholder="Your email address"
                class="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300">
              <button 
                type="submit" 
                class="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-white">
            © {{ new Date().getFullYear() }} Hudia Strategic Growth Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <div class="fixed bottom-6 right-6 z-50">
      <button 
        @click="openWhatsApp"
        class="group w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
        </svg>
        <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span class="text-xs text-white font-bold animate-pulse">1</span>
        </div>
      </button>
    </div>

    <!-- <HeroSection /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import chief1 from "@/assets/img/chief1.jpeg"
import chief2 from "@/assets/img/chief2.jpeg"
import chief3 from "@/assets/img/chief3.jpeg"

// Define icons as simple SVG components
const SearchIcon = 'svg'
const UsersIcon = 'svg' 
const ZapIcon = 'svg'
const HeartIcon = 'svg'
const MegaphoneIcon = 'svg'
const TruckIcon = 'svg'
const TargetIcon = 'svg'
const AwardIcon = 'svg'
const GlobeIcon = 'svg'
const TrendingUpIcon = 'svg'

const router = useRouter()


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


// Word flipping animation data
const flipWords = ['Uncertainty', 'Confusion', 'Guesswork', 'Assumptions']
const typingWords = ['Powerful Partnerships', 'Strategic Alliances', 'Growth Connections', 'Business Networks']

// Industry filter options
const industries = ref(['All', 'Energy', 'Agriculture', 'Logistics', 'HR', 'Technology'])

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

// Reactive data
const displayText = ref('')

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const newsletter = ref({
  email: ''
})

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Services', id: 'services' },
  { name: 'Our Team', id: 'team' },
  { name: 'Contact Us', id: 'contact' },
  { name: 'Blogs', id: 'blog' }
]

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

// Computed properties
const filteredCaseStudies = computed(() => {
  if (activeIndustry.value === 'All') {
    return caseStudies.value
  }
  return caseStudies.value.filter(study => study.industry === activeIndustry.value)
})


const services = [
  {
    title: 'Market Research & Intelligence',
    description: 'Deep-dive analysis to inform your strategy with comprehensive competitive landscape insights.',
    icon: SearchIcon
  },
  {
    title: 'Business Matching & Development',
    description: 'Forging powerful partnerships for growth through our extensive network connections.',
    icon: UsersIcon
  },
  {
    title: 'Energy Sector Advisory',
    description: 'Navigating the evolving energy landscape with expert guidance and strategic insights.',
    icon: ZapIcon
  },
  {
    title: 'HR & Operational Excellence',
    description: 'Empowering your greatest asset: your people, through strategic HR solutions.',
    icon: HeartIcon
  },
  {
    title: 'PR & Brand Publicity Management',
    description: 'Amplifying your presence, online and offline, with strategic communication.',
    icon: MegaphoneIcon
  },
  {
    title: 'Agriculture & Logistics Consulting',
    description: 'Optimizing your supply chain from source to market with expert guidance.',
    icon: TruckIcon
  }
]

const whyChooseUs = [
  {
    title: 'Holistic Approach',
    description: 'We connect the dots across business functions for a unified strategy.',
    icon: TargetIcon
  },
  {
    title: 'Industry-Specific Expertise',
    description: 'Our consultants are veterans in your field with proven track records.',
    icon: AwardIcon
  },
  {
    title: 'Results-Driven Partnerships',
    description: 'We measure our success by your growth and business outcomes.',
    icon: TrendingUpIcon
  },
  {
    title: 'Global Network, Local Insight',
    description: 'We leverage a vast network to find your perfect business match.',
    icon: GlobeIcon
  }
]

const teamMembers = [
  {
    name: 'DuroRotimi O.',
    title: 'Business Development Expert',
    bio: 'Business Development Expert with over 10 years of experience in African markets.',
    image: chief1
  },
  {
    name: 'Siraj A.',
    title: 'HR Specialist',
    bio: 'HR Specialist focused on workforce optimization and talent management.',
    image: chief2
  },
  {
    name: 'Samuel D.',
    title: 'Technology Consultant',
    bio: 'Technology Consultant with expertise in implementing innovative solutions.',
    image: chief3
  }
]


interface MatchingStep {
  title: string
  shortDesc: string
  detailedDesc: string
}

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

// Typewriter effect
const typewriterText = 'HUDIA'
const typewriterSpeed = ref(200)

// Methods
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (elementId: string) => {
  if(elementId === "blog"){
    router.push('/blog')
  } else {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  }
}

const openWhatsApp = () => {
  const message = encodeURIComponent('Hello! I\'m interested in learning more about Hudia\'s consulting services.')
  window.open(`https://wa.me/+2347060727672?text=${message}`, '_blank')
}

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Create message for WhatsApp
    const message = encodeURIComponent(`
New consultation request:
Name: ${form.value.name}
Email: ${form.value.email}
Phone: ${form.value.phone}
Service: ${form.value.service}
Message: ${form.value.message}
    `)
    
    // Send to WhatsApp
    window.open(`https://wa.me/+2347060727672?text=${message}`, '_blank')
    
    // Also prepare email
    const emailSubject = encodeURIComponent('New Consultation Request - Hudia Website')
    const emailBody = encodeURIComponent(`
New consultation request received:

Name: ${form.value.name}
Email: ${form.value.email}
Phone: ${form.value.phone}
Service of Interest: ${form.value.service}
Message: ${form.value.message}

Please follow up with this potential client.
    `)
    
    // Open email client
    setTimeout(() => {
      window.open(`mailto:info@hudialtd.com?subject=${emailSubject}&body=${emailBody}`, '_self')
    }, 1000)
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    alert('Thank you! Your request has been submitted. We will contact you soon.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error submitting your request. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const subscribeNewsletter = () => {
  if (newsletter.value.email) {
    const message = encodeURIComponent(`I would like to subscribe to Hudia's newsletter. Email: ${newsletter.value.email}`)
    window.open(`https://wa.me/+2347060727672?text=${message}`, '_blank')
    newsletter.value.email = ''
    alert('Thank you for subscribing to our newsletter!')
  }
}

const startTypewriter = () => {
  let index = 0
  const interval = setInterval(() => {
    displayText.value = typewriterText.substring(0, index + 1)
    index++
    if (index >= typewriterText.length) {
      clearInterval(interval)
    }
  }, typewriterSpeed.value)
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  startTypewriter()
  
  // Add intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  })
  
  // Observe all animated elements
  setTimeout(() => {
    const elements = document.querySelectorAll('.slide-up, .slide-in-left, .slide-in-right, .service-card')
    elements.forEach(el => observer.observe(el))
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

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

// Auto-rotate methodology
const startMethodologyRotation = () => {
  setInterval(() => {
    currentMethodology.value = (currentMethodology.value + 1) % methodologies.value.length
  }, 5000)
}

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


// Auto-rotate matching process
const startMatchingRotation = () => {
  setInterval(() => {
    currentMatching.value = (currentMatching.value + 1) % matchingSteps.value.length
  }, 4000)
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

</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(1deg); }
  66% { transform: translateY(-5px) rotate(-1deg); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marqueeSlow {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes flipWord {
  0%, 20% { transform: rotateX(0deg); opacity: 1; }
  50% { transform: rotateX(90deg); opacity: 0; }
  51% { transform: rotateX(-90deg); }
  100% { transform: rotateX(0deg); opacity: 1; }
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 3D Card Styles */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.card-face {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Floating shapes animation */
.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  border-radius: 50%;
  animation: float infinite ease-in-out;
  opacity: 0.1;
}

/* Text animations */
.slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out forwards;
}

.slide-up-delay-1 {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out 0.2s forwards;
}

.slide-up-delay-2 {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease-out 0.4s forwards;
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(30px);
  animation: slideInRight 0.8s ease-out forwards;
}

.slide-in-bottom {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInBottom 0.6s ease-out forwards;
}

.service-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 0.6s ease-out forwards;
}

.bounce {
  animation: bounce 2s infinite;
}

/* Typewriter effects */
.typewriter-large {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 3s steps(40, end);
}

.typing-effect {
  position: relative;
}

.typing-effect::after {
  content: '|';
  animation: blink 1s infinite;
  margin-left: 2px;
}

/* Word flipping effect */
.flip-word {
  display: inline-block;
  animation: flipWord 2s infinite;
  transform-origin: center center;
}

/* Handwriting effect */
.handwriting {
  font-family: 'Brush Script MT', cursive;
  position: relative;
}

.handwriting::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #3b82f6, #06b6d4);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  animation: drawLine 2s ease-out 0.5s forwards;
}

@keyframes drawLine {
  to {
    transform: scaleX(1);
  }
}

/* Marquee animations */
.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-marquee-slow {
  animation: marqueeSlow 30s linear infinite;
}

.marquee-container {
  width: 100%;
}

.marquee-stats {
  width: 200%;
}

/* Typewriter navigation effect */
.typewriter {
  display: inline-block;
  overflow: hidden;
}

/* Form animations */
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:rotate-6 {
  transform: rotate(6deg);
}

.group:hover .group-hover\:rotate-2 {
  transform: rotate(2deg);
}

/* Card 3D hover effects */
.card-3d:hover {
  transform: rotateY(180deg);
}

/* Counter animation */
.counter {
  transition: all 0.5s ease-in-out;
}

/* Advanced button effects */
.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

/* Carousel transitions */
.methodology-carousel {
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.matching-carousel {
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Pulse animations for stats */
@keyframes statsPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 1;
  }
  50% { 
    transform: scale(1.05);
    opacity: 0.8;
  }
}

.stats-pulse {
  animation: statsPulse 2s ease-in-out infinite;
}

/* Gradient text animation */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background: linear-gradient(-45deg, #3b82f6, #06b6d4, #8b5cf6, #06b6d4);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .handwriting {
    font-size: 2rem;
  }
  
  .shape {
    width: 15px;
    height: 15px;
  }
  
  .typewriter-large {
    font-size: 2.5rem;
  }
  
  .flip-word {
    font-size: 2rem;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #06b6d4);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #0891b2);
}

/* Loading states */
.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* Enhanced button animations */
.btn-enhanced {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-enhanced::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-enhanced:hover::before {
  left: 100%;
}

/* Particle effect background */
.particles-bg {
  position: relative;
  overflow: hidden;
}

.particles-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: particleMove 20s linear infinite;
}

@keyframes particleMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Advanced text effects */
.text-shadow-glow {
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.text-gradient-hover:hover {
  background: linear-gradient(45deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}


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

</style>