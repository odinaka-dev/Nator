import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthContext.tsx";

import "./index.css";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Layout from "./components/Layout.tsx";
import Error from "./pages/Error.tsx";
import Homepage from "./pages/Homepage.tsx";
import Translate from "./pages/Options.tsx";
import Options from "./pages/Translate.tsx";
import Knowledge from "./pages/knowledge.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "translate", element: <Translate /> },
      { path: "options", element: <Options /> },
      { path: "knowledge", element: <Knowledge /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={route} />
  </AuthProvider>
);
