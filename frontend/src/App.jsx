import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Tests from './components/Tests';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Tests" element={<Tests />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

