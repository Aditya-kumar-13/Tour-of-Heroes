import React from 'react';
import { Link } from 'react-router-dom';
import './View.css';
import HeroBox from './HeroBox';

export default function View({ heroes }) {
  return (
    <div className="view-container">
      <div className="view-buttons">
        <Link to="/">
          <button>Dashboard</button>
        </Link>
      </div>
      <div className="view">
        {heroes.map((hero, index) => (
          <div key={index} className="hero-box">
            <HeroBox {...hero} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
