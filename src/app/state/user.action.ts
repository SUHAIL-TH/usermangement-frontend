import { createAction, props } from "@ngrx/store";
import { Profile } from "./types/user.types";



export const loadprofile=createAction('userprofile')
export const loadprofilesuccess=createAction("loadprofilesuccess",props<{user:Profile}>())
export const loadprofilefailure=createAction("loadprofilefailure",props<{error:any}>())
