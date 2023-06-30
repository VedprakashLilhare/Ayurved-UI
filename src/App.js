import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant" >
          <Route path="/plant/dashboard" element={<Dashboard />}/>
          <Route path="/plant/create" element={<Create />}/>
          </Route>
          <Route path="/plant/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
