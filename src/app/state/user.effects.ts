import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { loadprofile, loadprofilefailure, loadprofilesuccess } from "./user.action";
import { catchError, map, of, switchMap } from "rxjs";
import { Profile } from "./types/user.types";




@Injectable()
export class ProfileEffects{
    loadprofile$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadprofile),
            switchMap(()=>this.userService.getprofile().pipe(
                map(user => (
                   loadprofilesuccess({ user: user as Profile }))),
                catchError((error) => of(loadprofilefailure({ error })))
            ))
        )
    })

    constructor(private actions$:Actions,private userService:UserService){

    }

}