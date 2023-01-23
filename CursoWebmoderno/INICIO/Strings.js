const escola = "Cod3r";
console.log(escola.charAt(4))
console.log(escola.charAt(5)) // nao da erro, mas nao chou nenhum erro
 
console.log(escola.charCodeAt(3)) // retorna codigo do caractere   

console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // vai apartir do indice 1, até o final
console.log(escola.substring(1,3)),2 // vai apartir do indice 1, até o segundo indice indicado

console.log('Escola  '.concat(escola).concat("!!"))   // concatenar String
console.log('Escola  ' + escola + "!!")   // concatenar String
console.log('10' + 10) // String tem preferencia, entao o resultado fica 1010 em vez de 20
console.log('10' / 2) // Nesse caso o operador nao faz sentido para string entao transforma em  number e realiza a operação

console.log(escola.replace(3,'e'))  // subistitui o primeiro parametro pelo segundo 
console.log(escola.replace(3,'e'))  // subistitui o primeiro parametro pelo segundo 


console.log('Ana,Maria,Pedro'.split(','))    // gera uma lista separada pelo parametro passado no split

// TEMPLATE 
var templateExemplo = `
   olá
  ${escola}!`

console.log(templateExemplo);

//  EXPRESSOES...

console.log(`1 + 1 = ${1+1}`)

// função passar para maiusculo

const up = parametroQueVaiSerPassado => parametroQueVaiSerPassado.toUpperCase(); 

console.log(`Eiii... ${up('cuidadooo')}!!`)                     // ${   }      insere uma variavel no meio de uma string, no caso no template tem mais uso