import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { Navigate } from "react-router-dom";

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = localStorage.getItem('dummyToken');
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth redirectTo="/">
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
