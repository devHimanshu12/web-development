// Triangle Questions

// *
// * *
// * * *
// * * * *
// * * * * *

function rightAnglePattern(n){
    let pattern = ""
    for(let i = 0;i<=n;i++){
        for(let j = 0;j<i;j++){
            pattern += "*"
        }
        pattern += '\n'
    }
    return pattern;
}

console.log(rightAnglePattern(5))

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function equilateralTriangle(n){
    let pattern = ""
    for(let i = 0; i<=n; i++){
        pattern += '\n'
        for(let j = 0; j<n-i; j++){
            pattern += " "
        }
        for(let j = 0; j<2*i-1; j++){
            pattern += "*"
        }
    }
    return pattern
}

console.log(equilateralTriangle(5))