import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import store from './store';
import Sidebar from './components/Sidebar';
export default () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <MainComponent />
        </div>
      </Router>
    </Provider>
  );
};
