import user from "../database/modols-schema/userDataSchema.js";
import json from "body-parser";

const userLogIn_controller = async function (req, res) {
    try {
        const available_user = await user.findOne({ email: req.body.email, password: req.body.password });
        if (available_user) {
            res.status(200).json({ message: "user varifid successfully" , message:available_user});
        }
        else {
            res.status(401).json({ message: "user not found please enter correct craditiens or SignUp" });
            res.send(alert("user not found please enter correct craditiens or SignUp"));
        }
    } catch (error) {
        console.log("error while checking login", error);
    }
}

export default userLogIn_controller;