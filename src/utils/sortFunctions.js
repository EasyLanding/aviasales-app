/* eslint-disable */
const sortingArray = (array, sortingType) => {
  const durationCount = (ticket) => ticket['segments'][0].duration + ticket['segments'][1].duration
  switch (sortingType) {
    case 'САМЫЙ ДЕШЕВЫЙ':
      return array.sort((elemA, elemB) => elemA['price'] - elemB['price'])
    case 'САМЫЙ БЫСТРЫЙ':
      return array.sort((elemA, elemB) => {
        const durationA = durationCount(elemA)
        const durationB = durationCount(elemB)
        return durationA - durationB
      })
    default:
      return array.sort((elemA, elemB) => {
        const durationA = durationCount(elemA)
        const durationB = durationCount(elemB)

        const optimumA = elemA['price'] * durationA
        const optimumB = elemB['price'] * durationB

        return optimumA - optimumB
      })
  }
}
const filterArray = (array, filters) => {
  if (filters[0].checked) return [...array]
  let result = []
  filters.slice(1).forEach(elem => {
    if (elem.checked) {
      result = [...result, ...array.filter(ticket => {
        const maxStops = Math.max(ticket['segments'][0].stops.length, ticket['segments'][1].stops.length)
        return (elem.stops === maxStops)
      })]
    }
  })
  return result
}

const sortFunctions = (filters, array, activeSort) => {
  const filteredArray = filterArray(array, filters)
  const sortedArray = sortingArray(filteredArray, activeSort)
  return sortedArray
}

export default sortFunctions
