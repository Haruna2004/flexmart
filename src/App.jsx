import "./Styles/App.css";
import Shopping from "./pages/Shopping";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Shopping />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
