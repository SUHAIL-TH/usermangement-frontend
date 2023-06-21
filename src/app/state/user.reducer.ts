import { createReducer, on } from "@ngrx/store";
import { UserState } from "./types/user.types";
import * as profileAction from './user.action'







export const intialState:UserState={
    user: {
        _id: '',
        name: "",
        email: "",
        password: '',
        image : ''
    },
    loading: false,
    loaded: false,
    error: null
}

export const profileReducer=createReducer(
    intialState,
    on(profileAction.loadprofile,(state)=>(
        {...state,loading:true}
    )),
    on(profileAction.loadprofilesuccess,(state,{user})=>(
        {...state,loading:false,loaded:true,user}
    )),
    on(profileAction.loadprofilefailure,(state,{error})=>(
        {...state,loading:false,error}
    ))
)