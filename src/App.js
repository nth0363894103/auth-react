import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux';
import Router from './Components/Router';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './Utils/ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
