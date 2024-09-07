import { create } from "zustand";


const useFavouriteStore = create((set)=>({
    favourite: [],
    addToFavourite: (country) => set((state) => {
        if(state.favourite.includes(country)){
            return state
        }else {
            return {favourite: [...state.favourite, country]}
        }
        
    })
}))

export default useFavouriteStore;

// const a = [5,4,6]
// const b = [...a, 8] output:[5,4,6,8]