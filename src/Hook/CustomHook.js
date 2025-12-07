import axios from "axios";
import { useEffect, useState } from "react"

const useApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true)
        axios('../data.json')//We have to use Dual dot otherwise Nested route won't be able to find dats
        .then(data => setApps(data.data))
        .catch(err=>setError(err))
        .finally(setLoading(false))

    }, [])
    return {apps,loading,error};
}
export default useApps;