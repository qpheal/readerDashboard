import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { Analytics } from "./Page/Analytics/Analytics";
import { Profile } from "./Page/Profile/Profile";
import { Settings } from "./Page/Settings/Settings";
import { Menu } from "./components/Menu/Menu";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Preferences } from "./Page/Settings/Preferences/Preferences";
import { Notifications } from "./Page/Settings/Notifications/Notifications";
import { Security } from "./Page/Settings/Security/Security";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/settings",
          element: <Preferences />,
        },
        {
          path: "/settings/preference",
          element: <Preferences />,
        },
        {
          path: "/settings/notifications",
          element: <Notifications />,
        },
        {
          path: "/settings/security",
          element: <Security />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
