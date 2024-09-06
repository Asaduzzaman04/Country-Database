import { useEffect, useState } from "react";


const useCountryData = () => {
    const [countries, setCountries] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                if(response.ok === false){
                    throw new Error("server down")
                }
                const data = await response.json()
                setCountries(data)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return [countries, error, loading]
};

export default useCountryData;