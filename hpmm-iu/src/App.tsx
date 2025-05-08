import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "../src/routes/RouterConfig";
import PrivateRouteValidation from "../src/routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Authprovider } from "../src/contexts/AuthContext";
//import { EmployeesProvider } from "@contexts/EmployeesContext.tsx";
//import { DepartmentsProvider } from "@contexts/DepartmentsContext.tsx";

function App() {
  return (
    <Authprovider>
      
       
          <Router>
            <ToastContainer />
            <Routes>
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
          </Router>
        
     
    </Authprovider>
  );
}

export default App;