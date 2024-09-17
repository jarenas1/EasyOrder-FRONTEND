import { useEffect, useState } from "react"


export default function useFetch(url, options) {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("dentro del useEffect")
        const fetchApi = async () => {
            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error("there was an error")
                }

                setData(await response.json())
            } catch (error) {
                setError(error.message)
                
            } finally {
                setLoading(false)
            }

        }
        fetchApi()
    },[]);
    return {
        data,
        error,
        loading
    }
}
    
      
  

