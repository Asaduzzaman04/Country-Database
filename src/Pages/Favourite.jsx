import FavouriteCard from "../Components/FavouriteCard";
import useFavouriteStore from "../Hooks/useFavouriteStore";


const Favourite = () => {
    const favourite = useFavouriteStore(state => state.favourite)
    return (
        <div>
            <h1>Favourite Country</h1>
            <div className="mx-10 mt-10 grid gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                favourite.map(country => <FavouriteCard key={country} country={country} /> )
            }
            </div>
        </div>
    );
};

export default Favourite;