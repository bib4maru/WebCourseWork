import MusicianModel from "../models/MusicianModel.js";
import TrackModel from "../models/TrackModel.js";
import FavoriteTrackModel from "../models/FavoriteTrackModel.js";

export const Create = async (req,res) => {
    try {
        const username = req.body.username;
        const Firstname = req.body.Firstname;
        const Surname = req.body.Surname;
        const Samename = await MusicianModel.find({username: username}).exec();
        if (Samename.length != 0) {
            res.status(500).json({
                msg: "Иcполнитель с таким псевдонимом уже существует!"
            })
        } else {
            const musician = new MusicianModel({username: username, Firstname: Firstname, Surname: Surname});
            musician.save();
            res.status(200).json({ok : true, description : ""});
        }
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось добавить исполнителя!"
        })
    }
}

export const GetAll = async (req,res) => {
    try {
        let musicians = await MusicianModel.find().exec();
        res.json(musicians);
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить всех исполнителей!"
        })
    }
}

export const Update = async (req,res) => {
    try {
        const newUsername = req.body.username;
        const MusicianId = req.body.id;
        const Samename = await MusicianModel.find({username: newUsername}).exec();
        if (Samename.length != 0) {
            res.status(500).json({
                msg: "ИСполнитель с таким псевдонимом уже существует!"
            })
        } else {
            await MusicianModel.updateOne({_id: MusicianId}, {username: newUsername, Firstname: req.body.Firstname, Surname: req.body.Surname});
            res.json({ok : true, description : ""});
        }
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось обновить данного исполнителя!"
        })
    }
}

export const Delete = async (req,res) => {
    try {
        const MusicianId = req.body.id;
        await MusicianModel.findOneAndDelete({_id: MusicianId}).exec();
        const tracks = await TrackModel.find({owner: MusicianId}).exec();
        tracks.map(async (track) => {
            await TrackModel.findOneAndDelete({_id: track._id});
            await FavoriteTrackModel.deleteMany({track: track._id});
        });
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось удалить данного исполнителя!"
        })
    }
}