export interface User {
  userName: string
  email: string
  password: string
};
export const useUser = () => useState<User>('user', () => ({
  userName: '',
  email: '',
  password: '',
}))
