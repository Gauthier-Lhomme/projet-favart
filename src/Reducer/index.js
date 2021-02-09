import { createStore, combineReducers } from "redux";
import { idClientReducer } from "./idClient";
import { infosClientReducer } from "./infosClient";

const mainReducer = combineReducers({
  idClientReducer,
  infosClientReducer,
});

export const store = createStore(mainReducer);
