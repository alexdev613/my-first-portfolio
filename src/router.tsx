import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import Contact from "./routes/Contact";
import ServiceTerms from "./routes/ServiceTerms";
import Jaspion from "./pages/Blog/TV/Jaspion/Jaspion";
import WhatsIA from "./pages/Blog/Tech/WhatsIA/WhatsIA";
import XmenAnimatedSeries from "./pages/Blog/TV/XmenAnimatedSeries/XmenAnimatedSeries";
import JaspionExpoBrasil from "./pages/Blog/Expo/JaspionExpoBrasil/JaspionExpoBrasil";
import BenjaminGraham from "./pages/Blog/Finance/BenjaminGraham/BenjaminGraham";
import BolsaExchange from "./pages/Blog/Finance/BolsaExchange/BolsaExchange";
import AkiraToriyamaIsDead from "./pages/Blog/News/AkiraToriyamaIsDead/AkiraToriyamaIsDead";
import FormYup from "./pages/Home/sections/Projects/Pages/PageProject01/FormYup";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/dashboard/tv/jaspion", element: <Jaspion /> },
    { path: "/dashboard/tv/x-men97", element: <XmenAnimatedSeries /> },
    { path: "/dashboard/expo/jaspionexpo", element: <JaspionExpoBrasil /> },
    { path: "/dashboard/finance/BolsaExchange", element: <BolsaExchange /> },
    { path: "/dashboard/finance/benjamingraham", element: <BenjaminGraham/> },
    { path: "/dashboard/tech/whatsia", element: <WhatsIA /> },
    { path: "/dashboard/news/akiratoriyamaumlegado", element: <AkiraToriyamaIsDead />},
    { path: "/contact", element: <Contact /> },
    { path: "/serviceterms", element: <ServiceTerms />},
    { path: "/projects/formyup", element: <FormYup />}
  ]);