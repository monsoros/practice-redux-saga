const initialState = {
    loading: false,
    error: null,
    pageSize: 10,
    total: 0,
    skus: []
}

const sku = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SKU_REQUESTED':
            return { 
                ...state, 
                loading: true,
                pageSize: action.payload.limit
            }
        case 'GET_SKU_SUCCESS':
            return { 
                ...state, 
                loading: false,
                total: action.total,
                skus: action.skus
            }
        case 'GET_SKU_FAILED':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }

}

export default sku