import React from 'react';
import { useHistory } from 'react-router-dom';
import './HeroBox.css';

export default function HeroBox({ imgSrc, text, rank, index }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/Update',
      state: { index }
    });
  };

  return (
    <div onClick={handleClick} className="hero-link">
      <span className="HeroBox">
        <img className="HeroImg" src={imgSrc} alt="Image" />
        <p>
          <span>{text}</span>
          <span>{rank}</span>
        </p>
      </span>
    </div>
  );
}


