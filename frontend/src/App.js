import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/notes');
    setNotes(res.data);
  };

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div>
      <h1>Notes CRUD App</h1>
      <NoteForm fetchNotes={fetchNotes} editNote={editNote} />
      <NoteList notes={notes} fetchNotes={fetchNotes} setEditNote={setEditNote} />
    </div>
  );
}

export default App;
