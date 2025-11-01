import express, { type Application } from "express";
import router from "./app/routes/index.js";
const app: Application = express();

//perser ---
app.use(express.json());

// routes ----------------
app.use('/api/v1', router);

app.get("/", async(req, res) =>{
    res.send("Server is runnig")
})

export default app;