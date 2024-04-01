import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export const Boton = () => {

    let [nextpage, setNexPage] = useState(1);
    const [character, setCharacters] = useState([])

    function incrementaraPagina() {
        setNexPage(nextpage + 1)
    }

    function anteriorPagina() {
        setNexPage(nextpage - 1)
    }

    useEffect(() => {
        async function fetchData() {
            const datos = await fetch(
                `https://rickandmortyapi.com/api/character?page=${nextpage}`
            );
            const { results } = await datos.json();
            setCharacters(results);
        }
        fetchData();  
    }, [nextpage]);

    return (
        <div className="container py-5">
            <nav>
                {nextpage > 0 && (
                    <Button onClick={anteriorPagina}>
                        Previous
                    </Button>
                )}
                <Button onClick={incrementaraPagina}>
                    Next
                </Button>
            </nav>
        </div>
    )
}
