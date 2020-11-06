import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


import rootReducer from './root-reducer'

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = []

if (process.env.NODE_ENV === 'development'){
  middleware.push(logger)
}

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

export default { store, persistor };