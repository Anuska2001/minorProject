import * as skillAction from './actions';

export const setSkill = (skill)=>{
    return{
        type: skillAction.SET_SKILL,
        payload: skill
    }
}

export const updateSkill = (skill)=>{
    return{
        type: skillAction.UPDATE_SKILL,
        payload: skill
    }
}