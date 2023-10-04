import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantreducer";
//creating reducer

const reducers=combineReducers({
restaurantreducer:restaurantListReducer

})
//create middle ware

const middleware=[thunk]

//craete store
const store=createStore(reducers,applyMiddleware(...middleware))


export default store