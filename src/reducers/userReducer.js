import { ActionsType } from "../actions/actionsType";
export class UserReducer extends ActionsType {
    static initialState = {
        list:[]
    }
    reducer = (state=UserReducer.initialState, action) => {
        switch (action.type) {
            case this.SET_LIST:
                return { ...state, list:state.list.concat(action.list)  }
            default:
                return state
        }
    }
}

