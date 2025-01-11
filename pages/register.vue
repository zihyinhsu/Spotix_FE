<script setup lang="ts">
import type { LoginData } from './login.vue'
import { validateData, validateEmailPattern, validateCellphonePattern } from '~/utils/validate'

// useState
const { userRegister, userData, getLineUrl } = useUser()
const notify = useNotify()

if (userData.value) await navigateTo('/')

export interface UserFormData extends LoginData {
  userName: string
  email: string
  password: string
  confirmPassword: string
  gender: boolean | null
  birthday: string
  phoneNumber: string
  address: string
  roles: string[]
}

const userFormData = ref<UserFormData>(
  {
    userName: '朴再興',
    email: 'eaj@example.com',
    password: 'eajpark0915',
    confirmPassword: 'eajpark0915',
    gender: null,
    birthday: '',
    phoneNumber: '0912345678',
    address: '',
    roles: ['User'],
  },
)

// 性別
const genderRadio = ref()
const validateGender = ref(true)
const validateBirthday = ref(true)
watch(genderRadio, (value) => {
  userFormData.value.gender = value === 'true'
},
)
async function handleSignUp() {
  if (!genderRadio.value) {
    validateGender.value = false
    return
  }
  if (userFormData.value.birthday)
    userFormData.value.birthday = new Date(userFormData.value.birthday)?.toISOString()
  else {
    validateBirthday.value = false
    return
  }

  if (userFormData.value.birthday)userFormData.value.birthday = new Date(userFormData.value.birthday)?.toISOString()
  console.log('userFormData', userFormData.value)
  const validateResult = validateData(userFormData.value)
  if (!validateResult) return

  const result = await userRegister(userFormData.value)

  const { isSuccess, message } = result.value
  if (result.value) {
    if (!isSuccess) {
      notify.value = {
        visible: true,
        status: 'danger',
        message: message,
      }
      userFormData.value = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: null,
        birthday: '',
        phoneNumber: '',
        address: '',
        roles: ['User'],
      }
      return
    }
    notify.value = {
      visible: true,
      status: 'success',
      message: message,
    }
    navigateTo('/login')
  }
}
</script>

<template>
  <div class="grid grid-cols-12 md:h-screen">
    <div class="col-span-12 md:col-span-6 flex flex-col justify-center order-2 md:order-1 mt-[140px] md:mt-0">
      <div class="px-12 md:px-48">
        <div class="flex justify-center">
          <img
            src="/images/logo-sm.png"
            alt="si-yueh"
            class="w-[40px] md:absolute md:left-0 md:top-0 md:m-6 cursor-pointer"
            @click="navigateTo('/')"
          >
        </div>

        <h2 class="p-6 text-center font-bold text-3xl">
          Sign Up
        </h2>
        <button
          type="submit"
          class="w-full text-[14px] py-[6px] px-[8px] flex justify-center items-center border-[1.5px] bg-[#00C854] text-white rounded-lg hover:-translate-y-1 transition-ease"
          @click="getLineUrl"
        >
          <Icon
            name="lineicons:line"
            size="24"
            class="mr-2"
          />

          Continue with LINE
        </button>
        <div class="divider" />
        <form
          class=" flex flex-col mb-4"
          @submit.prevent="handleSignUp"
        >
          <section class="h-[380px] md:h-[400px] space-y-4 overflow-y-auto">
            <fwb-input
              v-model="userFormData.userName"
              placeholder="請輸入姓名"
              label="姓名"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="userFormData.userName && userFormData.userName.length < 2 ? 'error' : undefined"
              required
            >
              <template
                v-if="userFormData.userName && userFormData.userName.length < 2"
                #validationMessage
              >
                請輸入正確的姓名
              </template>
            </fwb-input>
            <fwb-input
              v-model="userFormData.email"
              placeholder="請輸入電子郵件"
              label="Email"
              type="email"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="userFormData.email && !validateEmailPattern.test(userFormData.email) ? 'error' : undefined"
              required
            >
              <template
                v-if="userFormData.email && !validateEmailPattern.test(userFormData.email)"
                #validationMessage
              >
                請輸入有效的電子郵件地址
              </template>
            </fwb-input>
            <fwb-input
              v-model="userFormData.password"
              placeholder="請輸入密碼"
              label="Password"
              type="password"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="userFormData.password && userFormData.password.length < 8 ? 'error' : undefined"
              required
            >
              <template
                v-if="userFormData.password && userFormData.password.length < 8"
                #validationMessage
              >
                請輸入正確的密碼, 密碼長度至少 8 碼
              </template>
            </fwb-input>
            <fwb-input
              v-model="userFormData.confirmPassword"
              placeholder="請再次輸入密碼"
              label="Password"
              type="password"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="userFormData.confirmPassword.length < 6 || userFormData.confirmPassword !== userFormData.password? 'error' : undefined"
              required
            >
              <template
                v-if="userFormData.confirmPassword.length < 6 || userFormData.confirmPassword !== userFormData.password"
                #validationMessage
              >
                請再次確認密碼
              </template>
            </fwb-input>
            <div>
              <div class="text-sm font-bold">
                性別
              </div>
              <div class="flex ml-1">
                <fwb-radio
                  v-model="genderRadio"
                  label="女"
                  value="true"
                />
                <fwb-radio
                  v-model="genderRadio"
                  label="男"
                  value="false"
                />
              </div>
              <span
                v-if="!validateGender"
                class="text-sm text-red-500"
              >請填寫性別</span>
            </div>
            <div>
              <fwb-input
                v-model="userFormData.birthday"
                class="focus:border-secondary focus:ring-secondary"
                type="date"
                label="生日"
                placeholder="enter your name"
                size="md"
                :validation-status="!validateBirthday ? 'error' : undefined"
                required
              />
            </div>
            <fwb-input
              v-model="userFormData.phoneNumber"
              placeholder="請輸入手機"
              label="手機"
              type="tel"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="userFormData.phoneNumber && !validateCellphonePattern.test(userFormData.phoneNumber) ? 'error' : undefined"
              required
            >
              <template
                v-if="userFormData.phoneNumber && !validateCellphonePattern.test(userFormData.phoneNumber)"
                #validationMessage
              >
                請輸入正確的手機號碼
              </template>
            </fwb-input>
            <fwb-input
              v-model="userFormData.address"
              placeholder="請輸入地址"
              label="地址"
              type="text"
              class="focus:border-secondary focus:ring-secondary"
              :validation-status="!userFormData.address ? 'error' : undefined"
              required
            >
              <template
                v-if="!userFormData.address"
                #validationMessage
              >
                請輸入正確的地址
              </template>
            </fwb-input>
          </section>

          <fwb-button
            class="h-full bg-gray-800 hover:bg-gray-600 focus:ring-opacity-0 transition duration-500 ease-in-out mt-5"
            type="submit"
          >
            Sign up
          </fwb-button>
        </form>
        <div class="text-center text-[14px] text-gray-600">
          已經有帳號了嗎 ? 從
          <NuxtLink
            to="/login"
            class="underline text-secondary font-bold"
          >
            這裡
          </NuxtLink>
          開始登入
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-6 order-1 md:order-2 mb-10 md:mb-0 absolute md:static top-[-150px]">
      <img
        src="/images/register.jpg"
        alt="spotix"
        class="object-cover md:h-screen bg-img"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep([type='radio']){
  &:checked{
    background-color: theme('colors.primary');
  }
  &:focus{
  box-shadow: 0 0 0 1px theme('colors.primary');
  }
}
</style>
