import './CountryDetail.css';
import CountryMap from './CountryMap';

const CountryDetail = ({ country, addFavouriteCountry, countries }) => {

  const handleFavouriteCountry = () => {
    addFavouriteCountry(country);
  };

  const getNeighbouringCountries = (country, countries) => {
    if (country[1].borders) {
      let neighbouringCountries = [];
      for (const countryCode of country[1].borders) {
        const countryToList = countries.find(neighbour => neighbour.cca3 === countryCode)
        neighbouringCountries.push(countryToList.name.common)
      }
      return (
        `It limits with ${neighbouringCountries.join(", ")}`
      );
    }
  };

  return (
    <div className="country-detail">

      <p>The capital of {country[1].name.common} is {country[1].capital} and population is {country[1].population}.</p>
      <br />
      <img src={country[1].flags.svg} alt={country[1].flags.alt} />
      <br />
      <p>{getNeighbouringCountries(country, countries)}</p>
      <br />
      <button onClick={handleFavouriteCountry}>Add country to favourite list</button>
      <br />
      <CountryMap country={country}/>
    </div>
  );
};

export default CountryDetail;