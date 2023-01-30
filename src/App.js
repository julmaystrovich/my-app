import './App.css';
import Header from './screens/header';
import Quote from './screens/quote';
import About from './screens/about';
import Samples from './screens/smpls';
import FAQ from './screens/faq';
import Footer from './screens/footer';
import Menu from './screens/menu';
import { YMaps } from "react-yandex-maps";
import Reviews from './screens/reviews';

function App() {
  return (
    <YMaps>
      <div className="App">
        <Menu />
        <Header />
        <About />
        <Quote />
        <Samples />
        <FAQ />
        <Reviews />
        <Footer />
      </div>
    </YMaps>
  );
}

export default App;
