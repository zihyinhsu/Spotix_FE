/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AE0000',
        secondary: '#2d3748',
        // primaryLight: '#bec9b8',
        dark: '#2d3748',
      },
      container: {
        center: true, // 啟用水平居中
        padding: '2rem', // 設置容器兩側的內邊距
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
