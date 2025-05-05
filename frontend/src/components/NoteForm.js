import { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ fetchNotes, editNote }) => {
  const [title, setTitle] = useState(editNote?.title || '');
  const [content, setContent] = useState(editNote?.content || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return alert("Title required");

    if (editNote) {
      await axios.put(`http://localhost:5000/api/notes/${editNote._id}`, { title, content });
    } else {
      await axios.post('http://localhost:5000/api/notes', { title, content });
    }
    setTitle('');
    setContent('');
    fetchNotes();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">{editNote ? "Update" : "Add"}</button>
    </form>
  );
};

export default NoteForm;
