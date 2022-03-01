import skuReducer from './sku'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    SKU: skuReducer
})

export default allReducers