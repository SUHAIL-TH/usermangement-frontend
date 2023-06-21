
export interface User{
    _id:string,
    name:string,
    email:string,
    password:string,
    image : string
}

export interface UserState{
    users:ReadonlyArray<User>,
    loading:boolean,
    loaded:boolean,
    error:any

}