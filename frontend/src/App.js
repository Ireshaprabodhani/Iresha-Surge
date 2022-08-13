import "./App.css";
import { React, ReactDOM } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import MyNotes from "./Screens/MyNotes/MyNotes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./Screens/loginScreen/LoginScreen";
import RegisterScreen from "./Screens/registerScreen/RegisterScreen.js";

//import createNote from "./Screens/CreateNote/createNote";
import { useState } from "react";
import SingleNote from "./Screens/SingleNote/SingleNote";

const App = () => {
  const [search, setSearch] = useState(" ");
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main style={{ minHeight: "93vh" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/createnote" element={<createNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          {/* <Route path="/mynotes" element={() => <MyNotes search={search} />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
