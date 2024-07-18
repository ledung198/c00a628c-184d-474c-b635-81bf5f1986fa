import React from "react";
import ReactDOM from "react-dom";
import Header from "./Page/Header/Header.jsx";
import HomePage from "./Page/HomePage/HomePage.jsx";
import Footer from "./Page/Footer/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageDetail from "./Page/HomePage/HomePageDetail.jsx";
import ArchiveCall from "./Page/HomePage/ArchiveCall.jsx";


const App = () => {
  return (
    <div className="container">
      <Header />
      {/* <HomePage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<HomePageDetail />} />
          <Route path="/archive" element={<ArchiveCall />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
