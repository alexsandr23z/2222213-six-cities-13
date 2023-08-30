import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { fetchOffers } from './store/api-actions/offers-api.ts';
import { checkAuthAction } from './store/api-actions/authorization-api.ts';
import ErrorMessage from './components/error-message/error-message.tsx';
import { fetchFavorites } from './store/api-actions/favorites-api.ts';


store.dispatch(fetchOffers());
store.dispatch(fetchFavorites());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>
);
