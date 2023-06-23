import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import cors from "cors";
import {UserController, TrackController, MusicianController,FavoriteTrackController} from "./Controllers/final.js";
import {CheckAuth, CheckAdminRole,CheckManagerRole} from "./utils/final.js";

mongoose.connect('mongodb://127.0.0.1/music_service')
    .then(() => {console.log("DB is working!")})
    .catch((err) => {console.log("DB is dont working! Error: ",err)})

const app = express();
app.use(express.json());
app.use(cors());

app.use('/media/', express.static('Media'));


const ImgStorage = multer.diskStorage({
    destination: (_,file,cb) => {
        cb(null,"Media/Images");
    },
    filename: (_,file,cb) => {
        cb(null,file.originalname);
    }
})

const AudioStorage = multer.diskStorage({
    destination: (_,file,cb) =>  {
        cb(null,"Media/Audio");
    },
    filename: (_,file,cb) => {
        cb(null,file.originalname);
    }
})

var ImgUpload = multer({storage: ImgStorage});
var AudioUpload = multer({storage:AudioStorage});

//Действия пользователя
app.post("/login",UserController.Login);
app.get("/tracks",CheckAuth,TrackController.GetAll);
app.get("/musician/:id",CheckAuth,MusicianController.GetOne);
app.post("/fvtrack/create",CheckAuth,FavoriteTrackController.Create);
app.get("/fvtracks/:id",CheckAuth,FavoriteTrackController.GetAll);
app.delete("/fvtrack/delete",FavoriteTrackController.Delete);

//Действия контент менеджера
app.post("/track/create",TrackController.Create);
app.delete("/track/delete",TrackController.Delete);
app.patch("/track/edit", TrackController.Update);

app.post("/musician",MusicianController.Create);
app.get("/musicians",MusicianController.GetAll);
app.patch("musician/edit",MusicianController.Update);
app.delete("/musician/delete",MusicianController.Delete);

app.post("/media/image",ImgUpload.single("image"));
app.post("/media/audio",AudioUpload.single("audio"));

//Действия администратора
app.post("/user/create",UserController.Create);
app.get("/users",UserController.GetAll);
app.delete("/user/delete",UserController.Delete);

app.listen(5500,(err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server is working!");
} )