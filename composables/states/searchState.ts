export const useSearch = () => useState('search', () => {
  return {
    text: '',
    isSearch: false,
  }
})
