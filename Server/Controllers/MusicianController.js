import {Musician} from "../models/MusicianModel.js";
import {Track} from "../models/TrackModel.js";
import {FvTrack} from "../models/FavoriteTrackModel.js";

export const Create = async (req,res) => {
    try {
        const username = req.body.username;
        const firstname = req.body.firstname;
        const surname = req.body.surname;
        const Samename = await Musician.find({ Username: username}).exec();
        if (Samename.length != 0) {
            res.status(500).json({
                msg: "Иcполнитель с таким псевдонимом уже существует!"
            })
        } else {
            const musician = new Musician({ Username: username, Firstname : firstname, Surname: surname });
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
        let musicians = await Musician.find().exec();
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
        const Samename = await Musician.find({username: newUsername}).exec();
        if (Samename.length != 0) {
            res.status(500).json({
                msg: "Иcполнитель с таким псевдонимом уже существует!"
            })
        } else {
            await Musician.updateOne({_id: MusicianId}, {username: newUsername, Firstname: req.body.Firstname, Surname: req.body.Surname});
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
        await Musician.findOneAndDelete({_id: MusicianId}).exec();
        const tracks = await Track.find({owner: MusicianId}).exec();
        tracks.map(async (track) => {
            await Track.findOneAndDelete({_id: track._id});
            await FvTrack.deleteMany({track: track._id});
        });
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось удалить данного исполнителя!"
        })
    }
}

export const GetOne = async (req,res) => {
    try {
        const id = req.body.id;
        const musician = await Musician.findById({ _id: id}).exec();
        res.json(musician);
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить исполнителя!"
        })
    }
}