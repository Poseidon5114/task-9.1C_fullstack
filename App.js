import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import Link
import Navbar from './navbar';
import Login from './login';
import Signup from './signup';
import Dashboard from './dashboard';
import Signout from './signout';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
