import { createReducer, on } from "@ngrx/store";
import { UserState } from "../types/user.type";

import * as userAction from '../user/user.action'




export const intialState:UserState={
    users:[],
    loading:false,
    loaded:false,
    error:null
}

export const userReducer=createReducer(
    intialState,
    on(userAction.loaduser,(state)=>(
        {...state,loading:true}
    )),
    on(userAction.loaduserSucces,(state,{users})=>(
        {...state,loading:false,loaded:true,users}
    )),
    on(userAction.loaduserFailure,(state,{error})=>(
        {...state,loading:false,error}
    )),
    on(userAction.addUser,(state,{user})=>(
        {...state,loading:true,loaded:false}
    )),
    on(userAction.addUserSuccess,(state,{user})=>(
        {...state,loaded:true,loading:true,user}
    )),
    on(userAction.addUserFailure,(state,{error})=>(
        {...state,loaded:false,loading:false,error}
    )),
    on(userAction.RemoveUser,(state,{id})=>(
        {...state,loading:true,loaded:false} 
    )),
    on(userAction.RemoveUserSuccess,(state,{id})=>(
        {...state,loading:false,loaded:true , users : state.users.filter(a => a._id !== id)}
    )),
    on(userAction.RemoveUserFailure, (state, {error}) =>
     ({...state, loading : false, loaded : true, error })),
    

  
)