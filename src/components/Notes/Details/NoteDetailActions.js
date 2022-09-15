import "../../../styles/Notes/Details/NoteDetailActions.css";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BiArchiveIn, BiArchiveOut, BiTrash, BiPencil } from "react-icons/bi";
import { deleteNote, moveNote } from "../../../utils/local-data";

const NoteDetailActions = ({ id, archived }) => {
  const navigate = useNavigate();

  const onEditHandler = (id) => {
    navigate(`/catatan/${id}/edit`);
  };
  const onMoveHandler = (id) => {
    moveNote(id);
    const urlPath = archived ? "/" : "/catatan-arsip";
    navigate(urlPath);
  };
  const onRemoveHandler = (id) => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <div className="note-detail__action-group">
      <button
        className="note-detail__action-button edit"
        onClick={() => onEditHandler(id)}
      >
        <BiPencil />
      </button>
      <button
        className="note-detail__action-button move"
        onClick={() => onMoveHandler(id)}
      >
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>
      <button
        className="note-detail__action-button remove"
        onClick={() => onRemoveHandler(id)}
      >
        <BiTrash />
      </button>
    </div>
  );
};

NoteDetailActions.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetailActions;
