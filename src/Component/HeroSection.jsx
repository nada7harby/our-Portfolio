import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HeroSection = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/src/assets/manual.json').then((response) => {
      const users = response.data;
      const selectedUser = users.find((user) => user.id === Number(id));
      setUser(selectedUser);
    });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero bg-dark text-white">
      <div>
        <h1 id="hero-title">{user.name}</h1>
        <p id="hero-subtitle">{user.jobTitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
