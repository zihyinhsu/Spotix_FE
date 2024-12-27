interface Notify {
  visible: boolean
  status: 'success' | 'danger' | 'warning'
  message: string | null
}

export const useNotify = () => useState<Notify>('notify', () => ({
  visible: false,
  status: 'success',
  message: '操作成功',
}))
