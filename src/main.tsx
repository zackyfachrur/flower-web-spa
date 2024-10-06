import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./pages/ProductPage.tsx";
import About from "./pages/AboutPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/Output.css";
import "../node_modules/remixicon/fonts/remixicon.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
