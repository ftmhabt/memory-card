import { useState } from "react";

export default function Deck({ cards }) {
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [clicked, setClicked] = useState([]);
  const [count, setCount] = useState(0);

  let arr = [];

  function randomize() {
    while (arr.length < 5) {
      let r = Math.floor(Math.random() * 10);
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    let randomCats = [];
    for (let i = 0; i < arr.length; i++) {
      randomCats.push(cards[arr[i]]);
    }

    return randomCats;
  }

  function addToArray(id) {
    if (count < 9) {
      if (clicked.includes(id)) {
        setLose(true);
      } else {
        setClicked([...clicked, id]);
      }
      setCount(count + 1);
    }else if(count===9){
      setWin(true);
    }
  }

  return (
    <div>
      {randomize().map((cat) => (
        <img
          src={cat.url}
          alt=""
          key={cat.id}
          onClick={() => addToArray(cat.id)}
        />
      ))}
      {lose ? <div>you lost!</div>  : <></>}
      {win ? <div>you won!</div> : <></>}
    </div>
  );
}
