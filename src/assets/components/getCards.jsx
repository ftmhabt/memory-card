import  { useState, useEffect } from 'react';

export default function GetCards() {
    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        async function getCats() {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`,
                { mode: 'cors' });
            const json = await response.json();
            return json;
        }

        async function fill(){
            let catJson= await getCats();
            let cards = [];
            for (let i = 0; i < 10; i++) {
                cards.push(catJson[i].url);
            }
            setAllCards(cards);
        }

        fill();
    }, []);

    return allCards;
}
