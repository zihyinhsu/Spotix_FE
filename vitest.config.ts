import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    // 設置測試環境
    environment: 'nuxt',
    // 指定測試文件的位置
    include: ['test/**/*.test.ts'],
    // Nuxt.js 相關的配置
    globals: true,
    // setupFiles: './test/setup.ts',
  },
})
