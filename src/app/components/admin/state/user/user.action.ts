import { createAction, props } from "@ngrx/store";

import { User } from "../types/user.type";


export const loaduser=createAction('userload')
export const loaduserSucces=createAction('loadusersycces',props<{users:readonly User[]}>())
export const loaduserFailure=createAction("loaduserfailure",props<{error:any}>())

export const addUser=createAction("adduser",props<{user:User}>())
export const addUserSuccess=createAction("addusersuccess",props<{user:User}>())
export const addUserFailure=createAction("adduserfailure",props<{error:any}>())

export const RemoveUser=createAction("removeuser",props<{id:string}>())
export const RemoveUserSuccess=createAction("removeusersuccess",props<{id:string}>())
export const RemoveUserFailure=createAction('removeuserfailure',props<{error:any}>())