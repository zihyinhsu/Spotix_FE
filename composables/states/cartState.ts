import Cart from '../api/cart'

export interface cartType {
  id: number
  userId: string
  totalPrice: number
  books: cateType['books']
}

export const useCartData = () => {
  const cartData = useState<cartType | null>('cart', () => null)

  async function getCart() {
    const { data } = await Cart.apiGetCart()
    if (data?.value?.data) cartData.value = data?.value?.data
  }

  async function addCart(bookId: bookType['id']) {
    await Cart.apiAddCart(bookId)
    await getCart()
  }

  async function patchCart(params: { quantity: number, bookId: bookType['id'] }) {
    await Cart.apiPatchCart(params)
    await getCart()
  }

  async function deleteCart(bookId: bookType['id']) {
    await Cart.apiDeleteCart(bookId)
    await getCart()
  }

  return { cartData, getCart, addCart, patchCart, deleteCart }
}
