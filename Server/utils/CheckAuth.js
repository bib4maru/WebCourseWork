import jwt from "jsonwebtoken";

export default (req,res,next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/,"");

    if (token) {
        try {
            const decoded = jwt.verify(token,"aboba1337");
            req.userId = decoded._id;
            req.role = decoded._role;
            next();
        } catch(e) {
            return res.status(403).json({
                msg:"Нет доступа",
            });
        }
    } else {
        return res.status(403).json({
            msg:"Нет доступа",
        });
    }
}