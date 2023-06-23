import {FvTrack} from "../models/FavoriteTrackModel.js";
import {Track} from "../models/TrackModel.js";
import {Musician} from "../models/MusicianModel.js";
export const Create = async (req,res) => {
    try {
        const TrackId = req.body.track;
        const UserId = req.body.user;
        const SameTrack = await FvTrack.find({ownerUser: UserId, track:TrackId})
        if (SameTrack.length != 0) {
            res.status(500).json({
                msg: "Данный трек уже добавлен в коллекцию!"
            })
        } else {
            const fv_track = new FvTrack({ track: TrackId, ownerUser: UserId});
            fv_track.save();
            res.status(200).json({ok : true, description : ""});
        }
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
        const userId = req.params.id;
        await FvTrack.findOneAndDelete({_id: fv_trackId});
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
        const userId = req.params.id;
        const Userstracks = await FvTrack.find({ ownerUser: userId});
        const tracksId = Userstracks.map((track) => track.track);
        const musicians = await Musician.find();
        const Tracks = await Track.find({ _id: { $in: tracksId}});
        const result = Tracks.map((track) => {
            const musician = musicians.filter((musician) => musician._id.toString() === track.owner.toString());
            return {
                track: track,
                musician: musician[0].Username,
            };
        })
        res.json(result);
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить любимые треки!"
        })
    }
}