import express, { type Application } from "express";
const app: Application = express();

//perser ---
app.use(express.json());

app.get("/", async(req, res) =>{
    res.send("Server is runnig")
})


export default app;