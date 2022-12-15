import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Root from './components/Root';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Users from './pages/Users';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProtectedRoutes/>}>
            <Route index element = {<Dashboard />} />
            <Route path="dashboard" element = {<Dashboard />} />
            <Route path="bookings" element = {<Bookings/>} />
            <Route path="rooms" element = {<Rooms/>} />
            <Route path="rooms/:roomId" element = {<Room/>} />
            <Route path="contact" element = {<Contact/>} />
            <Route path="users" element = {<Users/>} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
