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
  // const notify = useNotify()

  // const userCookie = useCookie('userData', {
  //   maxAge: 60 * 30, // 30 分鐘 token 過期
  // })
  const userData = useState<User | null>('user')

  // if (userCookie.value) {
  //   userData.value = userCookie.value as unknown as User
  // }

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
      // userCookie.value = JSON.stringify(userData.value) // setCookie
    }

    return data
  }

  function userLogout() {
    // userCookie.value = null
    userData.value = null

    navigateTo('/login')

    // notify.value = {
    //   visible: true,
    //   status: 'success',
    //   message: '登出成功',
    // }
  }

  async function updateUserProfile(profileData) {
    const { data } = await auth.apiPatchProfile(profileData)
    return data
  }

  async function getUserData() {
    const { data } = await auth.apiGetUserProfile()
    if (data?.value?.data?.[0]) userData.value = {
      ...data.value.data?.[0],
      ...userData.value,
    }
    // userCookie.value = JSON.stringify(userData.value)
  }

  async function userUploadAvatar(formData: FormData) {
    const { data } = await auth.apiUploadAvatar(formData)
    return data
  }

  return { userData, userLogin, userLogout, getUserData, updateUserProfile, userUploadAvatar }
}
