import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./Screens/loginScreen/LoginScreen";
import RegisterScreen from "./Screens/registerScreen/RegisterScreen.js";

const App = () => (
  <BrowserRouter>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/mynotes" element={<MyNotes/>}></Route>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
