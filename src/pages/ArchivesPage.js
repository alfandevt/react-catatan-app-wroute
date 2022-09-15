import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { filterList } from "../utils";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/Notes/List/NoteList";
import SearchBox from "../components/Notes/SearchBox/SearchBox";

const ArchivesPage = () => {
  const [searchParams] = useSearchParams();
  const [notes, setNotes] = useState(getArchivedNotes());

  useEffect(() => {
    const title = searchParams.get("title");
    if (title) {
      const filteredNotes = filterList(getArchivedNotes(), "title", title);
      setNotes(filteredNotes);
    } else {
      setNotes(getArchivedNotes());
    }
  }, [searchParams]);

  return (
    <section className="note-page arhives-page">
      <h2 className="note-page__heading">Arsip</h2>
      <SearchBox />
      <NoteList notes={notes} />
    </section>
  );
};

export default ArchivesPage;
