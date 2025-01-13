const Order = {
  /** 加密訂單 */
  apiEncryptData(params, option?: HttpOption<encryptOrderType>) {
    return useHttp.post<encryptOrderType>('/orders/encrypt', params, {
      ...option,
    })
  },
  /** 取得訂單 */
  apiGetData(option?: HttpOption<orderType[]>) {
    return useHttp.get<orderType[]>('/orders', {}, {
      ...option,
    })
  },
}

export default Order
