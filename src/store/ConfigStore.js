import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../saga/rootSaga';
import rootReducer from '../reducers/rootReducer';
const configureStore=()=>{
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
    return store
}
export default configureStore()