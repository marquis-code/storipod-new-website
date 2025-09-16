<template>
    <main class="w-screen ">
        <div class="w-full text-white "> <!--bg-[#00A1C1]-->
            <nav
                class="fixed top-0 z-10 flex items-center justify-between w-full p-5 bg-white rounded-md shadow-md md:px-10">
                <nuxt-link to="/"><img src="@/assets/images/logo.svg" alt="Storipod's Logo" class="w-32"></nuxt-link>
                <!-- <div class="flex flex-row gap-x-2">
                    <button
                        class="hidden px-5 py-2 text-sm font-semibold text-black bg-white rounded-lg shadow-md  questions md:block">
                        <a href="https://podplus.storipod.app">Log In</a></button>
                    <button
                        class=" bg-[#00A1C1] questions text-white rounded-lg text-sm font-semibold py-2 px-5 shadow-md">
                        <a href="https://apps.apple.com/ng/app/storipod/id6463716901">Sign Up</a></button>
                </div> -->
            </nav>
            <div class="flex flex-col items-center pt-16 pb-4 mt-16 text-black md:py-8">
                <h2 class="mb-0 font-bold tracking-wide text-center  text-7xl md:leading-relaxed lg:leading-loose faq">
                    Frequently Asked
                    Questions
                </h2>
            </div>
        </div>
        <section class="flex py-10 text-black ">
            <div class="hidden w-3/12 px-14 md:block">
                <h4 class="text-lg font-bold tracking-wide uppercase  faq">Content</h4>
                <ul class="text-[15px] flex flex-col gap-y-2 mt-3 font-medium questions">
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#monetization' }">Monetization Basics</nuxt-link></li>
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#locked' }">Locked Content</nuxt-link></li>
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#podads' }">Pod+ and Ads</nuxt-link></li>
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#tips' }">Tips and Gifts</nuxt-link></li>
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#wallet' }">Payout and Wallet</nuxt-link></li>
                    <li><nuxt-link :to="{ path: '/faqs', hash: '#security' }">Account Verification and
                            Security</nuxt-link></li>
                    <!-- <li>Monetization Basics</li>
                    <li>Locked Content</li>
                    <li>Pod+ and Ads</li>
                    <li>Tips and Gifts</li>
                    <li>Payout and Wallet</li>
                    <li>Account Verification and Security</li> -->
                </ul>
                <h4 class="mt-10 text-lg font-bold tracking-wide uppercase  faq">Quick Links</h4>
                <ul class="text-[15px] flex flex-col gap-y-2 mt-3 font-medium questions">
                    <li><a href="https://apps.apple.com/ng/app/storipod/id6463716901">Download Storipod on App Store</a>
                    </li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.app.storipod_app">Download Storipod
                            on Google Play</a></li>
                    <li><a href="https://podplus.storipod.app">Log in to Pod+</a></li>
                </ul>

            </div>
            <div class="w-full px-8 md:w-9/12 md:px-20">
                <div>
                    <h2 id="monetization" class="text-lg font-bold tracking-wide uppercase scroll-target faq">
                        Monetization Basics</h2>
                    <div v-for="question in questions.monetization_basics" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" class="" width="25px" height="25px" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px] ">{{
                            question.answer }}</p>
                        <div v-if="question.show && question.methods" class="mt-2 font-normal text-[15px] ">
                            <ul v-for="q in question.methods" :key="q">
                                <li><span class="font-semibold">• {{ q.method }}</span>: {{ q.description }}</li>
                            </ul>
                        </div>
                    </div>

                    <h2 id="locked" class="mt-10 text-lg font-bold tracking-wide uppercase scroll-target faq">Locked
                        Content</h2>
                    <div v-for="question in questions.locked_content" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px]">{{ question.answer }}</p>
                    </div>

                    <h2 id="podads" class="mt-10 text-lg font-bold tracking-wide uppercase scroll-target faq">Pod+ and
                        Ads</h2>
                    <div v-for="question in questions.pod_and_ads" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px]">{{ question.answer }}</p>
                    </div>

                    <h2 id="tips" class="mt-10 text-lg font-bold tracking-wide uppercase scroll-target faq">Tips and
                        Gifts</h2>
                    <div v-for="question in questions.tips_and_gifts" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px]">{{ question.answer }}</p>
                    </div>

                    <h2 id="wallet" class="mt-10 text-lg font-bold tracking-wide uppercase scroll-target faq">Payout
                        and Wallet</h2>
                    <div v-for="question in questions.payout_and_wallet" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px]">{{ question.answer }}</p>
                    </div>

                    <h2 id="security" class="mt-10 text-lg font-bold tracking-wide uppercase scroll-target faq">Account
                        Verification
                        and Security</h2>
                    <div v-for="question in questions.account_verification_and_security" :key="question.id"
                        class="p-5 my-5 text-lg border rounded-lg shadow  questions hover:-translate-y-1">
                        <div class="flex items-center cursor-pointer gap-x-2" @click="question.show = !question.show">
                            <svg v-if="!question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M12 6V18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <svg v-if="question.show" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect width="24" height="24" fill="white"></rect>
                                    <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-base font-semibold">{{ question.question }}</span>
                        </div>
                        <p v-if="question.show" class="mt-2 font-normal text-[15px]">{{ question.answer }}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { faqs } from '../utils/faqs';
export default {
    scrollToTop: true,
    head: {
        title: 'Storipod - FAQ'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The power to build a more interactive community' },
        { name: 'format-detection', content: 'telephone=no' }
    ],

    data() {
        return {
            questions: faqs
        }
    }
}

</script>

<style scoped>
.faq {
    font-family: "DM Serif Text", serif;
}

.questions {
    font-family: "Outfit", sans-serif;
}

.scroll-target {
    scroll-margin-top: 120px;
}
/* nmnbb */
</style>