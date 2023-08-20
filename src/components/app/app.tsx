import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute} from '../../const';
import MainPages from '../../pages/main/main';
import FavoritePage from '../../pages/favorites/favorites';
import OffersPage from '../../pages/offers/offers';
import LoginPage from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {TOffers} from '../../types/offer-type';
import { TReviews } from '../../types/review-type';
import { useAppSelector } from '../hooks';


type AppOffersProps = {
  offers: TOffers;
  reviews: TReviews;
}

function App({offers, reviews}: AppOffersProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPages />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OffersPage reviews={reviews} />}
          >
            <Route path={`${AppRoute.Offer}/:id`}/>
          </Route>
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritePage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFound/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
