import dayjs from 'dayjs'

export const dateFormat = (date: string, format = 'DD MMMM') => {
  return dayjs(date).format(format)
}
