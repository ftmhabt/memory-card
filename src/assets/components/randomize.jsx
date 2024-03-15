import GetCards from "./getCards";

export default function Randomize() {
  let allcats = GetCards();

  console.table(allcats);
  let arr = [];

  while (arr.length < 5) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  console.table(arr);

  let randomCats=[];
  for (let i = 0; i < arr.length; i++) {
    randomCats.push(allcats[arr[i]]);
  }

  console.table(randomCats);
  return (
    <div>
      {randomCats.map((cat, index) => (
        <img src={cat} alt="" key={index} />
      ))}
    </div>
  );
}
