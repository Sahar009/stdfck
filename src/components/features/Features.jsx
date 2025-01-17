import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Connect with change-makers worldwide'
    },
    {
      icon: '📚',
      title: 'Knowledge Sharing',
      description: 'Access valuable resources and insights'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Find partners for social impact projects'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose ConnexUs</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 