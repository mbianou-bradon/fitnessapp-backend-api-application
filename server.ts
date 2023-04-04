import * as dotenv from "dotenv"
import express from"express"
import mongoose from"mongoose"
import exerciseRoutes from"./routes/exerciseRoute"


if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const app = express()

// app.listen(3000, ()=> {
//     console.log("Listerning Server at Port 3000")
// })

// middleware
app.use(express.json);

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});


// routes 

app.use("/api/exercises", exerciseRoutes);


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

