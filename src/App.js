import './App.css';
import { Route, Routes } from 'react-router-dom';

import CreateAuthor from "./views/CreateAuthor"; // Corrected import name
import DashboardPage from "./views/DashboardPage";
import UpdateAuthor from "./views/UpdateAuthor"; // Corrected import name

function App() {
  return (
    <div className="App">
      <h1>Favorite Author</h1>
      <Routes>
        <Route path="/authors" element={<DashboardPage />} />
        <Route path="/authors/new" element={<CreateAuthor />} />
        <Route path="/authors/edit/:id" element={<UpdateAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
