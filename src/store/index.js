import React from "react";
import { createStore } from "redux";
import rootReducers from "../reducers/index";

var store = createStore(rootReducers);

export default store;
