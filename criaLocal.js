//import { writeFileSync } from 'fs'
const apiUrl = 'http://localhost:3000/0';

//inputs
const nome = document.getElementById('inpNome')
const img = document.getElementById('inpImg')
const desc = document.getElementById('inpDesc')
const btnSubmit = document.getElementById('btn-submit') 



async function getLocais(){
    const response = await fetch(apiUrl)
    const locais = await response.json()
    return locais
}

async function addLocal(nome, urlImg, desc){
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, urlImg, desc})
    })

    const local = await response.json()
    getLocais()
}


btnSubmit.addEventListener('click', e =>{
    e.preventDefault()
    addLocal(nome.value, img.value, desc.value)
})

getLocais()



function exibeElementos(){
    
    fetch(apiUrl)
    .then(response => response.json()
    .then(locais =>{
        for(let local of locais){
            console.log(local)
            const divLocal = document.createElement('div')
            const desc = document.createElement('p')
            const btnApagar = document.createElement('button')
    
            desc.innerHTML = `nome: ${local.nome}    descricao: ${local.desc}`
            btnApagar.innerHTML = 'APAGAR'
    
    
            divLocal.appendChild(desc)
            divLocal.appendChild(btnApagar)
    
            divLocal.classList.add('local')
            divLocal.id = local.id
    
            btnApagar.addEventListener('click', () =>{
                apagaElem(local.id)
            })


            document.getElementById('listaElem').appendChild(divLocal)
            
     
        }
        
    }))


    
    
  
    
}

async function apagaElem(id){
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE'});
    getLocais();
}

exibeElementos()













