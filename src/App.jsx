import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData; 

    if (!email || !password) {
      setErrorMessage("Please fill in both email and password.");
      return;
    }

    try {
      const response = await axios.post("https://eventexplorer-backend.onrender.com/login", { email, password });

      if (response.status === 200) {
        navigate("/event");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="app-container">
      <main className="main-container">
        <div className="body-container">
          <h1>What is EventAround?</h1>
          <p className="body-text">
            <b>EventAround</b> is your go-to platform for discovering and exploring events happening
            around you. From conferences and webinars to local meetups and entertainment shows,
            EventAround brings all the details to your fingertips.
          </p>
        </div>

        <form className="form-container" onSubmit={handleLogin}>
          <h2>Login</h2>

          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {errorMessage && <p className="error-text">{errorMessage}</p>}

          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>

          <button type="submit" className="submit-button">Login</button>
        </form>

      </main>
    </div>
  );
};

export default App;
