class pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}
        Eta lele`)
        
    }
}

const p1 = new pessoa('jão')
p1.falar()

const pessoa2 = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }

    }

    let  p2 = pessoa2('Jãones')
    p2.falar() 