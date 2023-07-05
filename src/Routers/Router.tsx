import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BakedSalted from "../screen/BakedSalted/BakedSalted";
import FriedSalty from "../screen/FriedSalty/FriedSalty";
import Home from "../screen/Home/Home";

 const Router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     children: [
       {
         path: "/",
         element: <FriedSalty />,
       },
       {
         path: "/salgados_fritos",
         element: <FriedSalty />,
       },
       {
         path: "/salgados_assados",
         element: <BakedSalted />,
       },
       {
         path: "/cento_fritos",
         element: <Home />,
       },
       {
         path: "/cento_assados",
         element: <Home />,
       },
     ],
   },
 ]);

  export default Router