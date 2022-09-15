import "../../../styles/Notes/Forms/NoteForm.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote, editNote } from "../../../utils/local-data";

import NoteTitleInput from "./NoteTitleInput";
import NoteContentEditable from "./NoteContentEditable";
import NoteCommandGroup from "./NoteCommandGroup";

const NoteForm = ({ id, title, body, editMode }) => {
  const navigate = useNavigate();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const [btnSaveDisable, setBtnSaveDisable] = useState(true);
  const [noteTitleIsValid, setNoteTitleIsValid] = useState(false);
  const [noteBodyIsValid, setNoteBodyIsValid] = useState(false);
  const [focusClass, setFocusClass] = useState("");

  const validate = () => {
    if (noteTitleIsValid && noteBodyIsValid) {
      setBtnSaveDisable(false);
    } else {
      setBtnSaveDisable(true);
    }
  };

  useEffect(() => {
    if (editMode) {
      setNoteTitle(title);
      setNoteBody(body);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(validate, [noteTitleIsValid, noteBodyIsValid]);

  const onSaveHandler = () => {
    if (!editMode) {
      addNote({ title: noteTitle, body: noteBody });
    } else {
      editNote({ id, title: noteTitle, body: noteBody });
    }
    navigate("/");
  };
  const onCancelHandler = () => {
    navigate(-1);
  };
  const onFocusHandler = () => {
    setFocusClass("focus");
  };
  const onBlurHandler = () => {
    setFocusClass("");
  };

  const onNoteTitleIsValidHandler = (validity) => {
    setNoteTitleIsValid(validity);
  };

  const onNoteBodyIsValidHandler = (validity) => {
    setNoteBodyIsValid(validity);
  };

  return (
    <section className="note-form">
      <div className={`note-form__overlay ${focusClass}`}></div>
      <div className={`note-form__form-group ${focusClass}`}>
        <NoteTitleInput
          noteTitle={noteTitle}
          onSetTitle={setNoteTitle}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onNoteTitleIsValid={onNoteTitleIsValidHandler}
        />
        <NoteContentEditable
          noteBody={noteBody}
          onSetBody={setNoteBody}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onNoteBodyIsValid={onNoteBodyIsValidHandler}
        />
        <NoteCommandGroup />

        <div className="note-form__btn-group">
          <button
            className="note-form__btn-save"
            disabled={btnSaveDisable}
            onClick={onSaveHandler}
          >
            Simpan
          </button>
          <button className="note-form__btn-cancel" onClick={onCancelHandler}>
            Kembali
          </button>
        </div>
      </div>
    </section>
  );
};

NoteForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  editMode: PropTypes.bool.isRequired,
};

export default NoteForm;
