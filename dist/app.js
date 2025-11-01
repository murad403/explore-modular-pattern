import express, {} from "express";
const app = express();
//perser ---
app.use(express.json());
app.get("/", async (req, res) => {
    res.send("Server is runnig");
});
export default app;
//# sourceMappingURL=app.js.map