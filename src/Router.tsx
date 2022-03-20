import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailsPage from "./pages/details/details.pages";
import { UsersContextProvider } from "./utils/usersContext";
import DashboardPage from "./pages/dashboard/dashboard.pages";

function Router() {
  return (
    <BrowserRouter>
      <UsersContextProvider>
        <Routes>
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"/blog/:id"} element={<DetailsPage />} />
        </Routes>
      </UsersContextProvider>
    </BrowserRouter>
  );
}

export default Router;
