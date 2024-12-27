// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Spotix',
      htmlAttrs: {
        lang: 'zh-TW',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: 'static/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/css/custom.css'],
  modules: [
    // '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          (componentName: string) => {
            if (componentName.startsWith('Fwb')) {
              return { name: componentName, from: 'flowbite-vue' }
            }
            return null
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    ],
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
      // standalone: false
    },
    checker: true,
  },
  imports: {
    dirs: [
      'composables', // 自動匯入 composables 資料夾中的檔案
      'composables/**', // 自動匯入 composables 子資料夾中的檔案
    ],
  },
  postcss: {},
  runtimeConfig: {
    public: {
      apiBase: '/',
    },
    newebpay: {
      MerchantID: process.env.MerchantID,
      HASHKEY: process.env.HASHKEY,
      HASHIV: process.env.HASHIV,
      ReturnUrl: process.env.ReturnUrl,
      NotifyUrl: process.env.NotifyUrl,
      PayGateWay: process.env.PayGateWay,
      Version: process.env.Version,
    },
  },
  compatibilityDate: '2024-12-24',
})
