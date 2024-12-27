import Categories, { type filterQueryType } from '~/composables/api/categories'

export type bookType = {
  id: number
  coverUrl: string
  description?: string | null
  title: string
  writer: string
  price: number
  publishingHouse: string
  publicationDate: string
  categoryId: number
  quantity?: number
}
export interface cateType {
  id: number
  categoryChTitle: string
  category: string
  books: bookType[]
  totalNum: number
}

export const useBooksData = () => {
  const categoriesData = useState<cateType[]>('books', () => [])
  async function getCategories(filterQuery: filterQueryType = { category: '', filter: '', rowspage: 10, page: 1 }, options?: HttpOption<cateType[]>) {
    const { data } = await Categories.apiGetCategories(filterQuery, options)
    return data
  }

  return { categoriesData, getCategories }
}
