// Dependencies
// =============================================================
// Express router functions
const router = require("express").Router();
// Allows the ability to write and read files etc.
const fs = require('fs');
// Allows the generation of unique ids
const { v4: uuidv4 } = require('uuid');
// Get access to the Notes class to add, delete, and edit notes
const Notes = require('../lib/Notes');
const dbData = require('../db/db');

// API routes
// =============================================================
// Get the JSON file
router.get("/notes", (req, res) => {
    try {
        res.json(dbData);
        // res.json(Notes.readNotes());
    } catch (err) {
        res.status(500).end();
    }
});
// Edit the JSON file with the new note
router.post("/notes", async (req, res) => {
    try {
        const newID = uuidv4();
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: newID,
        }
        dbData.push(newNote);
        console.log(dbData);
        res.json(dbData);
    } catch (err) {
        res.status(500).end();
    }
});
// Delete the note with the specified UUID
router.delete("/notes/:id", (req, res) => {
    let noteIndex = dbData.findIndex( element => {
        return element.id == req.params.id
    });
    console.log(noteIndex);
    try {
        dbData.splice(noteIndex,1);
        res.json(dbData);
    } catch (err) {
        res.status(500).end();
    }
});

// Questions!
// Why doesn't the "Write new note" button allow me to write a new note

// Exports
// =============================================================
module.exports = router;