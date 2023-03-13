import {createStore,applyMiddleware} from "redux"
import rootReducer from "./reducers/rootReducer"
import {composeWithDevTools} from "redux-devtools-extension"  //ye help karega to connect with reduxDevtools extension se link karne me
import thunk from "redux-thunk"
const middleware = [thunk]   // middleware is an array of thunk


const store = createStore(         //createStore(rootReducer , middleware )  ko pass karte hai
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)  

export default store;
