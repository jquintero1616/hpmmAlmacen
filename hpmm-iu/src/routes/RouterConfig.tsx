// src/routes/RouterConfig.tsx
import LoginPage from '../views/LoginPage';
import HomePage  from '../views/HomePage';
import UsersPage  from '../views/UsersPage';
import PactsPage  from '../views/pactsPage';
import KardexPage from '../views/kadexPage';
export const routes = [
  {
    path: "/",
    element: <LoginPage />,
    private: false,
  },
  {
    path: "/home",
    element: <HomePage />,
    private: false,
  },

  {
    path: "/users",
    element: <UsersPage />,
    private: false,
  },
  {
    path: "/pacts",
    element: <PactsPage />,
    private: false,
  },

   {
    path: "/kardex",
    element: <KardexPage />,
    private: false,
  },
];

