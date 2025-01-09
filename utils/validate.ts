import type { LoginData } from '~/pages/login.vue'

export const validateEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const validateCellphonePattern = /^09\d{8}$/

export function validateData<T extends LoginData | encryptOrderType>(data: T): boolean {
  if ('password' in data) {
    const { email, password, userName } = data as LoginData
    if (email && !validateEmailPattern.test(email)) return false
    if (!password || password.length < 6) return false
    if (userName && userName.length < 2) return false
  }
  else if ('payment' in data) {
    const { email, name, cellphone, address } = data as encryptOrderType
    if (email && !validateEmailPattern.test(email)) return false
    if (name && name.length < 2) return false
    if (cellphone && !validateCellphonePattern.test(cellphone)) return false
    if (!address) return false
  }

  return true
}
