const avo = {
    historia: "cachalote batia no barco",
    contarHistoria(){
        console.log(this.historia)

    }
}

class Pai extends avo {
    constructor(sobrenome, profissão = 'professor'){
        super(sobrenome)
    }
}

let pauloCesar = new Pai;

pauloCesar.contarHistoria()