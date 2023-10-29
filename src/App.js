import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import RouteSummery from "./pages/RouteSummery";
import BusRouteRecords from "./pages/BusRouteRecords";
import Dashboard from "./pages/Dashboard";
import ViewRoutes from "./pages/ViewRoutes";
import AddBusRoute from "./pages/AddBusRoute";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
      case "/route-summery":
        title = "";
        metaDescription = "";
        break;
      case "/bus-route-records":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/view-routes":
        title = "";
        metaDescription = "";
        break;
      case "/add-routes":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/route-summery" element={<RouteSummery />} />
      <Route path="/bus-route-records" element={<BusRouteRecords />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/view-routes" element={<ViewRoutes />} />
      <Route path="/add-routes" element={<AddBusRoute />} />
    </Routes>
  );
}
export default App;
