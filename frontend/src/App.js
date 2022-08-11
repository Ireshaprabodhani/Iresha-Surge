
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './Screens/LandingPage/LandingPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      <LandingPage>
        
      </LandingPage>


    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
