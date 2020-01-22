import { combineReducers } from 'redux';
import {Counter,CountryList} from './reducer';

export default combineReducers({
    Counter,
    CountryList
})