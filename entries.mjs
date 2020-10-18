import express from "express";
import fakeDB from "./db/fakeDB.mjs";
import Entry from "./Entry.mjs";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(fakeDB.getAll());
});

router.get("/:id", (req, res) => {
    res.send(fakeDB.get(req.params.id));
});

router.post("/", (req, res) => {
    const {
        id,
        categoryName,
        projectName,
        fromDate,
        untilDate,
        optionalText,
    } = req.body;
    const entry = new Entry(
        id,
        categoryName,
        projectName,
        fromDate,
        untilDate,
        optionalText
    );
    const savedEntry = fakeDB.insert(entry);
    return res.json(savedEntry);
});
router.put("/:id", (req, res) => {
    const entry = req.body;
    const id = req.params.id;
    const updatedEntry = fakeDB.update(id, entry);
    return res.json(updatedEntry);
});

router.patch("/:id", (req, res) => {
    const entry = req.body;
    const id = req.params.id;
    const patchedEntry = fakeDB.patch(id, entry);
    return res.json(patchedEntry);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const updatedDB = fakeDB.remove(id);
    return res.json(updatedDB);
});

export default router;
