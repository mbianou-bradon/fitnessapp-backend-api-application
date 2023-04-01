import express from "express";

const app = express()

app.listen(3000, ()=> {
    console.log("Listerning Server at Port 3000")
})

export default app;