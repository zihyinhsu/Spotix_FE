import { useNotify } from './notifyState'
import { useCookie } from '#app'

export interface User {
  id?: string
  userName: string
  email: string
  gender?: boolean
  birthday?: Date
  phoneNumber?: string
  address?: string
  avatarUrl?: string
  lineUserId?: string
  roles?: string[]
  orders?: string[]
  jwtToken?: string
};
export const useUser = () => {
  const notify = useNotify()

  const userCookie = useCookie('userData', {
    maxAge: 60 * 30, // 30 分鐘 token 過期
  })
  const userData = useState<User | null>('user', () => null)

  async function initUserState() {
    if (import.meta.client) {
      try {
        if (userCookie.value && !userData.value) {
          userData.value = userCookie.value as unknown as User
        }
      }
      catch (error) {
        console.error('Failed to initialize user state:', error)
      }
    }
  }

  async function userLogin(param) {
    const { data } = await auth.apiPostLogin(param)
    if (data.value.data?.[0]) {
      const { email, userName, avatarUrl, jwtToken } = data.value.data[0]
      userData.value = {
        email,
        userName,
        avatarUrl,
        jwtToken,
      }
      userCookie.value = JSON.stringify(userData.value) // setCookie
    }

    return data
  }

  function userLogout() {
    userCookie.value = null
    userData.value = null

    navigateTo('/login')

    notify.value = {
      visible: true,
      status: 'success',
      message: '登出成功',
    }
  }

  async function updateUserProfile(profileData) {
    const { data } = await auth.apiPatchProfile(profileData)
    return data
  }

  async function getUserData() {
    const { data } = await auth.apiGetUserProfile()
    reFetchUserData(data)
  }

  async function userLineLogin(code) {
    const { data } = await auth.apiLineLogin({
      authToken: code,
      callbackUrl: window.location.origin,
    })
    reFetchUserData(data)
    return data
  }

  function reFetchUserData(data) {
    if (data?.value?.data?.[0]) userData.value = {
      ...userData.value,
      ...data.value.data?.[0],
    }
    userCookie.value = JSON.stringify(userData.value)
  }

  async function userUploadAvatar(formData: FormData) {
    const { data } = await auth.apiUploadAvatar(formData)
    return data
  }

  return { initUserState, userData, userLogin, userLineLogin, userLogout, getUserData, updateUserProfile, userUploadAvatar }
}
