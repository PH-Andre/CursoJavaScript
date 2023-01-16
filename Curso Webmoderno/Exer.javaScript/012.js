function fatorial(num){
    let calc = num
    for (i = num; i >= 2; i--) {
        calc = calc * (i - 1)
       }
    
  return calc
}

console.log(fatorial(9))
