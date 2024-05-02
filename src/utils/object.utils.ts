export const filterByObject = <T, G>(data: T[], filterBy: G[]): T[] => {
  if (Array.isArray(data))
    return data.filter(function (i) {
      return filterBy.some(function (j) {
        return !Object.keys(j).some(function (prop) {
          return i[prop] !== j[prop]
        })
      })
    })

  return data
}
