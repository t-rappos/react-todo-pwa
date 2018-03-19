import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { Aim1, Aim2, Aim3 } from './pages/aim';

export class App extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/aim1" component={Aim1}/>
          <Route path="/aim2" component={Aim2}/>
          <Route path="/aim3" component={Aim3}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;