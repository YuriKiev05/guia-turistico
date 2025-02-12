function carregarItens(){
    fetch('./lugares.json')
    .then(response => response.json()
    .then(lugares =>{
        for(let lugar of lugares){
            const cardItem = document.createElement('div')
            const titulo = document.createElement('h1')
            const img = document.createElement('img')
            const descricao = document.createElement('p')

            titulo.innerHTML = lugar[2]
            img.src = lugar[1]
            descricao.innerHTML = lugar[0]

            console.log(lugar)




            cardItem.appendChild(titulo)
            cardItem.appendChild(img)
            cardItem.appendChild(descricao)

            console.log(lugar)
        }
    }))
}

carregarItens()