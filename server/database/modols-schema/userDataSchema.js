import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true   // removes the spaces if entered
    },
    lastName: {
        type: String,
        required: true,
        trim: true   // removes the spaces if entered
    },
    email: {
        type: String,
        required: true,
        trim: true,
        Unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    }
});

const user = mongoose.model("user",userSchema);
export default user;
