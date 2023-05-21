import React from 'react';
import FavouriteCountry from './FavouriteCountry';

const CountryFavouriteList = ({ favouriteCountries }) => {

  const favouriteCountryItems = favouriteCountries.map((country) => {
    return (
      <FavouriteCountry
        key={country[0]}
        country={country[1].name.common}
      />
    );
  });

  return (
    <div>
      <ul>
        {favouriteCountryItems}
      </ul>
    </div>
  );
};

export default CountryFavouriteList;