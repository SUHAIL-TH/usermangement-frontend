
export interface User{
    _id:string,
    name:string,
    email:string,
    password:number
}

export interface UserState{
    users:ReadonlyArray<User>,
    loading:boolean,
    loaded:boolean,
    error:any

}