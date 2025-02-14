const apiUrl = 'http://localhost:3000/0'


function carregarItens(){
    fetch(apiUrl)
    .then(response => response.json()
    .then(lugares =>{
        for(let lugar of lugares){
            console.log(lugar)
            const cardItem = document.createElement('div')
            const titulo = document.createElement('h1')
            const img = document.createElement('img')
            const descricao = document.createElement('p')

            cardItem.id = lugar.id
            titulo.innerHTML = lugar.nome
            img.src = lugar.urlImg
            descricao.innerHTML = lugar.desc

            
            cardItem.classList.add('item')
            cardItem.appendChild(titulo)
            cardItem.appendChild(img)
            cardItem.appendChild(descricao)

            document.querySelector('main').appendChild(cardItem)

          

           
        }
        
    }))
}

carregarItens()

