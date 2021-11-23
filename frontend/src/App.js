import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Import screens
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import SearchResults from "./screens/SearchResults";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/search-results" element={<SearchResults/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
