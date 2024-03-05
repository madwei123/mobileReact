import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector, shallowEqual } from 'react-redux'
import homeReducer from './home'
const store = configureStore({
  reducer: {
    homeReducer
  }
})
type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowAppEqual = shallowEqual
export default store
