import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from './../Components/ErrorPage/ErrorPage';
// import About from "../Pages/About/About";
import AboutPage from "../Components/AboutPage/AboutPage";

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
        element: <AboutPage/>
      }
    ]
  },
]);
export default router;