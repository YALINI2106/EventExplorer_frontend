import React, { useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const events = [
    {
      id: 1,
      name: "Hackathon 2025",
      image: "https://contentstatic.techgig.com/photo/83423886.cms",
    },
    {
      id: 2,
      name: "Webinar on AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKbawU_SCzkC-HwrvoeMDDH2A6Kzlue5AYw&s",
    },
    {
      id: 3,
      name: "Startup Meetup",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHR-s-SQgCm8PpNbAL4LscN3Kkcdx-5E2XeQ&s",
    },
    {
      id: 4,
      name: "Thiran",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKbawU_SCzkC-HwrvoeMDDH2A6Kzlue5AYw&s",
    },
    {
      id: 5,
      name: "Youth Summit",
      image: "https://i0.wp.com/opportunitiesforyouth.org/wp-content/uploads/2024/12/1734548300083.jpeg?resize=1080%2C640&ssl=1",
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="event-container">
      <h1 className="event-title">Upcoming Events</h1>

      <div className="view-all-button-container">
        <Link to="/view-events" className="view-all-button">
          View All Events
        </Link>
      </div>

      <div className="event-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
