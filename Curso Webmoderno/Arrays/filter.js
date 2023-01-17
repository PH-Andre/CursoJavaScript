const produtos = [
    {nome:'notebook', preco: 2499, fragil:true},
    {nome:'iPad pro', preco: 4199, fragil:true},
    {nome:'Copo de Vidro', preco: 12.49, fragil:true},
    {nome:'Copo de Plástico', preco: 18.99, fragil:false}
]

console.log(produtos)
console.log(produtos.filter(function(p){
    return p.preco > 2400
}))

//filtra os elemente de acordo com a sentença que eu coloco

function fragil(e){
    
 return e.fragil
    
}

function caro(e){
    
 return e.preco >= 500
    
}

console.log(produtos.filter(caro).filter(fragil))