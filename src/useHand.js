import { useState, useEffect } from 'react';

const useHand = (url,player) => {
    console.log(url,player)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url + player + "list/", { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then(data => {
               
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => abortCont.abort();
    }, [url,player]);
    console.log("dong",data,isPending,error)
    return { data, isPending, error }
}

export default useHand;