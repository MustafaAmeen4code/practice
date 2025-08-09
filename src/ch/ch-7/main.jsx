import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import AppLayout from "./layouts/AppLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ErrorPage from "./pages/ErrorPage";
import ProtectedDashboard from "./components/ProtectedDashboard";

const user = { name: "darsh" };
// const user = null;

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedDashboard user={user}>
            <DashboardLayout />
          </ProtectedDashboard>
        ),
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "post/:postId?",
            element: <Post />,
          },
          {
            path: "Profile/:userId?",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const Chapter7 = () => {
  return <RouterProvider router={router} />;
};

export default Chapter7;
