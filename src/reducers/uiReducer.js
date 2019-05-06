import { ActionsType } from "../actions/actionsType";
export class UiReducer extends ActionsType {
    static initialState = {
        isLoading: false,
        page:1,
        isFinsh:false
    }
    reducer = (state=UiReducer.initialState, action) => {
        switch (action.type) {
            case this.GET_LIST:
                return { ...state, isLoading: true }
            case this.SET_LIST:
                return { ...state, isLoading: false,isFinsh:action.isFinsh }
                case this.FAIL_LIST:
                return { ...state, isLoading: false }
            default:
                return state
        }
    }
}