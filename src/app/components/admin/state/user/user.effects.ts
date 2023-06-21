
import { Injectable } from "@angular/core";
import { createEffect ,Actions, ofType} from "@ngrx/effects";
import * as UserActions from '../user/user.action'


import {User} from '../types/user.type'
import { UserService } from "src/app/service/user.service";
import { catchError, map, of, switchMap } from "rxjs";




@Injectable()

export class UserEffect{
  
    loadUser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.loaduser),
            switchMap(()=>
            this.userService.getuser().pipe(
                map(users=>(console.log(users), UserActions.loaduserSucces({users:users as ReadonlyArray<User>}))),
                catchError((error)=>of(UserActions.loaduserFailure({error})))
            )) 
        )
    })
    removeuser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.RemoveUser),
            switchMap(payload=>
                this.userService.deleteUser(payload.id).pipe(
                    map(data=>UserActions.RemoveUserSuccess({id:payload.id}), console.log(payload)),
                    catchError(error=>of(UserActions.RemoveUserFailure({error})))
                ))
        )
    })

    
    

    constructor(private actions$:Actions,private userService:UserService){}
   
}