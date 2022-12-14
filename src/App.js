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
import Users from './pages/Users';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Root />}>
          <Route index element = {<Dashboard />} />
          <Route path="dashboard" element = {<Dashboard />} />
          <Route path="bookings" element = {<Bookings/>} />
          <Route path="rooms" element = {<Rooms/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="users" element = {<Users/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
