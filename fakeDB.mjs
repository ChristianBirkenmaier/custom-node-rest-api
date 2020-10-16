import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const DB_NAME = "fakeDB.json";

// const DB = JSON.parse(fs.readFileSync("./fakeDB.json"));

function getDB() {
    return JSON.parse(fs.readFileSync("./fakeDB.json"));
}

function saveDB(DB) {
    fs.writeFileSync(DB_NAME, JSON.stringify(DB));
}

function getAll() {
    const DB = getDB();
    return [...DB];
}

function get(id) {
    const DB = getDB();
    return DB.find((el) => el.id == id);
}

function insert(entry) {
    const DB = getDB();
    // const dbEntry = { id: uuidv4(), ...entry };
    const dbEntry = { ...entry };
    DB.push(dbEntry);
    saveDB(DB);
    return dbEntry;
}

function update(id, entry) {
    const DB = getDB();
    const foundEntryIndex = DB.findIndex((el) => el.id == id);
    const updatedEntry = { id, ...entry };
    DB[foundEntryIndex] = updatedEntry;
    saveDB(DB);
    return updatedEntry;
}

function patch(id, entry) {
    const DB = getDB();
    const foundEntryIndex = DB.findIndex((el) => el.id == id);
    const updatedEntry = { id, ...DB[foundEntryIndex], ...entry };
    DB[foundEntryIndex] = updatedEntry;
    saveDB(DB);
    return updatedEntry;
}

function remove(id) {
    const DB = getDB();
    DB.filter((el) => el.id != id);
    saveDB(DB);
    return DB;
}

const fakeDB = { getAll, get, insert, update, remove, patch };

export default fakeDB;
