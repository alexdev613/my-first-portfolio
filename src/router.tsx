import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import ServiceTerms from "./routes/ServiceTerms";
import Jaspion from "./pages/Blog/TV/Jaspion";
import WhatsIA from "./pages/Blog/Tech/WhatsIA";
import XmenAnimatedSeries from "./pages/Blog/TV/XmenAnimatedSeries";
import JaspionExpoBrasil from "./pages/Blog/Expo/JaspionExpoBrasil";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/tv/jaspion", element: <Jaspion /> },
    { path: "/dashboard/tv/x-men97", element: <XmenAnimatedSeries /> },
    { path: "/dashboard/expo/jaspionexpo", element: <JaspionExpoBrasil /> },
    { path: "/dashboard/tech/whatsia", element: <WhatsIA /> },
    { path: "/contact", element: <Contact /> },
    { path: "/serviceterms", element: <ServiceTerms />}
  ]);