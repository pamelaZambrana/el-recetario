import { redirect } from "react-router";

export async function authFunction(){
    const user  = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if ( !user ){
        return redirect("/login");
    }else{
        return null
    }
    ;
};