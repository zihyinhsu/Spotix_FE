import Order from '../api/order'

export interface encryptOrderType {
  timeStamp: number
  amt: number
  itemDesc: string
  email: string
  tradeInfo: string
  tradeSha: string
  merchantID: string
  merchantOrderNo: number
  version: string
  notifyUrl: string
  returnUrl: string
}
export interface orderType {
  id?: number
  createdTime?: Date
  total: number
  userId: string
  orderNumber: string
  tickets: ticketType[]
}
export const useOrderData = () => {
  const orderData = useState<orderType[]>('orders', () => [])

  /** 加密訂單 */
  async function EncryptOrder(order) {
    const { data } = await Order.apiEncryptData(order)
    return data
  }

  async function getorder() {
    const { data } = await Order.apiGetData()
    if (data?.value?.data) orderData.value = data?.value?.data
  }

  return {
    orderData, EncryptOrder, getorder }
}
