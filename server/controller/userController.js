import json from "body-parser";
import user from "../database/modols-schema/userDataSchema.js";
//both frontend and backend send api to each other for communicating
export const userSignup = async function (req, res) {       //backend api
   try {
      const new_user = new user(req.body);
      const old_user = await user.findOne({ email: req.body.email });
      if (old_user) {
         return res.status(401).json({ message: "User already exist,please Login" });
      }
      else {
         await new_user.save();
         res.status(200).json({ message: user });
      }
      console.log("user added successfully");
   } catch (error) {
      res.status(500).json({ error });
   }
}

export default userSignup;