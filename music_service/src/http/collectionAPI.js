import {api} from ".";

export const getAllFvTracks = async (_id) => {
    const {data} = await api.get(`/fvtracks/${_id}`);
    return data
}

export const addtoCollection = async (UserId,track) => {
    const {data} = await api.post("/fvtrack/create", {user: UserId, track: track});
    return data
}

export const deleteFvTrack = async (UserId,trackId) => {
    const {data} = await api.delete("/fvtrack/delete", {data: { user: UserId, track: trackId }});
    return data
}