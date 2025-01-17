import { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Guides' },
    { id: 'tools', label: 'Tools' },
    { id: 'research', label: 'Research' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Social Impact Toolkit',
      category: 'tools',
      image: '/toolkit.png',
      description: 'Complete guide for measuring social impact'
    },
    // Add more resources
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section className="resources">
      <div className="container">
        <h2>Resources</h2>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <img src={resource.image} alt={resource.title} />
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="download-btn">Download</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources; 