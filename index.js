import express from "express";
const PORT = 3000;

const app = express();

app.get("/", (req, res) => res.json({status: "DontStop API"}));
app.listen(PORT, () => console.log(`DontStop API - port ${PORT}`));