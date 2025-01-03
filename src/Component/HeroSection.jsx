import React, { useEffect, useState } from 'react';
import useUserData from './useUserData';

const HeroSection = () => {
  const user = useUserData();
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    if (user && user.portfolio) {
      const items = [];
      user.portfolio.forEach(project => {
        
          const item = `
            <div class="col-md-4 mb-4">
              <div class="card portfolio-item">
             
                <div class="card-body">
                  <h5 class="card-title">${project.title}</h5>
                  <p class="card-text">${project.description || ''}</p>
                  <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                </div>
              </div>
            </div>`;
          items.push(item);
     
      });
      setPortfolioItems(items);
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>; // لو مفيش بيانات للمستخدم، نعرض Loading...
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <div>{user.jobTitle}</div>
      <div>{user.objective}</div>
      <img src={user.image} alt="User" />
      <div id="portfolio-container" className="row">
        {portfolioItems.length > 0 ? (
          portfolioItems.map((item, index) => <div key={index} dangerouslySetInnerHTML={{ __html: item }} />)
        ) : (
          <p>No portfolio items available</p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
