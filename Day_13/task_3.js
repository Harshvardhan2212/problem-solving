function findMinimumCostPath(matrix, sourceRow, sourceColumn, destinationRow, destinationColumn, path = []) {
    // write code here
        let i = sourceRow;
        let j = sourceColumn;
        path = [matrix[sourceRow][sourceColumn]]
        function findPath(i,j,path) {
            if (i == matrix.length - 1) {
                j = j + 1;
                path.push(matrix[i][j]);
            } else if (j == matrix[0].length - 1) {
                i = i + 1;
                path.push(matrix[i][j])
            } else {
                if (matrix[i][j + 1] > matrix[i + 1][j]) {
                    path.push(matrix[i + 1][j]);
                    i = i + 1;
                }
                 else if(matrix[i][j + 1] == matrix[i + 1][j]){
                     path.push(matrix[i][j + 1])
                    let arr = findPath(i,j+1,[])
                    let arr2 = findPath(i+1,j,[])
                    return (maximum(arr)<maximum(arr2))?[...path,...arr]:[...path,...arr2]
                } 
                 else {
                    path.push(matrix[i][j + 1]);
                    j = j + 1;
                }
            }

            if (i == destinationRow && j == destinationColumn) {
                return path;
            }else{
                return findPath(i,j,path)
            }
        }
        return findPath(i,j,path) 
}