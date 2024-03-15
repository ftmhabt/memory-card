export default function GetCards(){
    let allCards=[];
    const key='live_TcC4FpAsADtICHsK7oh588oZaCve8Gn99tzudM5JAuAfg8ImYjxpmUMTaxLLcg7V';

    async function getCats() {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=100&api_key=${key}`,
            { mode: 'cors' });
        const json = await response.json();
        return json;
    }

    async function fill(){

        let catJson= await getCats();
        
        for (let i = 0; i < 100; i++) {
            let cat={id:'',img:''};
            cat.id=catJson[i].id;
            cat.img=catJson[i].url;


            allCards.push(cat);
        }
    }

    fill();
    
}