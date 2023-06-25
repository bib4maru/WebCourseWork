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
    filteredtracks: [],
    setTracks: (arr) => set ( () => {
        return {tracks: arr} 
    }),
    setFilteredTracks: (arr) => set ( () => {
        return {filteredtracks: arr} 
    })
}))

export const useSingleMusician = create (set => ({
    musician: {},
    setMusician: (obj) => set ( () => {
        return {musician: obj} 
    }),
}))

export const useFvTracks = create(set => ({
    fvtracks: [],
    filteredtracks: [],
    setTracks: (arr) => set ( () => {
        return {fvtracks: arr} 
    }),
    setFilteredTracks: (arr) => set ( () => {
        return {filteredtracks: arr} 
    })
}))

export const useUsers = create(set => ({
    users: [],
    setUsers: (arr) => set ( () => {
        return {users: arr} 
    })
}))

export const useMusicians = create(set => ({
    musicians: [],
    setMusicians: (arr) => set ( () => {
        return {musicians: arr} 
    })
}))