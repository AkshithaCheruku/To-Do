// store.js

import { createStore } from 'redux';
import todoReducer from './reducers'; // Corrected import statement

const store = createStore(todoReducer);

export default store;
