import { useState, useEffect } from "react";
import Deck from "./deck";

export default function GetCards() {
  const [allCards, setAllCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCats() {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10`
        ); 
        const json = await response.json();
        let url;
        let id;
        let cards=[];
        for (let i = 0; i < 10; i++) {
            url=json[i].url;
            id=json[i].id;
            cards.push({'id':id,'url':url});
        }
        setAllCards(cards);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    }

    getCats();
  }, []);

  return (
    <div>{isLoading ? <p>Loading...</p> : <Deck cards={allCards} />}</div>
  );
}
