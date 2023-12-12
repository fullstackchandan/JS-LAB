/*
******
*    *
*    *
*    *
*    *
******
*/


function fullRowpattern(n){
    var str = " ";
    for(var i=0; i<n; i++){
        str += "*";
    }
    console.log(str);
}

function partialRowPattern(n){
    var str = " ";
    str += "*";
    for(var i = 0; i < n-2; i++){
        str = str + " ";
    }
    str += "*";
    console.log(str)
}

//partialRowPattern(6)

function finalPattern(n){
    fullRowpattern(n)
    for(var i=0; i<n-2; i++){
        partialRowPattern(n)
    }
    fullRowpattern(n)
    
}

finalPattern(6)
