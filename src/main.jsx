import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import MainLayout from './MainLayout';
import App from './App';
import Events from './Events'; 
import Register from './Register';
import ViewEvent from './ViewEvent';
import SignUp from './SignUp';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
            <Route path="/" element={<MainLayout />}>
        <Route index element={<App />} />  {/* Default route */}
        <Route path="home" element={<App />} />
        <Route path="event" element={<Events />} />
        <Route path="register" element={<Register />} />
        <Route path="view-events" element={<ViewEvent />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
