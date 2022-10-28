import { useEffect, useState } from "react"
import { SuggestionTypes } from "types";

interface Props {
    query: string | null
}

const useFetchAddress = (props: Props) => {
    const { query } = props;
    const [suggestions, setSuggestions] = useState<SuggestionTypes[] | null>(null)
    const [errors, setErrors] = useState<{status:number, statusText:string}| null>(null)
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = ""; // get your api key from https://dadata.ru/api/suggest/address/ 
    useEffect(() => {
        if (query && query.trim().length >= 3) {
            const body = {
                query: query
            };
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify(body)
            })
                .then((res) => {
                    if (res.status === 200) {
                        setErrors(null);
                        return res.json();
                    } else {
                        setErrors(res)
                    }
                })
                .then((obj) => {
                    if (obj) {
                        setSuggestions(obj.suggestions);
                    }
                })
                .catch(error => console.log("error", error));
        }else {
            setSuggestions(null);
        }
    }, [query, token, url]);
    return {
        suggestions,
        errors
    }
}


export default useFetchAddress;