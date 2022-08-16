import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Componets/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* we add a router that allows us to go between pages without refreshing */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
