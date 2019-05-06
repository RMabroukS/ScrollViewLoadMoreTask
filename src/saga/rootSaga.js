import { takeLatest } from 'redux-saga/effects'
import { ActionsType } from '../actions/actionsType';
import { getListSaga } from './list';
const type=new ActionsType()
function* rootSaga() {
  yield takeLatest(type.GET_LIST, getListSaga);
}

export default rootSaga;