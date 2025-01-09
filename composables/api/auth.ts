const Auth = {
  apiPostLogin(params, option?: HttpOption<User[]>) {
    return useHttp.post<User[]>('/auth/login', params, {
      ...option,
    })
  },

  apiGetUserProfile(option?: HttpOption<User[]>) {
    return useHttp.get<User[]>('/auth/profile', {}, {
      ...option,
    })
  },

  apiPatchProfile(params, option?: HttpOption<User[]>) {
    return useHttp.patch<User[]>('/auth/profile', params, {
      ...option,
    })
  },

  apiUploadAvatar(formData: FormData, option?: HttpOption<{
    imegeUrl: string
  }>) {
    return useHttp.uploadPost<{
      imegeUrl: string
    }>('/auth/UploadAvatar', formData, {
      ...option,
    })
  },

}

export default Auth
