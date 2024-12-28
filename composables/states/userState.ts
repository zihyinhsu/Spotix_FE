export interface User {
  email: string
  password: string
  name: string
  gender: boolean
  birthday: string
  cellphone: string
  address: string
  avatarUrl: string
  lineUserId: string
};
export const useUser = () => useState<User>('user', () => ({
  email: 'test@gmail.com',
  password: '',
  name: 'test123',
  gender: false,
  birthday: '1996-08-05',
  cellphone: '0982256547',
  address: '三清路77號',
  avatarUrl: 'https://i.namu.wiki/i/pQjJNXL4RNJrLGhvtquanpjtvqUK3iMsQT4GjgaE6aKciAZ88BxNp1RZ1Q0HTTei6msC1ii9q3zlaB2-YWeRaQ.webp',
  lineUserId: 'asdf',
}))
