

function getcharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");
    results 
        .then(response=> response.json())
        .then(data=>{ done(data)});


}

getcharacters(data=> { 
    data.results.forEach(personaje=>{
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>

            <div class = "datos">
            <img src="${personaje.image}" alt= "${personaje.name}"> 
            </div>
        </article>
        `
   );    const section = document.querySelector("section");
   section.append(article);
    });


 })

