import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

export const useUser = create(persist(devtools(set => ({
    role : "",
    id: "",
    isAuth: false,
    errorMessage: "",
    SetIsAuth: (bool) => set( () => {
        return {isAuth : bool}
    }),
    SetRole : (obj) => set( () => {
        return {role : obj}
    }),
    SetMes : (bool) => set( () => {
        return {errorMessage : bool}}
    ),
    SetId : (obj) => set( () => {
        return {id: obj}
    })
})),
    {name: "user-storage" }
))