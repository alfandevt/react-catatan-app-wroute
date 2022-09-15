import "../styles/Pages/ErrorPage.css";
import React from "react";
import { Link } from "react-router-dom";
import ErrorSvg from "../assets/svg/undraw_page_not_found_re_e9o6.svg";

const ErrorInvalidPage = () => {
  return (
    <section className="note-page error-invalid-page">
      <h2 className="note-page__heading">Halaman tidak ditemukan...</h2>
      <div className="note-page__error__container">
        <img
          className="note-page__error__img"
          alt="Error Not Found"
          src={ErrorSvg}
        />
        <Link to="/" className="note-page__error__link">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
};

export default ErrorInvalidPage;
