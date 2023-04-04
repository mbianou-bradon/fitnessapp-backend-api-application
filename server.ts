if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import express from"express"
import mongoose from"mongoose"
import exerciseRoutes from"./routes/exerciseRoute"



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


// Connect to MongoDB

mongoose.connect(process.env.dbURI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log("Listening to server in port", process.env.PORT)
        })
        console.log("successfully connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })

