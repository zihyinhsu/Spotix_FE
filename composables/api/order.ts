const Order = {
  /** 加密訂單 */
  apiEncryptData(params: encryptOrderType, option?: HttpOption<encryptOrderType>) {
    return useHttp.post<encryptOrderType>('/order/encrypt', params, {
      ...option,
    })
  },
  /** 新增訂單 */
  apiGetData(option?: HttpOption<orderType[]>) {
    return useHttp.get<orderType[]>('/order', {}, {
      ...option,
    })
  },
}

export default Order
