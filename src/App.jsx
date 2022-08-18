import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./Componets/Detail";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Login from "./Componets/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* we add a router that allows us to go between pages without refreshing */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
