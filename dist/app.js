import express from "express";
import router from "./app/routes/index.js";
const app = express();
//perser ---
app.use(express.json());
// routes ----------------
app.use('/api/v1', router);
app.get("/", async (req, res) => {
    res.send("Server is runnig");
});
export default app;
//# sourceMappingURL=app.js.map