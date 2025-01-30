import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewEvent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", description: "", image: "" });

  // Function to fetch events from the database
  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events");
      setEvents(response.data); // Update state with fetched events
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Add event to database
  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!newEvent.name || !newEvent.description || !newEvent.image) return;

    try {
      const response = await axios.post("http://localhost:3000/api/events", newEvent);
      setEvents([...events, response.data]); // Add new event to state
      setNewEvent({ name: "", description: "", image: "" }); // Reset form
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="view-container">
      <h1>All Events</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search events..."
        className="search-box"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Display Filtered Events */}
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div key={event._id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))
      ) : (
        <p className="no-events">No events found</p>
      )}

      {/* Add Event Form */}
      <form className="add-event-form" onSubmit={handleAddEvent}>
        <input type="text" name="name" placeholder="Event Name" value={newEvent.name} onChange={handleInputChange} required />
        <input type="text" name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} required />
        <input type="text" name="image" placeholder="Image URL" value={newEvent.image} onChange={handleInputChange} required />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default ViewEvent;
