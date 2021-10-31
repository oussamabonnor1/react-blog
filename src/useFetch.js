import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then((res) => {
                if (!res.ok) {
                    throw Error("Could not load the data.")
                }
                return res.json()
            }).then((data) => {
                setData(data)
                setError(null)
                setIsLoading(false)
            }).catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
        }, 500);
    }, [url])
    return { data, isLoading, error }
}

export default useFetch