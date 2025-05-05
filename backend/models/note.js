const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
});
module.exports = mongoose.model('Note', NoteSchema);
