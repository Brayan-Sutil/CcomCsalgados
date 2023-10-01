import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BakedSalted from "../screen/BakedSalted/BakedSalted";
import FriedSalty from "../screen/FriedSalty/FriedSalty";
import Home from "../screen/Home/Home";
import About from "../screen/About/About";
import OrderCart from "../screen/OrderCart/OrderCart";

 const Router = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: "/cento_fritos",
         element: <FriedSalty />,
       },
       {
         path: "/cento_assados",
         element: <BakedSalted />,
       },
       {
         path: "/sobre_nos",
         element: <About />,
       },
       {
         path: "/sua_opiniao",
         element: <Home />,
       },
       {
         path: "/localizacao",
         element: <Home />,
       },
       {
         path: "/carrinho",
         element: <OrderCart />,
       },
     ],
   },
 ]);

  export default Router