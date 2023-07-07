import { redirect } from "react-router";

export async function authFunction(){
    const user  = JSON.parse(localStorage.getItem("user"));
    if ( !user ){
        return redirect("/login");
    }else{
        return null
    };
};
export async function loginFunction(){
    const user  = JSON.parse(localStorage.getItem("user"));
    if ( user ){
        return redirect("/");
    }else{
        return null
    };

};