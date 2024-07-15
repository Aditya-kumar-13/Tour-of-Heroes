import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import View from './View';
import Update from './Update';

function App() {
  const [heroes, setHeroes] = useState(() => {
    const savedHeroes = localStorage.getItem('heroes');
    return savedHeroes ? JSON.parse(savedHeroes) : [
      { imgSrc: '/public/dr.jpeg', text: 'Dr. Strange' },
      { imgSrc: '/public/Witch.jpg', text: 'Captain' },
      { imgSrc: '/public/aqua.jpeg', text: 'Hulk' },
      { imgSrc: '/public/goku.jpg', text: 'Spider' },
      { imgSrc: '/public/bat.jpeg', text: 'Batman' },
      { imgSrc: '/public/super.jpg', text: 'Superman' },
      { imgSrc: '/public/buri.jpeg', text: 'Buri Buri Zaimon' },
      { imgSrc: '/public/thor.jpeg', text: 'Thor' },
      { imgSrc: '/public/LOKI.jpg', text: 'Loki' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('heroes', JSON.stringify(heroes));
  }, [heroes]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Dashboard heroes={heroes} />
          </Route>
          <Route exact path='/View'>
            <View heroes={heroes} />
          </Route>
          <Route path='/Update'>
            <Update heroes={heroes} setHeroes={setHeroes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
