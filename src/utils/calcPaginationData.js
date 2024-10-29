const calcPaginationData = ({ total, page, perPage }) => {
  if (perPage <= 0) {
    throw new Error('perPage must be greater than 0')
  }
  if (page < 1) {
    throw new Error('Page must be at least 1')
  }
  const totalPages = Math.ceil(total / perPage)
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1 && page <= totalPages
  return {
    totalPages,
    hasNextPage,
    hasPreviousPage,
  }
}

export default calcPaginationData
