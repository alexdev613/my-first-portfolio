import Home from "./pages/Home/Home"
import { register } from "swiper/element";

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const App = () => {

  return (
    <>
      <Home />
    </>
  )
}

export default App
