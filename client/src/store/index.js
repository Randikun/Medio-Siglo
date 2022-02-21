import createStore from "redux";
import rootReducer from "../reducer"
import thunk from "redux-thunk"

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
export default store;
