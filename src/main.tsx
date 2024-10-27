import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/Output.css";
import "../node_modules/remixicon/fonts/remixicon.css";
import Product from "./pages/ProductPage.tsx";
import ProductSearch from "./pages/ProductSearchPage.tsx";
import About from "./pages/AboutPage.tsx";
import ProductById from "./pages/ShowProductById.tsx";
import ProductByName from "./pages/ShowProductByName.tsx";
import ProductByButton from "./pages/ShowProductByButton.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/search",
    element: <ProductSearch />,
  },
  {
    path: "/search/:id",
    element: <ProductById />,
  },
  {
    path: "search/:name",
    element: <ProductByName />,
  },
  {
    path: "/product",
    element: <ProductByButton />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
