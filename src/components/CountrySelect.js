import React from 'react';
import ListItem from './ListItem';

const CountrySelect = ({ countries, onCountrySelected }) => {

    const countryItems = countries.map((country, index) => {
        return (
            <ListItem
                country={country}
                key={index}
                index={index}
            />
        );
    });

    const handleChange = (event) => {
        // console.log(event.target.value)
        onCountrySelected(event.target.value)
    };

    return (
        <div>
            <select onChange={handleChange} >
                <option hidden value="">Select a country</option>
                {countryItems}
            </select>
        </div>
    );
};

export default CountrySelect;