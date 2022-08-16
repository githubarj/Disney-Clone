import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componets/Header";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
