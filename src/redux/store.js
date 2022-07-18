import { legacy_createStore as createStore } from "redux"
import { retailDataReducer } from "./retail/retailReducer"

const store = createStore(retailDataReducer)
store.subscribe(() => console.log(store.getState()))

export default store