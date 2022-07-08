import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducersSlices } from "./slices";
import thunk from "redux-thunk";

const composeEnchancers =
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers(reducersSlices);

export const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
