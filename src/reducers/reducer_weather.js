import { FETCH_WEATHER } from "../actions/index";

export default (state = [] ,action)=>{
    switch(action.type){
        case FETCH_WEATHER:
            return [action.payload.data,...state]

    }
    console.log('action received',action)
    return state
}