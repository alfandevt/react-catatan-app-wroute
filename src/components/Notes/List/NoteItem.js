import "../../../styles/Notes/List/NoteItem.css";
import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../../utils";

const NoteItem = ({ id, title, createdAt, body, archived }) => {
  const isBodyFaded = (bodyLength) => {
    return bodyLength > 70 ? "faded" : "";
  };
  return (
    <article className="note-item">
      <h3 className="note-item__title elipsis">{title}</h3>
      <p className="note-item__created-at">{showFormattedDate(createdAt)}</p>
      <p className={`note-item__body ${isBodyFaded(body.length)}`}>
        {parse(body)}
      </p>
      <Link to={`/catatan/${id}`} className="note-item__action">
        <span>Baca {archived ? "Arsip" : "Catatan"}</span>
      </Link>
    </article>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
