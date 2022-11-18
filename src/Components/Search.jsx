import React, {useState, useRef} from 'react';
import FilmByTitle from './Film/FilmByTitle';

export default function Search(){
    const queryInput = useRef();
    const [query, setQuery] = useState("");

    function handleSearch() {
        setQuery(queryInput.current.value);
    }


return (
    <div>
        <h1>Search</h1>
        <input type="text" ref={queryInput} onChange={handleSearch} placeholder="Enter title here" />

        <FilmByTitle query={query} />
    </div>
)

}