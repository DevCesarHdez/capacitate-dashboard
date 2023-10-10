import { useEffect, useState } from "react";
import inscriptions from "../services/incriptions";

const useInscriptions = () => {
    const [data, setData] = useState<null | ResponseData>(null)
    const [error, setError] = useState<null | object>(null)
    const [loading, setLoading] = useState(false)

    const fetch = async () => {
        setLoading(true)
        const res = await inscriptions()
        if ( res.data ){
            setData(res.data)
        } else {
            setError({message: 'Ocurrio un error en la petición'})
        }
        setLoading(false)
    }

    useEffect(() => {
        fetch()
    }, [])

    return {data, error, loading}
}

export default useInscriptions;