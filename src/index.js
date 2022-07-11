import React from 'react';
import { createRoot } from 'react-dom/client';
import './sass/main.scss';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
