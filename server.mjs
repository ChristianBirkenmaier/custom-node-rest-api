import express from "express";
import entries from "./entries.mjs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!");
});

app.use("/api/v1/workentry", entries);

app.listen(8080, () => console.log("Listening on port 8080"));
