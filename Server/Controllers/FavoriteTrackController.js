import FavoriteTrackModel from "../models/FavoriteTrackModel.js";

export const Create = async (req,res) => {
    try {
        const TrackId = req.body.track;
        const UserId = req.body.user;
        const fv_track = new FavoriteTrackModel({track: TrackId, ownerUser: UserId});
        fv_track.save();
        res.status(200).json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось добавить любимый трек!"
        })
    }
}

export const Delete = async (req,res) => {
    try {
        const fv_trackId = req.body.track;
        await FavoriteTrackModel.findOneAndDelete({_id: fv_trackId});
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось удалить любимый трек!"
        })
    }
}

export const GetAll = async (req,res) => {
    try {
        let tracks = await FavoriteTrackModel.find().exec();
        res.json(tracks);
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить любимые треки!"
        })
    }
}