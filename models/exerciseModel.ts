import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter exercise name"],
        unique: [true, "Exercise name must be unique. Please enter a different exercise name"]
    },
    desc: {
        type: String,
        required: [true, "Please give a short description of the exercise"],
    },
    duration: {
        type: Number,
        required: [true, "Please enter exercise duration"],
    },
    restTime: {
        type: Number,
        required: [true, "Please enter rest time duration"]
    },
    imgUrl: {
        type: String,
        required: [true, "Please enter an Image for the exercise"],
    },
});


const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;