import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import experienceReducer from './experienceReducer';
import skillReducer from './skillReducer';

const rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    experience: experienceReducer,
    skill: skillReducer
})

export default rootReducer;