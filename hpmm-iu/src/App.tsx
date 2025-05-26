import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../src/routes/RouterConfig";
import PrivateRouteValidation from "../src/routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../src/contexts/AuthContext";
import { AnimatePresence } from "framer-motion";
import { UserProvider } from "../src/contexts/userContext";
import { PactProvider } from "../src/contexts/pactsContext";
import { KardexProvider } from "./contexts/kardexContext";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => {
          const element = route.private ? (
            <PrivateRouteValidation>
              {route.element}
            </PrivateRouteValidation>
          ) : (
            route.element
          );
          return (
            <Route key={index} path={route.path} element={element} />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <PactProvider>
          <KardexProvider>
            <Router>
              <ToastContainer />
              <AnimatedRoutes />
            </Router>
          </KardexProvider>
        </PactProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;