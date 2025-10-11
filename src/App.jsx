import Dairy from "./components/Dairy/Dairy";
import Fruits from "./components/Fruits/Fruits";
import Home from "./components/Home/Home";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import Layout from "./components/Layout/Layout";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
// import Forgot from "./components/Auth/Forgot";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/register",
      element: <Register />
    },
    // {
    //   path: "/forgot",
    //   element: <Forgot />
    // },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/fruits", element: <Fruits /> },
        { path: "/dairy", element: <Dairy /> },
        { path: "/seafood", element: <SeaFood /> },
        { path: "/all", element: <AllProducts /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
