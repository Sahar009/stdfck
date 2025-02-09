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
      <Link to='#' className="evt-item__data__date">
        <span className="event-month">{event.month}</span>
        <span className="event-day">{event.day}</span>
      </Link>
      
      <div className="evt-item__data__details">
        <Link className="event-author" to={event.authorLink}>
          By {event.author}
        </Link>
        
        <Link to='#' className="event-title">
          <span>{event.title}</span>
        </Link>

        <p className="event-description">{event.description}</p>
        
        <Link to='#' className="view--more">
          Read More <ArrowIcon />
        </Link>
      </div>
    </div>
    
    <p className="featured-description">{event.description}</p>
   
  </div>
);

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Understanding Personal Finance",
      month: "April",
      day: "15",
      author: "John chevron",
      authorLink: "/members/johndoe",
      description: "Join us for an interactive session on personal finance management. Learn how to budget effectively, save for emergencies, and plan for your financial future.",
      link: "/event/understanding-personal-finance",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 2,
      title: "Investment Strategies for Beginners",
      month: "April",
      day: "22",
      author: "Jane Smith",
      authorLink: "/members/janesmith",
      description: "Discover the basics of investing in stocks, bonds, and mutual funds. This workshop will cover risk management, portfolio diversification, and how to start investing with confidence.",
      link: "/event/investment-strategies-beginners",
      image: "https://example.com/images/investment-strategies.jpg"
    },
    {
      id: 3,
      title: "Navigating the Loan Process",
      month: "May",
      day: "5",
      author: "Emily Johnson",
      authorLink: "/members/emilyjohnson",
      description: "Learn about the different types of loans available, how to apply, and what lenders look for in a borrower. This session will help demystify the loan process and prepare you for success.",
      link: "/event/navigating-the-loan-process",
      image: "https://example.com/images/navigating-loans.jpg"
    },
    {
      id: 4,
      title: "Retirement Planning 101",
      month: "May",
      day: "12",
      author: "Michael Brown",
      authorLink: "/members/michaelbrown",
      description: "It's never too early to start planning for retirement! Join us to learn about retirement accounts, savings strategies, and how to ensure a comfortable retirement.",
      link: "/event/retirement-planning-101",
      image: "https://example.com/images/retirement-planning.jpg"
    },
    {
      id: 5,
      title: "Credit Score Improvement Workshop",
      month: "May",
      day: "19",
      author: "Sarah Davis",
      authorLink: "/members/sarahdavis",
      description: "Understand the factors that affect your credit score and learn actionable steps to improve it. This workshop will provide tips on managing credit cards, loans, and more.",
      link: "/event/credit-score-improvement",
      image: "https://example.com/images/credit-score.jpg"
    }
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
            
            <Link to="#" className="view--more" data-aos="fade-in" data-aos-delay="250">
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