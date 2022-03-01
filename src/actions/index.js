export const getSKU = (skip, pageSize, search) => {
    return {
        type: 'GET_SKU_REQUESTED',
        payload: {
            skip: skip,
            limit: pageSize,
            searchQuery: search
        }
    }
}