import {api} from ".";


export const getOneMusician = async (id) => {
    const {data} = await api.get(`/musician/${id}`);
    return data
}

export const getAllMusicians = async () => {
    const {data} = await api.get("/musicians");
    return data
}

export const Create = async (username,firstname,surname) => {
    const {data} = await api.post("/musician", {username: username, firstname: firstname, surname: surname});
    return data
}

export const Delete = async (id) => {
    const {data} = await api.delete("/musician/delete", {data:{id: id}});
    return data
}

export const Edit = async (id, username,Firstname,Surname) => {
    const {data} = api.patch("/musician/edit", {id: id, username: username, Firstname: Firstname, Surname: Surname});
    return data
}