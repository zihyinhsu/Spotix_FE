import Order from '../api/order'

export interface encryptOrderType {
  TimeStamp?: Date
  MerchantOrderNo?: number
  Amt?: number
  email?: string
  TradeInfo?: string
  name?: string
  cellphone?: string
  address?: string
  notes: string

  userId: string
  totalPrice: number
  bookIds: number[]
  ItemDesc: string
  payTime?: string
}
export interface orderType {
  id: number
  userId: string
  email: string
  name: string
  cellphone: string
  address: string
  totalPrice: number
  bookIds: number[]
  books?: bookType[]
  payTime: string
  notes: string
}
export const useOrderData = () => {
  const encryptOrderData = useState<encryptOrderType | null>('encryptOrder', () => null)
  const orderData = useState<orderType[]>('orders', () => [])

  /** 加密訂單 */
  async function EncryptOrder(order) {
    const { data } = await Order.apiEncryptData(order)
    if (data?.value?.data) encryptOrderData.value = data?.value?.data
  }

  async function getorder() {
    const { data } = await Order.apiGetData()
    if (data?.value?.data) orderData.value = data?.value?.data
  }

  return { encryptOrderData, orderData, EncryptOrder, getorder }
}
