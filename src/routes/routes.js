const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  addNote,
  deleteNote,
} = require("../controller/noteController");

router.get("/notes", getAllNotes);
router.post("/notes", addNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
