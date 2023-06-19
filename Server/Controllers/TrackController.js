import TrackModel from "../models/TrackModel.js";
import MusicianModel from "../models/MusicianModel.js";
import FavoriteTrackModel from "../models/FavoriteTrackModel.js";

export const Create = async (req,res) => {
    try {
        const name = req.body.name;
        const picture = req.body.picture;
        const audio = req.body.audio;
        const musicianName = req.body.musicianName;
        if (musicianName !== null) {
            const musician = await MusicianModel.findOne({"username": musicianName}).exec();
            if (musician == null) {
                res.status(404).json({"result" : user});
            } else {
                const track = new TrackModel({name: name, picture: picture, audio: audio, owner: musician._id});
                track.save();
                res.status(200).json({ok : true, description : ""});
            }
        } else {
            res.status(404).json({"musician": musicianName});
        }
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось создать данный трек!"
        })
    }
}

export const GetAll = async (req,res) => {
    try {
        let tracks = await TrackModel.find().exec();
        res.json(tracks);
    }catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить все треки!"
        })
    }
}

export const Update = async (req,res) => {
    try {
        const TrackId = req.body.id;
        await TrackModel.updateOne({_id:TrackId}, {name: req.body.name, picture: req.body.picture, audio: req.body.picture});
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось обновить данный трек!"
        })
    }
}

export const Delete = async (req,res) => {
    try {
        const TrackId = req.body.id;
        await TrackModel.findOneAndDelete({_id: TrackId}).exec();
        await FavoriteTrackModel.deleteMany({track: TrackId});
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось удалить данный трек!"
        })
    }
} 