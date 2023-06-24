import {api} from ".";
import jwt_decode from "jwt-decode";

export const login = async (login,password) => {
    const {data} = await api.post("/login", {login: login,password: password});
    localStorage.setItem("token",data.token);
    return jwt_decode(data.token);
}

export const addUser = async (Login,password,role) => {
    const {data} = await api.post("/user/create", {login: Login, password: password, role: role});
    return data
}

export const getAllUsers = async (id) => {
    const {data} = await api.get(`/users${id}`);
    return data
}

export const deleteUser = async (id) => {
    const {data} = await api.delete("/user/delete", { data: {id: id}});
    return data
}