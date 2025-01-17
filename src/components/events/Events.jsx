import { Link } from 'react-router-dom';
import './Events.css';

const ArrowIcon = () => (
  <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.658545 5.65855H8.01449L4.80079 8.87224C4.54396 9.12907 4.54396 9.55054 4.80079 9.80738C5.05762 10.0642 5.4725 10.0642 5.72934 9.80738L10.0691 5.46757C10.326 5.21073 10.326 4.79585 10.0691 4.53902L5.73592 0.192624C5.47909 -0.0642081 5.06421 -0.0642081 4.80738 0.192624C4.55054 0.449457 4.55054 0.86434 4.80738 1.12117L8.01449 4.34146H0.658545C0.296345 4.34146 0 4.6378 0 5C0 5.3622 0.296345 5.65855 0.658545 5.65855Z" 
    fill="#FEC12F"/>
  </svg>
);

const EventItem = ({ event }) => (
  <div className="evt-item">
    <div className="evt-item__data">
      <Link to={event.link} className="evt-item__data__date">
        <span className="event-month">{event.month}</span>
        <span className="event-day">{event.day}</span>
      </Link>
      
      <div className="evt-item__data__details">
        <Link className="event-author" to={event.authorLink}>
          By {event.author}
        </Link>
        
        <Link to={event.link} className="event-title">
          <span>{event.title}</span>
        </Link>

        <p className="event-description">{event.description}</p>
        
        <Link to={event.link} className="view--more">
          Read More <ArrowIcon />
        </Link>
      </div>
    </div>
    
    <p className="featured-description">{event.description}</p>
    <Link to={event.link} className="view--more">
      Read More <ArrowIcon />
    </Link>
  </div>
);

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Trauma-informed Peacebuilding",
      month: "March",
      day: "31",
      author: "Vanessa Kirsch",
      authorLink: "/members/forumzfd",
      description: "Schedule: Technical Check: on 28 March 2025 from 14:00 to 15:00 CET Online Live Sessions: from 31 March 2025 to 5 May 2025, every Monday from 14:00 to 18:00 CEST (with course break)",
      link: "/event/trauma-informed-peacebuilding-2",
      image: "https://cnxus.org/wp-content/uploads/2025/01/Trauma1-1200x676.jpg"
    },
    // Add other events here
  ];

  return (
    <section className="new-home__events" id="events">
      <div className="container">
        <div className="new-home__events__grid">
          <div className="new-home__events__grid__featured">
            <h2 className="block-title" data-aos="fade-in">Events</h2>
            <div className="block-legend" data-aos="fade-in">
              Check out & share the latest online, in-person & hybrid events happening nearby & around the world.
            </div>
            
            <div className="featured-event" data-aos="fade-in">
              <EventItem event={events[0]} />
            </div>
          </div>

          <div className="new-home__events__grid__items" data-aos="fade-in">
            {events.slice(1).map(event => (
              <EventItem key={event.id} event={event} />
            ))}
            
            <Link to="/events" className="view--more" data-aos="fade-in" data-aos-delay="250">
              View all <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="new-home__bar" data-aos="fade-in">
        <span className="new-home__bar__start" data-aos="fade-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.34" height="20" viewBox="0 0 16.344 20">
            <path d="M13.9,2.328A8.173,8.173,0,0,0,2.331,13.877a8.3,8.3,0,0,0,4.515,2.329.334.334,0,0,1,.226.519,6.621,6.621,0,0,1-.725.857,8.231,8.231,0,0,1-2.631,1.77A.336.336,0,0,0,3.837,20a13.125,13.125,0,0,0,9.423-3.846,10.47,10.47,0,0,0,3.082-7.531c0-.03,0-.061-.007-.091a8.262,8.262,0,0,0-2.438-6.2" 
            fill="#ffffff"/>
          </svg>
        </span>
        
        <span className="new-home__bar__marker" data-aos="fade-down" data-aos-delay="250"></span>
        
        <span className="new-home__bar__end" data-aos="fade-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="16.34" height="20" viewBox="0 0 16.344 20">
            <path d="M13.9,2.328A8.173,8.173,0,0,0,2.331,13.877a8.3,8.3,0,0,0,4.515,2.329.334.334,0,0,1,.226.519,6.621,6.621,0,0,1-.725.857,8.231,8.231,0,0,1-2.631,1.77A.336.336,0,0,0,3.837,20a13.125,13.125,0,0,0,9.423-3.846,10.47,10.47,0,0,0,3.082-7.531c0-.03,0-.061-.007-.091a8.262,8.262,0,0,0-2.438-6.2" 
            fill="#FA421D"/>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Events;
// import { useState, useEffect } from 'react';
// import './Events.css';

// const Events = () => {
//   // const [events, setEvents] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   // Fetch events from your API
//   //   fetchEvents();
//   // }, []);

//   // const fetchEvents = async () => {
//   //   try {
//   //     // Replace with your API endpoint
//   //     const response = await fetch('/api/events');
//   //     const data = await response.json();
//   //     setEvents(data);
//   //     setLoading(false);
//   //   } catch (error) {
//   //     console.error('Error fetching events:', error);
//   //     setLoading(false);
//   //   }
//   // };

//   if (loading) return <div>Loading events...</div>;

//   return (
//     <section className="events">
//       <div className="container">
//         <h2>Upcoming Events</h2>
//         <div className="events-grid">
//           {events.map((event) => (
//             <div key={event.id} className="event-card">
//               <img src={event.image} alt={event.title} />
//               <div className="event-details">
//                 <h3>{event.title}</h3>
//                 <p className="event-date">{event.date}</p>
//                 <p className="event-description">{event.description}</p>
//                 <button className="register-btn">Register Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events; 