import axios from 'axios';

const NoteList = ({ notes, fetchNotes, setEditNote }) => {
  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setEditNote(note)}>Edit</button>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
