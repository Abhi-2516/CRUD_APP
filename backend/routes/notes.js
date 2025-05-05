const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Create
router.post('/', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.status(201).json(note);
});

// Read
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Update
router.put('/:id', async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(note);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
