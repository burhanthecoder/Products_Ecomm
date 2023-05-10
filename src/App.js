import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainNavigation from "./layout/MainNavigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';



function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
