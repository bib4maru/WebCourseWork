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

export const useTracks = create(set => ({
    tracks: [],
    setTracks: (arr) => set ( () => {
        return {tracks: arr} 
    })
}))

export const useSingleMusician = create (set => ({
    musician: {},
    setMusician: (obj) => set ( () => {
        return {musician: obj} 
    }),
}))