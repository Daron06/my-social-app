import React from 'react';
import { Route } from 'react-router-dom';

import { Header, Nav } from './components';
import { Home, Messages, Friends, UserCorrespondence } from './pages';

function App() {
  return (
    <div>
      <Header />

      <div className="app-wrapper">
        <Nav />
        <div className="app-wrapper-content">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/messages" render={() => <Messages />} />
          <Route path="/friends" render={() => <Friends />} />
          <Route
            path="/messages/:number"
            render={() => <UserCorrespondence />}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
