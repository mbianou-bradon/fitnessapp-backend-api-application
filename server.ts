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
// app.use(express.json);

// app.use((req, res, next)=>{
//     console.log(req.path, req.method);
//     next();
// });


// routes 


app.use("/api/exercises", exerciseRoutes);
app.use("/api/workout", workoutRoutes);

app.use('/', (req, res) => {
    const endpoints = {
      "/": "list of endpoint",
      "/api/workouts": "json of all workouts",
      "/api/exercises": "json of all exercises",
      "/api/exercises/:id": "create/update/delete and exercise",
      "/api/workouts/:id": "create/update/delete a category",
    }
   return res.status(200).json(endpoints);
})

  // 404
app.use((req, res) => {
    return res.status(404).json({message: '404 not found'});
} );
