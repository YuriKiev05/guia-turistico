/*const nome = document.getElementById('inpNome')
const img = document.getElementById('inpImg')
const desc = document.getElementById('inpDesc')
const btn = document.getElementById('btn-submit')*/

class Item{
    constructor(nome, img, descricao){
        this.nome = nome
        this.img = img
        this.descricao = descricao
        this.id = ''

       
    }

    
    geraID(){
        
       for(let i = 0; i<8; i++){
        this.id += Math.floor(Math.random() * 9).toString()
       }
    }

}

const itens = []


/*btn.addEventListener('click', e =>{
    e.preventDefault()
    criaItem(nome.value, img.value, descricao.value)

})*/

function criaItem(nome, img, descricao){
    const item = new Item(nome, img, descricao)
    item.geraID()
    itens.push(item)
   
}





criaItem('joao ', 'linkDam', 'lugar ')
criaItem('joao pessoa', 'linkDaImagem', ' legal')
criaItem(' pessoa', 'liaImagem', 'lugal')
criaItem('joao pessoa', 'linkDaImagem', 'lugar legal')
console.log(itens)



