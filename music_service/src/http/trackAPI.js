import {api} from ".";


export const getAllTracks = async () => {
    const {data} = await api.get("/tracks");
    return data;
}

export const DownloadAudio = async (url,title) => {
    const response = await fetch(url);
    if (response.status === 200) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = title;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}

export const CreateImage = async (file) => {
    let bodyFormdata = new FormData();
    bodyFormdata.append("image",file);

    const {data} = await api.post("/media/image", bodyFormdata);
    return data
}

export const CreateAudio = async (file) => {
    let bodyFormdata = new FormData();
    bodyFormdata.append("audio",file);

    const {data} = await api.post("/media/audio", bodyFormdata);
    return data
}

export const createTrack = async (name,picture,audio,musician) => {
    const {data} = await api.post("/track/create", {name: name, picture: picture, audio: audio, musicianName: musician});
    return data
}

export const deleteTrack = async (id) => {
    const {data} = await api.delete("/track/delete", {data: {id: id}});
    return data
}
export const getOne = async (id) => {
    const {data} = await api.get("/track", { params: { id: id } });
    return data
}

export const Edit = async (name,picture,audio) => {
    const {data} = await api.patch("/track/edit", {name: name, picture: picture, audio: audio});
    return data
}