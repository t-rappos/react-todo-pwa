import * as React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from './title-bar';

const Home = () => (
    <div className="App">
      <TitleBar activeItem="home"/>
      <p className="App-intro">
        This is the home page.
      </p>
      <p>
        <Link to="/aim1">Aim1</Link>
      </p>
      <p>
        <Link to="/aim2">Aim2</Link>
      </p>
      <p>
        <Link to="/aim3">Aim3</Link>
      </p>
    </div>
);

export default Home;

/*
      <div className="App-header">
        <h2>{'Motivator'}</h2>
      </div>
       */