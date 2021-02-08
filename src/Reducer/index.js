import { createStore, combineReducers } from "redux";
import { idClientReducer } from "./idClient";
import { infosClientReducer } from "./infosClient";
import { tokenClientReducer } from "./tokenClient";

const mainReducer = combineReducers({
  idClientReducer,
  infosClientReducer,
  tokenClientReducer,
});

export const store = createStore(mainReducer);
