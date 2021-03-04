// Dependencies
// =============================================================
// Express router functions
const router = require("express").Router();
// Get access to the Notes class to add, delete, and edit notes
const Notes = require('../lib/Notes');

// API routes
// =============================================================
// Get the JSON file
router.get("/notes", (req, res) => {
    try {
        res.Notes.readNotes();
    } catch (err) {
        res.status(500).end();
    }
});
// Edit the JSON file with the new note
router.post("/notes", async (req, res) => {
    try {
        Notes.addNote(req.body.title,req.body.text);
        res.json(true);
    } catch (err) {
        res.status(500).end();
    }
});
// Delete the note with the specified UUID
router.delete("/notes/:id", (req, res) => {
    try {
        Notes.deleteNote(req.params.id)
        res.json(true);
    } catch (err) {
        res.status(500).end();
    }
});

// Exports
// =============================================================
module.exports = router;