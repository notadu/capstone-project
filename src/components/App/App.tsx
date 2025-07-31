import { BrowserRouter as Router } from "react-router-dom";

import AuthProvider from "../../context/AuthContext";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </AuthProvider>
  );
}
export default App;
