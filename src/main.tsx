import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/login.tsx";
import Signup from "./pages/Signup.tsx";
import Layout from "./components/Layout.tsx";
import Error from "./pages/Error.tsx";
import Homepage from "./pages/Homepage.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
