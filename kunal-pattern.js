/*
*
**
***
**
*
*/

// totalNoOfRows = 2N -1, N = max no of stars per row

function pat1 (n){
    var str = "";
    //out fr loop for row

    for(var row = 0; row < 2*n; row++){
        var totalColsInRow = row>n ? 2*n-row : row;
        for( var col = 0; col < totalColsInRow; col++){
            str += "*";
        }
        str += '\n';
    }
    console.log(str)
}

//pat1(3)


/*
  *  
  ** 
 ***
  ** 
  *  
*/

//pat2 

// totalNoOfRows = 2N -1, N = max no of stars per row

function pat2 (n){
    var str = "";
    //out fr loop for row
    for(var row = 0; row < 2*n; row++){
        var totalColsInRow = row>n ? 2*n-row : row;
        var InNoOfSpaces = n- totalColsInRow;
        for(var spa = 0; spa < InNoOfSpaces; spa++){
            console.log(" ");
        }
        for( var col = 0; col < totalColsInRow; col++){
            str += "*";
        }
        str += '\n';
    }
    console.log(str)
}

pat2(3)