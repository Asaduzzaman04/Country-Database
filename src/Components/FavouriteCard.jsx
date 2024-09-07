

const FavouriteCard = ({country}) => {
    return (
        <div className=" bg-slate-100 shadow-lg">
            <h1> {country.name.common}</h1>
            <h1> {country.population}</h1>
        </div>
    );
};

export default FavouriteCard;