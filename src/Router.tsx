import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.pages";
import DetailsPage from "./pages/details/details.pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<DashboardPage />} />
        <Route path={"/details"} element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
