const pessoa = {
    saudacao: 'Buenos Dias',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar= pessoa.falar
falar() // conflito entre paradigmas

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa