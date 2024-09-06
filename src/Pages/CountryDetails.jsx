import {  useParams } from "react-router-dom";
import useCountryData from "../Hooks/useCountryData";

const CountryDetails = () => {
    const {countryName} = useParams()
    const [countries, error, loading] = useCountryData()
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(error){
        return <p>Error: {error}</p>
    }
    console.log(countries)
    const countryArray = countries.filter((country)=> country.name.common === countryName)
    console.log(countryArray)
    const [country] = countryArray
    console.log(country)
    const { name, flags} = country
    return (
        <div>
            <h1>Country: {countryName}</h1>
            <h1>Country: {name.common}</h1>
            <img src={flags.png} alt="" />
            <button className="my-5 btn btn-accent btn-sm btn-outline">Add to favourite</button>
        </div>
    );
};

export default CountryDetails;

// const a = [1,2,3,4,5,6,7,8,9]
// a.filter((i)=> i%3===0) [3,6,9]