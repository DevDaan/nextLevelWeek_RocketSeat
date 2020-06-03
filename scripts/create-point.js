
function populateUfs(){

    const stateSelect = document.querySelector("select[name=uf]")

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(result => result.json())
    .then(states => {

        for( const state of states){

            stateSelect.innerHTML += `
            <option value = '${state.id}'>${state.nome}</option>
            `
        }
    })
}

populateUfs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    
    fetch(url)
    .then(result => result.json())
    .then(cities => {

        for( const city of cities){

            citySelect.innerHTML += `
            <option value = '${city.id}'>${city.nome}</option>
            `

        }
        citySelect.disabled = false

    })
}



document.querySelector("select[name=uf]").addEventListener('change', getCities)
