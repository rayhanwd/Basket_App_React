import {ActionTypes} from "../constants/action-types";

const initialState ={
    products:[
		{id:0,name:'apple'},
		{id:1,name:'banana'},
		{id:2,name:'Orange'},
		{id:3,name:'Guava'},
		{id:4,name:'Egg'}
	]
}

export const productReducer = (state= initialState,{type,payload})=> {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;
    }

}

export const selectProductReducer = (state={}, {type,payload})=> {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
            default:
            return state;
    }
}