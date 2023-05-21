import React from 'react';
import './ListItem.css';

const ListItem = ({index, country}) => {
  
  // const handleSelect = function (event) {
  //   // console.log(`Clicked on ${country.name.common}`);
  //   // onCountrySelected(country)
  //   console.log(event)
  // };
  return (
  <>
  <option value={index}> {country.name.common} {country.flag}</option>
  </>
  );
};
// {country.name.official}
export default ListItem;