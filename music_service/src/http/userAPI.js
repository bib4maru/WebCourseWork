import {api} from ".";
import jwt_decode from "jwt-decode";

export const login = async (login,password) => {
    const {data} = await api.post("/login", {login,password});
    localStorage.setItem("token",data.token);
    return jwt_decode(data.token);
}