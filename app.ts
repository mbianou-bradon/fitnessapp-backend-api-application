import mongoose from "mongoose"
import app from "./server"
import Exercise from "./models/exerciseModel"
import { exerciseData } from "./data/exerciseData"
import { getAllExercises, getExercise } from "./controllers/exerciseController"


// console.log(exerciseData)

// Connect to MongoDB

const dbURI = "mongodb+srv://bradon:juniorR5@fitness-app.nxlscdu.mongodb.net/fitness-app?retryWrites=true&w=majority"

mongoose.connect(dbURI)
    .then(()=>{
        app.listen(3000, ()=>{
            console.log("Listening to server in port 3000")
        })
        console.log("successfully connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })

app.get('/', getExercise);
app.get('/allexercises', getAllExercises)

console.log(exerciseData.length)