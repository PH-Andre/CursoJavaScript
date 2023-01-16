const vetor = [1, 2, 3, 4, 6, 9, 10, 11, 12, 13, 20, 21, 22, 23]

function vectorCount(array){
    let dentro = 0
    let fora = 0
    

    for(i = 0; i < array.length; i ++){
 if( array[i] >= 10 && array[i] <= 20){
    
    dentro = dentro +1
 }else{
    fora = fora + 1
 }
 }
return `Dentro: ${dentro}   Fora: ${fora}`
}

console.log(vectorCount(vetor))