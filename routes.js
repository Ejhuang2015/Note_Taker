const router = require("express").Router();
const path = require('path');
const dbData = require('./db/db');

// HTML routes
// =============================================================
// Main page
router.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});
// Notes page
router.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, '/public/notes.html'));

});

// API route
// =============================================================
// Get the JSON file
router.get("/api/notes", (req, res) => {
    try {
        res.json(dbData);
    } catch (err) {
        res.status(500).end();
    }
});

// Edit the JSON file by saving
router.post("/api/notes", async (req, res) => {
    try {
        dbData.push(req.body);
        res.json(true);
    } catch (err) {
        res.status(500).end();
    }
});

router.delete("/")

// Home Page route
// =============================================================
// Redirect non-specified pages to home
router.get("*", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});

module.exports = router;