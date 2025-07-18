import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Main/>
      <Footer />
    </Router>
  );
}
export default App;
