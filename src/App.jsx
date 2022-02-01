import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.pages";
import DetailsPage from "./pages/detailspage/details.pages";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/details-page' element={<DetailsPage />}/>
        </Routes>
    </div>
  );
}

export default App;
