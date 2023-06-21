import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./types/user.types";


export const selectUserProfileState=createFeatureSelector<UserState>('user')



export const selecUserProfile=createSelector(selectUserProfileState,state=>state.user)


export const selectLoadingprofile=createSelector(selectUserProfileState,state=>state.loading)
export const selectLoadedProfile=createSelector(selectUserProfileState,state=>state.loaded)