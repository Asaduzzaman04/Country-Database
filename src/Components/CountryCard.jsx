import { SiTicktick } from "react-icons/si";
import { NavLink } from "react-router-dom";

const CountryCard = ({country, handleVisit, visited}) => {
    const {flags, name, population} = country
    console.log(country, visited)
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-52 bg-cover"
              src={flags?.png}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className=" flex gap-4 items-center">
            <h2 className="card-title">{name.common}</h2>
            {visited.includes(name.common) && <SiTicktick />}
            </div>
            <p>Population: {population}</p>
            <div className="card-actions justify-end">
              <button onClick={()=> handleVisit(name.common)} className="btn btn-accent btn-sm btn-outline">Mark as visited</button>
              <NavLink to={`/countryDetails/${name.common}`}><button className="btn btn-accent btn-sm btn-outline">View Details</button></NavLink>
            </div>
          </div>
        </div>
    );
};

export default CountryCard;