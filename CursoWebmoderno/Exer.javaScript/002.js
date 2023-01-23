function criarTriangulo(a, b, c){
           if (a == b && b == c) {
            return 'Equilátero'
           } else if(a == b || a == c || c == b){
            return 'Isósceles'
           } else if(a != b & a != c & c != b ){
            return 'Escaleno'
           }                     
        }



console.log(criarTriangulo(1, 2, 3))
console.log(criarTriangulo(2, 2, 2))
console.log(criarTriangulo(3, 2, 3))

