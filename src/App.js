import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './components/User';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Youtube from './youtube';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/blog">Blog</Link> |
            <Link to="/youtube">youtube videos</Link>
          </div>
          <hr/>
          <Route exact path="/" component={User} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/youtube" component={Youtube} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
