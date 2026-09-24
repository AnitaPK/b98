function printSquare(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=1; j<=n; j++){
            line = line + " *"
            // line += " *"
        }
        console.log(line)
    }
}
printSquare(5)

function printTriangle(n){
    for(i=1;i<=n;i++){
        line = ""
        for(j=1;j<=i;j++){
            line += " *"
        }
        console.log(line)
    }
}
printTriangle(5)

function printInvertedTriangle(n){
    for(i=1;i<=n;i++){
        line = ''
        for(j=i;j<=n;j++){
            line+=" *"
        }
        console.log(line)
    }
}
printInvertedTriangle(5)

//       i          j            line 
// 1st   1          1            " *"
//                  2            " * *"
//                  3            " * * *"
//                  4            " * * * *"
//                  5            " * * * * *"
//                  6
//       2          2            " *"
//                  3            " * *"
//                  4            " * * *"
//                  5            " * * * *"
//                  6
//       3          3            " *"
//                  4            " * *"
//                  5            " * * *"
//                  6
//       4          4            " *"
//                  5            " * *"
//                  6
//       5          5            " *"
//                  6 
//       6

function printPyramid(n){
    for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j >= n - i + 1 && j <= n + i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
  
}

printPyramid(5)