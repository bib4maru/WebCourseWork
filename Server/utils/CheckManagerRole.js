export default (req,res, next) => {
    if (req.role == "Content manager") {
        next();
    } else {
        return res.status(403).json({
            msg: "Нет доступа к данному действию"
        });
    }
}