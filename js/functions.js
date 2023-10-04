const urlStart =`https://pokeapi.co/api/v2/`
const urlLimit151= `?limit=1000ffset=0`
const pokemonString = `pokemon`
const loader= document.getElementById(`loader`)
const container= document.getElementById(`container`)
const searcInput = document.getElementById(`searcInput`)
const checkAll = document.getElementById(`checkAll`)
const searchBtn = document.getElementById(`searchBtn`)
   
    
// DICHIARAZIONI

// funzione per ricercare tramite searchbar

function fetchPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${searcInput.value}/`)
    .then(resoult=> resoult.json())
    .then(mon=>{
        container.innerHTML=""
        let article= document.createElement(`article`)
        article.setAttribute(`class`, `col-12 mt-5`)
        article.innerHTML=`<div class=" d-flex ">

        <!-- Button trigger modal -->
        <button type="button" class="border-0 bg-white m-auto hoverBounce" data-bs-toggle="modal"
            data-bs-target="#exampleModal${mon.id}">
            <div class="pokeball d-flex">

                <div class="WUHC">

                </div>
            </div>

            <div class="pokeball2 d-flex">
                <div class="WDHC">

                </div>
            </div>

        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${mon.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">#${mon.id}</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                        <div class="card col-12" style="width: 100%;">
                            <img src="${mon.sprites.front_default}"
                                class="card-img-top img-fluid" alt="${mon.name}">
                            <div class="card-body">

                                
                                <h2 class="card-title">${mon.name}</h5>
                                
                            </div>
                            <ul class="list-group list-group-flush">
                                <h5>Tipo</h5>
                                ${liCreator(mon.types)}
                               
                            </ul>

                        </div>
                    </div>
                    <div class="modal-footer row">
                        <button type="button" class=" col-4 m-auto btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
             <h2 class="text-center pt-2">${mon.name} </h2>`
        container.appendChild(article)
       

    })

}
// funzione per creare li all'interno del template

function liCreator(target){

    let str=""
    
    target.forEach(tipi=>{
       str+= `<li class="list-group-item">${tipi.type.name}</li>`
                
 
    })
    return str
}
// funzione per creare btn con modale
function fetchDatas(target, dNoneTarget){
    fetch(`${urlStart}pokemon/${urlLimit151}`)
    .then(resoult=> resoult.json())
    .then(pokemons=>{pokemons.results.forEach(pokemon => {
    fetch(pokemon.url)
        .then(resoult=> resoult.json())
        .then(mon=>{
        let article= document.createElement(`article`)
        article.setAttribute(`class`, `col-12 col-md-3 mt-5`)
        article.innerHTML=`<div class=" d-flex ">

        <!-- Button trigger modal -->
        <button type="button" class="border-0 bg-white m-auto hoverBounce" data-bs-toggle="modal"
            data-bs-target="#exampleModal${mon.id}">
            <div class="pokeball d-flex">

                <div class="WUHC">

                </div>
            </div>

            <div class="pokeball2 d-flex">
                <div class="WDHC">

                </div>
            </div>

        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${mon.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">#${mon.id}</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body row">
                        <div class="card col-12" style="width: 100%;">
                            <img src="${mon.sprites.front_default}"
                                class="card-img-top img-fluid" alt="${mon.name}">
                            <div class="card-body">

                                
                                <h2 class="card-title">${mon.name}</h5>
                                
                            </div>
                            <ul class="list-group list-group-flush">
                                <h5>Tipo</h5>
                                ${liCreator(mon.types)}
                               
                            </ul>

                        </div>
                    </div>
                    <div class="modal-footer row">
                        <button type="button" class=" col-4 m-auto btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
             <h2 class="text-center pt-2">${mon.name} </h2>`
        target.appendChild(article)
         dNoneTarget.classList.add(`d-none`)

    })

    
});})

}
// funzione per ripristinare tutte le selezioni
function selection(){
   
    if(checkAll.checked){
        loader.classList.remove(`d-none`)
        container.innerHTML="";
        return fetchDatas(container, loader)
    }
    
    
}


// ESECUZIONI

// esecuzione funzione per creare btn con modale
fetchDatas(container, loader)

// al change fa ripartire la funzione per creare i btn con modale
checkAll.addEventListener(`change`, selection)

// ricerc a poekmon nell'input
searchBtn.addEventListener(`click`,fetchPokemon)



     