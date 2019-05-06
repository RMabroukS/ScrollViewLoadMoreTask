import { ActionsType } from "./actionsType";
export class UserAction extends ActionsType {

    getList = (filter) => {
        return {
            type: this.GET_LIST,
            filter
        }
    }
    setList = (list,isFinsh) => {
        return {
            type: this.SET_LIST,
            list,
            isFinsh
        }
    }
    failList= (error) => {
        return {
            type: this.FAIL_LIST,
            error
        }
    }
}