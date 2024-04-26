import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import AddProduct from "./pages/dashboard/addProduct/AddProduct";
import MainLayout from "./components/layout/MainLayout";
import EditProduct from "./pages/dashboard/editProduct/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // {
      //   path: "dashboard/addproduct",
      //   element: <AddProduct />,
      // },
      {
        path: "dashboard/editProduct/:id",
        element: <EditProduct />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
