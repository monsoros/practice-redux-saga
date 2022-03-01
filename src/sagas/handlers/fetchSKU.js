import { call, put, takeEvery } from 'redux-saga/effects'
import fetchGetSKU from '../requests/fetchSKU'

function* handleGetSKU(action) {
    try {
        const skus = yield call(fetchGetSKU, action.payload)
        yield put({ 
            type: 'GET_SKU_SUCCESS', 
            total: skus.total,
            skus: skus.skus
        })
    } catch (error) {
        yield put({ 
            type: 'GET_SKU_FAILED', 
            error: error.message 
        })
    }
}

function* watcherGetSKU() {
    yield takeEvery('GET_SKU_REQUESTED', handleGetSKU)
}

export default watcherGetSKU