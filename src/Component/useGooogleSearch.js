import { useState, useEffect } from "react";
import { API_KEY, CONTEXT_KEY } from "./ApiKey";




const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    let searchTerm = term;

    if (!term) {
        searchTerm = 'google';
    }

    useEffect(() => {

        const fetchData = async () => {
            // try {
                let requestURL = `https://www.googleapis.com/customsearch/v1`;

                requestURL += `?key=${API_KEY}`;
                requestURL += `&cx=${CONTEXT_KEY}`;
                requestURL += `&q=${searchTerm}`;

                fetch(requestURL)
                    .then(response => response.json())
                    .then(result => {
                        setData(result);
                    })

            //     const res = await fetch(requestURL); // <- client --> server --> client (3s)
            //     const result = await res.json();
            //     setData(result);
            
            //  catch (err) {
            //     console.warn(err)
            // }
            //  } 
        }

        fetchData();

    }, [term])

    return { data };
}

export default useGoogleSearch