import { combineReducers } from 'redux';
import { langReducer } from './langReducer';

export default combineReducers({
    lang: langReducer
})
