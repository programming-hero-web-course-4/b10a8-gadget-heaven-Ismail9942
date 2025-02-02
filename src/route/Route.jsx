import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../page/Home";
import Products from "../components/Products";
import ProductDetails from "../page/ProductDetails";
import Statistics from "../page/Statistics";
import Dashboard from "../page/Dashboard";
import Carted from "../components/Carted";
import Wishlist from "../components/Wishlist";
import ErrorPage from "../components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Products />,
            loader: () => fetch("/data.json"),
          },
          {
            path: "products",
            element: <Products />,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Carted />,
          },
          {
            path: "carted",
            element: <Carted />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/productDetails/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export { router };
