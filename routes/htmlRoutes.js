// Dependencies
// =============================================================
const router = require("express").Router();
const path = require('path');

// HTML routes
// =============================================================
// Main page
router.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});
// Notes page
router.get("/notes", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    } catch (err) {
        res.status(500).end();
    }
});

// Home Page route
// =============================================================
// Redirect non-specified pages to home
router.get("*", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        res.status(500).end();
    }
});

// Exports
// =============================================================
module.exports = router;