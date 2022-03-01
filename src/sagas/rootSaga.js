import { all } from 'redux-saga/effects'
import watcherGetSKU from './handlers/fetchSKU'

export default function* rootSaga() {
    yield all([watcherGetSKU()])
}