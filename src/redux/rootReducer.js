import { combineReducers } from "redux";
import loginReducer from "./reducer";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
