import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import experienceReducer from './experienceReducer';

const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    experience: experienceReducer
})

export default rootReducer;