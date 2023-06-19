import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import FavoriteTrackModel from "../models/FavoriteTrackModel.js";

const secretkey = "aboba1337";

export const Create = async (req,res) => {
    try {
        const login = req.body.login;
        const password = req.body.password;
        const salt = await bcrypt.genSalt(7);
        const hashpassword = await bcrypt.hash(password,salt);
        const role = req.body.role;
        const Samelogin = await UserModel.find({login: login}).exec();
        if (Samelogin.length != 0) {
            res.status(500).json({
                msg: "Пользователь с таким логином уже существует!"
            })
        } else {
            const user = new UserModel({login: login, password: hashpassword, role: role});
            user.save();
            res.status(200).json({ok : true, description : ""});
        }
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось добавить пользователя!"
        })
    }
}

export const Login = async (req,res) => {
    try {
        const password = req.body.password;
        const user = await UserModel.find({login: req.body.login});
        if (!user) {
            return res.status(404).json({
                msg: 'Неверный логин или пароль'
            });
        }

        const ValidPassword = bcrypt.compareSync(password,user.password);
        if (!ValidPassword) {
            return res.status(403).json({
                msg: 'Неверный логин или пароль'
            });
        }

        const token = jwt.sign({
            _id: user._id,
            _role: user.role
        },secretkey,
        {
            expiresIn:"30d",
        });

        res.json({token})
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось авторизоваться!"
        })
    }
}

export const GetAll = async (req,res) => {
    try {
        let users = await UserModel.find().exec();
        res.json(users);
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось получить пользователей!"
        })
    }
}

export const Delete = async (req,res) => {
    try {
        const UserId = req.body.id;
        await UserModel.findOneAndDelete({_id: UserId}).exec();
        await FavoriteTrackModel.deleteMany({ownerUser: UserId});
        res.json({ok : true, description : ""});
    } catch (e) {
        console.log("Error: ",e);
        res.status(500).json({
            msg: "Не удалось удалить пользователя!"
        })
    }
}