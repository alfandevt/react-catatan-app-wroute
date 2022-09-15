import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import { filterList } from "../utils";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/Notes/List/NoteList";
import SearchBox from "../components/Notes/SearchBox/SearchBox";

const ActiveNotePage = () => {
  const [searchParams] = useSearchParams();
  const [notes, setNotes] = useState(getActiveNotes());

  useEffect(() => {
    const title = searchParams.get("title");
    if (title) {
      const filteredNotes = filterList(getActiveNotes(), "title", title);
      setNotes(filteredNotes);
    } else {
      setNotes(getActiveNotes());
    }
  }, [searchParams]);

  return (
    <section className="note-page active-note-page">
      <h2 className="note-page__heading">Daftar Catatan</h2>
      <SearchBox />
      <NoteList notes={notes} />
      <Link to="/catatan/baru" className="note-page__add-btn">
        <MdNoteAdd />
      </Link>
    </section>
  );
};

export default ActiveNotePage;
