import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', number: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    console.log("Submitting formData:", formData); // Debugging log

    try {
      const response = await fetch("https://eventexplorer-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }), // Ensure no cyclic structures
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        navigate("/event");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />

        <label htmlFor="number" className="form-label">Number</label>
        <input type="text" id="number" name="number" className="form-input" value={formData.number} onChange={handleChange} required />

        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" id="password" name="password" className="form-input" value={formData.password} onChange={handleChange} required />

        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
