import {api} from ".";


export const getAllTracks = async () => {
    const {data} = await api.get("/tracks");
    return data;
}