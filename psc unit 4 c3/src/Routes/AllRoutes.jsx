import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import CityPage from "./CityPage";
import CountriesList from "./CountriesList";
import HomePage from "./HomePage";
import Login from "./Login";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/city/:id"
        element={
          <PrivateRoute>
            <CityPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/country/:name"
        element={
          <PrivateRoute>
            <CountriesList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default AllRoutes;
