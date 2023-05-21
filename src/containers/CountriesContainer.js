import React, { useState, useEffect } from 'react';
import './CountriesContainer.css';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import CountryTotal from '../components/CountryTotal';
import CountryFavouriteList from '../components/CountryFavouriteList';
import 'leaflet/dist/leaflet.css'

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countries => setCountries(countries))
    };

    // const onCountryClicked = function (country) {
    //     setSelectedCountry(country);
    // };
    const onCountrySelected = function (index) {
        const country = [index, countries[index]]
        setSelectedCountry(country);
    };

    const addFavouriteCountry = (newFavouriteCountry) => {
        if (favouriteCountries.includes(newFavouriteCountry)) {
            const message = `${newFavouriteCountry[1].name.common} is already in your favourites list.`
            setErrorMessage(message)
            setTimeout(() => {
               setErrorMessage('') 
            }, 2000);
        } else {
            const newFavouriteCountries = [...favouriteCountries, newFavouriteCountry]
            setFavouriteCountries(newFavouriteCountries)
        }
    };



    return (
        <>
            <div className="main-container">
                <div>
                    <CountryTotal countries={countries} />
                </div>
                <br />
                <div>
                    <CountrySelect countries={countries} onCountrySelected={onCountrySelected} />
                    {/* <CountryList countries={countries} onCountryClicked={onCountryClicked}/> */}
                    {selectedCountry ? <CountryDetail 
                    country={selectedCountry} 
                    addFavouriteCountry={addFavouriteCountry} 
                    countries={countries}
                    /> : null}
                    {errorMessage}
                </div>
                <br />
                <div>
                    <CountryFavouriteList favouriteCountries={favouriteCountries} />
                </div>
            </div>
        </>
    );
};

export default CountryContainer;
