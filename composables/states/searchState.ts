export interface filterQueryType {
  filterQuery: string
  year: number | null
  month: number | null
  sortBy: string
  pageNumber: number
  pageSize: number
}
export const useSearch = () => useState<filterQueryType>('search', () => ({
  filterQuery: '',
  year: null,
  month: null,
  sortBy: '',
  pageNumber: 1,
  pageSize: 30,
}))
