import { BrowserRouter, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import AddNew from "./Pages/AddNew";
import HistoryPage from "./Pages/HistoryPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Navigate to="/habit-tracker" replace/>} />
      <Route path="/habit-tracker" element={<HomePage />}/>
      <Route path="/add-new" element={<AddNew />}/>
      <Route path="/history" element={<HistoryPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
