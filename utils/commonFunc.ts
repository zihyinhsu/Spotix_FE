export function scrollToTop() {
  const bodyElement = document?.querySelector('body')
  bodyElement?.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export function formatToLocaleString(utcString) {
  const utcDate = new Date(utcString)

  // 台灣是 UTC+8，調整時間偏移量
  const taiwanOffset = 8 * 60 // 分鐘
  const localDate = new Date(utcDate.getTime() + taiwanOffset * 60 * 1000)

  return localDate.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
