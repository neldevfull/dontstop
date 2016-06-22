import express from "express";


const PORT = 3000;
let   app  = express();

// Format JSON
app.set("json spaces", 4);

// Meets at the root
app.get("/", (req, res) => res.json({status: "DontStop API"}));

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            {title: "Go shopping!"},
            {title: "Clean the house"}
        ]
    });
});

// Run server
app.listen(PORT, () => console.log(`DontStop API - port ${PORT}`));