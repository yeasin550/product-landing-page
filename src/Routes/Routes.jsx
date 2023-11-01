import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from './../Components/ErrorPage/ErrorPage';
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  },
]);
export default router;