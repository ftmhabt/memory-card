export default function Randomize({ cards }) {
  let arr = [];
  let clicked = [];
  while (arr.length < 5) {
    let r = Math.floor(Math.random() * 10);
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  let randomCats = [];
  for (let i = 0; i < arr.length; i++) {
    randomCats.push(cards[arr[i]]);
  }

  function addToArray(id) {
    if (clicked.includes(id)) {
    //   <Lose />
    } else {
      clicked.push(id);
    }
  }

  return (
    <div>
      {randomCats.map((cat) => (
        <img src={cat.url} alt="" key={cat.id}  onClick={()=>addToArray(cat.id)} />
      ))}
    </div>
  );
}
