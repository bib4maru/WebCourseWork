import {api} from ".";


export const getOneMusician = async (id) => {
    const {data} = await api.get(`/musician/${id}`);
    return data
}