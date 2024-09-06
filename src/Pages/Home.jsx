import { useState } from "react";
import CountryCard from "../Components/CountryCard";
import useCountryData from "../Hooks/useCountryData";


const Home = () => {

    const [countries, error, loading]= useCountryData()
    const [visited, setVisited] = useState([])
    console.log(countries)

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    const handleVisit = (name)=>{
        const arr =[...visited]

        if(!arr.includes(name)){
            arr.push(name)
            setVisited(arr)
        }
    }

    return (
        <div>
            <h2>Country Database</h2>
            <p>No of Countries: {countries.length}</p>
            <p>No of countries I've visited: {visited.length}</p>

            <div className="mx-10 mt-10 grid gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    countries.map((country)=> <CountryCard key={country.name.common} country={country} handleVisit={handleVisit} visited={visited} />)
                }
            </div>
        </div>
    );
};

export default Home;

// const a = [{}, {}, {}, {}]
// const a = [5,4,7,9,8] a.length