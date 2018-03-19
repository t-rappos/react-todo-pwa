import React from 'react';
import {Link} from 'react-router-dom';


function createLink1(aimNumber){
  const links = [1,2,3];
  links[aimNumber] = -1;
  links.forEach(element => {
    if(element !== -1){
      console.log('/aim' + element);

    }
  });
}

const Aim = ({aimTitle, aimNumber}) => (
    <div className="App">
      <div className="App-header">
        <h2>{aimTitle}</h2>
      </div>
      <p className="App-intro">
        This is the {aimTitle + createLink1(aimNumber)} page.
      </p>
      <p>
        <Link to="/aim2">Aim2</Link>
      </p>
      <p>
        <Link to="/aim3">Aim3</Link>
      </p>
    </div>
);

const Aim1 = () => (
  <div className="App">
      <div className="App-header">
        <h2>Aim1</h2>
      </div>
      <p className="App-intro">
        This is the Aim1 page.
      </p>
      <p>
        <Link to="/aim2">Aim2</Link>
      </p>
      <p>
        <Link to="/aim3">Aim3</Link>
      </p>
    </div>
)

const Aim2 = () => (
  <div className="App">
      <div className="App-header">
        <h2>Aim2</h2>
      </div>
      <p className="App-intro">
        This is the Aim2 page.
      </p>
      <p>
        <Link to="/aim1">Aim1</Link>
      </p>
      <p>
        <Link to="/aim3">Aim3</Link>
      </p>
    </div>
)

const Aim3 = () => (
  <div className="App">
      <div className="App-header">
        <h2>Aim3</h2>
      </div>
      <p className="App-intro">
        This is the Aim3 page.
      </p>
      <p>
        <Link to="/aim1">Aim1</Link>
      </p>
      <p>
        <Link to="/aim2">Aim2</Link>
      </p>
    </div>
)

export {Aim1, Aim2, Aim3};