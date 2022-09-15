import React from "react";
import NoteForm from "../components/Notes/Forms/NoteForm";

const AddNotePage = () => {
  return (
    <section className="note-page add-note-page">
      <h2 className="note-page__heading">Catatan Baru</h2>
      <NoteForm editMode={false} />
    </section>
  );
};

export default AddNotePage;
