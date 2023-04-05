import express from"express"
import mongoose from"mongoose"
import exerciseRoutes from"./routes/exerciseRoute"
import workoutRoutes from "./routes/workoutRoutes"


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: "./vars/.env"})
}

const app = express()

const PORT = process.env.PORT;
const DBURI = process.env.dbURI


        
// Connect to MongoDB

mongoose.connect(DBURI)
    .then(()=>{
        app.listen(PORT, ()=>{
    console.log("Listening to server in port", PORT)
        })
       console.log("successfully connected to database")

    })
    .catch((err)=>{
        console.log(err)
    })


// // middleware
app.use(express.json);

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});


// Different routes 


app.use("/api/exercises", exerciseRoutes);
app.use("/api/workouts", workoutRoutes);

app.use('/', (req, res) => {

    const endPoints = {
      "/": "list of endpoint",
      "/api/workouts": "JSON of all Workouts",
      "/api/exercises": "JSON of all Exercises",
      "/api/exercises/:id": "GET /CREATE / DELETE / UPDATE an Exercise",
      "/api/workouts/:id": "GET /CREATE / DELETE / UPDATE a category",
    }
   return res.status(200).json(endPoints);
})

  // 404
app.use((req, res) => {
    return res.status(404).json({message: '404 not found'});
} );
