import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import mainRoutes from "./routes/mainRoutes";

function App() {
  return (
    <>
      <Suspense fallback={<div>Đang tải trang...</div>}>
        <Routes>
          {mainRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.element} />
          ))}
        </Routes>
      </Suspense>

      {/* config react-toastify */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
