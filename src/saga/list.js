import {call, put, select } from 'redux-saga/effects'
import API from '../constainers/API';
import { UserAction } from '../actions/userAction';

const action = new UserAction()
const getList = action.getList
const setList = action.setList
const failList= action.failList
export function* getListSaga(action) {
  try {
    let resp = yield call(API.get,{ url: 'vald.php?id=82&page='+action.filter.page })
    let Jsonresp = yield resp.json()
    console.log("Jsonresp",Jsonresp)
    if (!resp.ok) {
      throw new Error(Jsonresp.message)
    }
    let isFinsh=Jsonresp.VendorAPI.length<1?true:false
    yield put(setList(Jsonresp.VendorAPI,isFinsh))
  } catch (error) {
    yield put(failList(error))
    alert(error)
  }
}
