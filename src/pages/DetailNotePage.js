import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetail from "../components/Notes/Details/NoteDetail";
import NoteDetailActions from "../components/Notes/Details/NoteDetailActions";

const DetailNotePage = () => {
  const { noteId } = useParams();

  const noteInit = getNote(noteId);
  const [note] = useState(noteInit);

  if (!noteInit) {
    return <Navigate to="404" />;
  }

  return (
    <section className="note-page note-detail-page">
      <h2 className="note-page__heading">Catatan</h2>
      <NoteDetail {...note} />
      <NoteDetailActions {...note} />
    </section>
  );
};

export default DetailNotePage;
