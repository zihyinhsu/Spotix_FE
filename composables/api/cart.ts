const Cart = {
  apiGetCart(option?: HttpOption<cartType>) {
    return useHttp.get<cartType>('/cart', {}, {
      ...option,
    })
  },
  apiAddCart(bookId, option?: HttpOption<cartType>) {
    return useHttp.post<cartType>(`/cart/${bookId}`, {}, {
      ...option,
    })
  },
  apiPatchCart(params, option?: HttpOption<cartType>) {
    return useHttp.patch<cartType>('/cart', params, {
      ...option,
    })
  },
  apiDeleteCart(bookId, option?: HttpOption<cartType>) {
    return useHttp.delete<cartType>(`/cart/${bookId}`, {}, {
      ...option,
    })
  },
}

export default Cart
