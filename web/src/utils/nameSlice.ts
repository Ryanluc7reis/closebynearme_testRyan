export const nameSlice = (name: string, length = 30) => {
  const shouldReduce = name.length >= length

  return {
    reducedName: shouldReduce ? name.slice(0, length) : name,
    shouldReduce
  }
}

export const handleParseTitle = (title: string, isMobile: boolean, length = 30) => {
  const { reducedName, shouldReduce } = nameSlice(title, length)
  const formated = `${reducedName}...`

  return isMobile ? (shouldReduce ? formated : title) : title
}
