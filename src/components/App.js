import "../styles/App.css";
import "../styles/Pages/Pages.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import ActiveNotePage from "../pages/ActiveNotePage";
import AddNotePage from "../pages/AddNotePage";
import ArchivesPage from "../pages/ArchivesPage";
import DetailNotePage from "../pages/DetailNotePage";
import EditNotePage from "../pages/EditNotePage";
import ErrorInvalidPage from "../pages/ErrorInvalidPage";

const App = () => {
  return (
    <div className="note-app">
      <div className="note-app__background"></div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="catatan-aktif" />} />
          <Route path="catatan-aktif" element={<ActiveNotePage />} />
          <Route path="catatan-arsip" element={<ArchivesPage />} />
          <Route path="catatan/baru" element={<AddNotePage />} />
          <Route path="catatan/:noteId" element={<DetailNotePage />} />
          <Route path="catatan/:noteId/edit" element={<EditNotePage />} />
          <Route path="/*" element={<Navigate to="404" />} />
          <Route path="404" element={<ErrorInvalidPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
