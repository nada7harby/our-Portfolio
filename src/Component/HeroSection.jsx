import React from 'react';
import useUserData from './useUserData';

const HeroSection = () => {
  const user = useUserData();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.jobTitle}</p>
      <img src={user.image} alt="User" />
      <p>{user.objective}</p>
    </div>
  );
};

export default HeroSection;
