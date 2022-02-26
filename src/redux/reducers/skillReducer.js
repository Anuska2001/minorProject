import * as skillAction from '../actions/actions';
import initialState from './initialState.json';

const skillReducer = (state=initialState.experience,action)=>{
    switch(action.type){
        case skillAction.SET_SKILL:
            return {...action.payload}
        case skillAction.UPDATE_SKILL:
            return {...action.payload}
        default: return state
    }
};

export default skillReducer;