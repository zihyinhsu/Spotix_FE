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
  css: ['~/assets/css/custom.scss', '/node_modules/vue-client-recaptcha/dist/style.css'],
  modules: [
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
          (componentName) => {
            if (componentName.startsWith('Fwb')) {
              return { name: componentName, from: 'flowbite-vue' }
            }
            return null
          },
        ],
      }),
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
  postcss: {
    plugins: {
      autoprefixer: {},
      // 'postcss-preset-env': {
      //   'autoprefixer': {
      //     // grid: true,
      //   },
      //   'features': {
      //     'nesting-rules': true, // 啟用嵌套規則支持
      //   },
      //   'postcss-normalize': {}, // 添加 postcss-normalize 插件
      // },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://86b6-114-34-72-78.ngrok-free.app/',
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
