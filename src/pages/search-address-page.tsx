import React, { useState, useEffect, FormEvent } from "react";
import { useFetchAddress } from "hooks";
import { SuggestionTypes } from "types";
import { Button } from 'components';
import "styles/pages/search-page.scss"

const SearchAddressPage = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const { suggestions, errors } = useFetchAddress({ query: searchText });


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('work')
        if (query.trim().length >= 3) {
            setSearchText(query.trim())
        }else{
            setSearchText("");
        }
    };

    useEffect(() => {
        if (errors) {
            //I would create a modal for displaying errors but as it's not required, so I didn't add it.
            window.alert("Ошибка!")
        }
    }, [suggestions, errors])

    return (
        <div className="search-page">
            <div className="_header">
                <h2 className="title">Поиск адресов</h2>
                <p className="subtitle">Введите интересующий вас адрес</p>
            </div>
            <div className="content">
                <div className="search_input">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input
                            placeholder="Введите интересующий вас адрес"
                            className={"input"}
                            type="text"
                            value={query}
                            onInput={(e) => setQuery((e.target as HTMLInputElement).value)} />
                        <Button name="search" value="Поиск" type="submit" iconName="search" iconClass="icon" />
                    </form>
                </div>
                {suggestions && suggestions.length > 0 ? <>
                    <div className="addresses_list">
                        <strong className="title">Адреса</strong>
                        <div>
                            {suggestions.map((item: SuggestionTypes, index: number) => (
                                <p key={index} className="address">
                                    {item.value}
                                </p>
                            ))}
                        </div>
                    </div>
                </>
                    : null}
            </div>
        </div>
    )
}

export default SearchAddressPage;