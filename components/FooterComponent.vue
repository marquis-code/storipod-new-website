<template>
  <section class="z-10 lg:pt-0 pb-20">
    <!-- Desktop Footer -->
    <section id="footer-desktop" class="relative z-10 hidden bg-black lg:block">
      <footer class="pb-8 text-white bg-black">
        <div class="container px-8 pt-12 mx-auto lg:px-12 xl:px-16">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 text-center lg:text-left">
            <!-- Downloads Column -->
            <div class="space-y-4">
              <p class="text-lg font-semibold text-white">Downloads</p>
              <ul class="space-y-3 text-sm">
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://apps.apple.com/ng/app/storipod/id6463716901">
                    iOS App
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white"
                    href="https://play.google.com/store/apps/details?id=com.app.storipod_app">
                    Android App
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://storipod.app/#reserve-username">
                    Reserve Username
                  </a>
                </li>
              </ul>
            </div>

            <!-- Policies Column -->
            <div class="space-y-4">
              <p class="text-lg font-semibold text-white">Policies</p>
              <ul class="space-y-3 text-sm">
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/rules">
                    End User Agreement
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/terms">
                    Terms of use
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/privacy">
                    Privacy Policy
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/originals-policy">
                    Storipod Originals Policy
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/monetization-eligibility">
                    Monetization & Creators Eligibility
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <!-- Contact Column -->
            <div class="space-y-4">
              <p class="text-lg font-semibold text-white">Contact</p>
              <ul class="space-y-3 text-sm">
                <li>
                  <a class="text-gray-400 transition hover:text-white" target="_blank" href="https://storipod.framer.website/">
                    About Us
                  </a>
                </li>
                <li>
                  <nuxt-link class="text-gray-400 transition hover:text-white" to="/faqs">
                    FAQ
                  </nuxt-link>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://www.instagram.com/storipodapp/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://x.com/storipod_app">
                    Twitter
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://www.facebook.com/storipod/">
                    Facebook
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="https://www.linkedin.com/company/stori-pod/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a class="text-gray-400 transition hover:text-white" href="mailto:admin@storipod.com">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <!-- Brand Column -->
            <div class="flex flex-col items-center lg:items-start justify-start space-y-4">
              <div class="text-white">
                <h2 class="text-2xl font-bold">Storipod</h2>
              </div>
              <p class="text-sm text-gray-400">
                © {{ new Date().getFullYear() }} Storipod
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>

    <!-- Mobile Footer -->
    <section id="footer-mobile" class="relative z-10 bg-black lg:hidden">
      <!-- Hero Section -->
      <div class="flex flex-col items-center justify-center px-8 py-16 lg:px-12 xl:px-16">
        <div class="text-center">
          <h1 class="text-6xl font-extrabold text-white">Tell</h1>
          <h1 class="text-6xl font-extrabold text-white">Your</h1>
          <h1 class="text-6xl font-extrabold text-[#00A1C1]">Stori</h1>
        </div>
      </div>

      <!-- Footer Content -->
      <footer class="pb-8 text-white bg-black">
        <div class="px-8 mx-auto max-w-screen-lg lg:px-12 xl:px-16">
          <div class="max-w-screen-xl pb-6 mx-auto">
            <!-- Navigation Grid -->
            <div class="grid grid-cols-2 gap-8 mb-8 text-center">
            <!-- Left Column -->
            <div class="space-y-6">
              <!-- Downloads -->
              <div>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a href="https://apps.apple.com/ng/app/storipod/id6463716901" 
                       class="text-gray-400 transition hover:text-white">
                      iOS App
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.app.storipod_app"
                       class="text-gray-400 transition hover:text-white">
                      Android App
                    </a>
                  </li>
                  <li>
                    <a href="https://storipod.app/#reserve-username" 
                       class="text-gray-400 transition hover:text-white">
                      Reserve Username
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Policies -->
              <div>
                <p class="text-base font-semibold text-white mb-3">Policies</p>
                <ul class="space-y-2 text-sm">
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/rules">
                      End User Agreement
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/privacy">
                      Privacy Policy
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/terms">
                      Terms of use
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/originals-policy">
                      Storipod Originals Policy
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/monetization-eligibility">
                      Monetization & Creators Eligibility
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <!-- Contact -->
              <div>
                <p class="text-base font-semibold text-white mb-3">Contact</p>
                <ul class="space-y-2 text-sm">
                  <li>
                    <a class="text-gray-400 transition hover:text-white" target="_blank" 
                       href="https://storipod.framer.website/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <nuxt-link class="text-gray-400 transition hover:text-white" to="/faqs">
                      FAQ
                    </nuxt-link>
                  </li>
                  <li>
                    <a class="text-gray-400 transition hover:text-white" 
                       href="https://www.instagram.com/storipodapp/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-400 transition hover:text-white" href="https://x.com/storipod_app">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-400 transition hover:text-white" href="https://www.facebook.com/storipod/">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-400 transition hover:text-white" 
                       href="https://www.linkedin.com/company/stori-pod/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-400 transition hover:text-white" href="mailto:admin@storipod.com">
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            <!-- Brand Section -->
            <div class="pt-6 border-t border-gray-800 text-center">
              <div class="text-white mb-4">
                <h2 class="text-xl font-bold">Storipod</h2>
              </div>
              <p class="text-sm text-gray-400">
                © {{ new Date().getFullYear() }} Storipod
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </section>
</template>

<script setup lang="ts">
// Composition API setup can be added here if needed
</script>

<style scoped>
/* Remove any unnecessary spacing */
* {
  margin: 0;
  padding: 0;
}

/* Ensure proper mobile responsiveness */
@media (max-width: 1024px) {
  .text-6xl {
    font-size: 3.5rem;
    line-height: 1;
  }
}

@media (max-width: 768px) {
  .text-6xl {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (max-width: 640px) {
  .text-6xl {
    font-size: 2.5rem;
    line-height: 1;
  }
}

/* Smooth transitions for links */
a {
  transition: color 0.3s ease;
}

a:hover {
  color: white;
}

/* Ensure proper text wrapping for long policy names */
ul li {
  word-wrap: break-word;
  hyphens: auto;
}
</style>