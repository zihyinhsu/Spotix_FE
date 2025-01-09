<script setup lang="ts">
import { validateData, validateEmailPattern } from '~/utils/validate'

// useState
const { userLogin, userData } = useUser()
const notify = useNotify()

if (userData.value) await navigateTo('/')
export interface LoginData {
  email: string
  password: string
}
const loginData = ref<LoginData>({
  email: 'woodz@example.com',
  password: 'woodz0805',
})
async function handleLogin() {
  const { email, password } = loginData.value
  const validateResult = validateData(loginData.value)
  if (!validateResult) return

  if (email && password) {
    const result = await userLogin(loginData.value)
    // const { isSuccess, message, data } = result.value
    // if (result.value) {
    if (!result.value?.isSuccess) {
      notify.value = {
        visible: true,
        status: 'danger',
        message: result.value?.message,
      }
      loginData.value = {
        email: '',
        password: '',
      }

      return
    }
    notify.value = {
      visible: true,
      status: 'success',
      message: result.value?.message,
    }
    navigateTo('/')
  }
  // }
}

async function handleGoogleLogin() {
  // const { error } = await supabase.auth.signInWithOAuth({
  //   provider: 'google',
  //   options: {
  //     redirectTo: '/',
  //   },
  // })

  // if (error) {
  //   notify.value = {
  //     visible: true,
  //     status: 'danger',
  //     message: '登入失敗',
  //   }
  //   return
  // }

  // notify.value = {
  //   visible: true,
  //   status: 'success',
  //   message: '登入中...',
  // }
}
</script>

<template>
  <div class="grid grid-cols-12 md:h-screen">
    <div class="col-span-12 md:col-span-6 flex flex-col justify-center order-2 md:order-1">
      <div class="px-12 md:px-48">
        <div class="flex justify-center">
          <img
            src="/images/logo-sm.png"
            alt="si-yueh"
            class="w-[60px] md:w-[40px] md:absolute md:left-0 md:top-0 md:m-6 cursor-pointer"
            @click="navigateTo('/')"
          >
        </div>

        <h2 class="p-6 text-center font-bold text-3xl">
          Sign in
        </h2>
        <button
          type="submit"
          class="w-full text-[14px] py-[6px] px-[8px] flex justify-center items-center border-[1.5px] border-gray-300 rounded-lg hover:-translate-y-1 transition-ease"
          @click="handleGoogleLogin"
        >
          <Icon
            name="flat-color-icons:google"
            size="24"
            class="mr-2"
          />
          Continue with Google
        </button>
        <div class="divider" />
        <form
          class=" flex flex-col space-y-4 mb-4"
          @submit.prevent="handleLogin"
        >
          <fwb-input
            v-model="loginData.email"
            placeholder="請輸入電子郵件"
            label="Email"
            type="email"
            class="focus:border-secondary focus:ring-secondary"
            :validation-status="loginData.email && !validateEmailPattern.test(loginData.email) ? 'error' : undefined"
            required
          >
            <template
              v-if="loginData.email && !validateEmailPattern.test(loginData.email)"
              #validationMessage
            >
              請輸入有效的電子郵件地址
            </template>
          </fwb-input>
          <fwb-input
            v-model="loginData.password"
            placeholder="請輸入密碼"
            label="Password"
            type="password"
            class="focus:border-secondary focus:ring-secondary"
            :validation-status="loginData.password && loginData.password.length < 6 ? 'error' : undefined"
            required
          >
            <template
              v-if="loginData.password && loginData.password.length < 6"
              #validationMessage
            >
              請輸入正確的密碼
            </template>
          </fwb-input>

          <fwb-button
            class="h-full bg-secondary hover:bg-gray-600 focus:ring-opacity-0 transition duration-500 ease-in-out"
            type="submit"
          >
            Login
          </fwb-button>
        </form>

        <div class="text-center text-[14px] text-gray-600">
          還沒有帳號嗎 ? 從
          <NuxtLink
            to="/register"
            class="underline text-secondary font-bold"
          >
            這裡
          </NuxtLink>
          開始註冊
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 order-1 md:order-2 mb-10 md:mb-0">
      <img
        src="/images/login.jpg"
        alt="spotix"
        class="object-cover md:h-screen bg-img"
      >
    </div>
  </div>
</template>
