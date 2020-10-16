import express from "express";
import entries from "./entries.mjs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!");
});

app.use("/api/v1/entries", entries);

app.listen(3000, () => console.log("Listening on port 3000"));
