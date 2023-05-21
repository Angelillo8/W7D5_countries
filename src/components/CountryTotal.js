
const CountryTotal = ({countries}) => {

    const totalPopulation = countries.reduce((total, currentValue) => {
        return total + currentValue.population
    },0);

    return (
        <div>The total world population is {totalPopulation}</div>
    );
};

export default CountryTotal;