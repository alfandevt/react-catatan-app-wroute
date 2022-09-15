import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteForm from "../components/Notes/Forms/NoteForm";

const EditNotePage = () => {
  const { noteId } = useParams();

  const noteInit = getNote(noteId);
  const [note] = useState(noteInit);

  if (!noteInit) {
    return <Navigate to="404" />;
  }

  return (
    <section className="note-page add-note-page">
      <h2 className="note-page__heading">Ubah Catatan</h2>
      <NoteForm {...note} editMode={true} />
    </section>
  );
};

export default EditNotePage;
