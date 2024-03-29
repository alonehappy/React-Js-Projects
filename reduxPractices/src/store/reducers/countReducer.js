
import ACTIONS from '../actions/actionType'

const countReducer = (state = 0,action)=>{
    if(action.type===ACTIONS.ADD){
        return state+1
    }if(action.type===ACTIONS.SUBTRACT){
        return state-1
    }if(action.type===ACTIONS.ADD_NUM){
        return state+action.payload
    }if(action.type===ACTIONS.RESET){
        return (state=0);
    }
    return state;
};


export default countReducer