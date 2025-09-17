<template>
  <section class="max-w-7xl mx-auto px-5 py-16 md:py-24">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Left Content - Order 1 on mobile, Order 1 on desktop -->
      <div class="order-1 md:order-1 space-y-6 flex flex-col">        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Africa's, <br>largest creator economy platform.
        </h1>
        
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
          crypto-native creator ecosystem powered by stablecoin micro-transactions where over 100,000 users publish, discover, and monetize stories.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="#download" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-storipod-primary text-white hover:bg-storipod-primary transition-all hover:shadow-lg hover:-translate-y-0.5">
            Download app
          </NuxtLink>
          <NuxtLink to="#creators" class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            Learn More
          </NuxtLink>
        </div>
        
        <div class="flex flex-wrap gap-6 pt-4">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-bold">100K+</span>
            <span class="text-gray-600 dark:text-gray-400">stories saved</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-2xl font-bold">1-click</span>
            <span class="text-gray-600 dark:text-gray-400">payouts</span>
          </div>
        </div>
        
        <!-- Merged image beneath text - Only shows on desktop -->
        <div class="mt-6 hidden md:block">
          <img 
            src="@/assets/images/merged-hero.png"
            alt="App demonstration"
            class="w-full h-[570px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Right GIF - Order 2 on mobile, Order 2 on desktop -->
      <div class="order-2 md:order-2 relative flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <img 
            src="/mocks.gif" 
            class="w-full max-w-md h-full md:h-[480px] lg:h-[950px] object-cover rounded-lg shadow-lg" 
            alt="App animation"
          />
        </div>
      </div>
      
      <!-- Merged image for mobile only - Order 3 on mobile -->
      <div class="order-3 md:hidden">
        <img 
          src="@/assets/images/merged-hero.png"
          alt="App demonstration"
          class="w-full h-auto object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>