import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    event: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    console.log("Submitting formData:", formData); // Debugging log

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }), 
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        // navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="college">College Name</label>
        <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} required />

        <label htmlFor="event">Event Name</label>
        <input type="text" id="event" name="event" value={formData.event} onChange={handleChange} required />

        <label htmlFor="number">Phone Number</label>
        <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
{/* 
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /> */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
