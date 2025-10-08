import Dairy from "./components/Dairy/Dairy";
import Fruits from "./components/Fruits/Fruits";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/all",
          element: <AllProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
