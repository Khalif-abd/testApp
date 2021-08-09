import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { GetAuth } from "./reducers/Auth";
import { Errors } from "./reducers/Errors";
import { GetSalons } from "./reducers/GetSalons";
import { GetMasters } from "./reducers/GetMasters";
import { GetFavoriteSalons } from "./reducers/GetFavoritSalons";
import { GetFavoriteMasters } from "./reducers/GetFavoriteMasters";

const reducer = combineReducers({
  GetAuth,
  Errors,
  GetSalons,
  GetMasters,
  GetFavoriteSalons,
  GetFavoriteMasters,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
