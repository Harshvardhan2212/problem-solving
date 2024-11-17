
    
function maximalRectangle(matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Convert matrix elements to integers
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = parseInt(matrix[i][j]);
        }
    }
    
    // Function to calculate the histogram for each row
    function calculateHistogram(row) {
        const stack = [];
        let maxArea = 0;
        row.push(0); // Add a sentinel value to the end
        for (let i = 0; i < row.length; i++) {
            while (stack.length > 0 && row[i] < row[stack[stack.length - 1]]) {
                const h = row[stack.pop()];
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
        row.pop(); // Remove the sentinel value
        return maxArea;
    }
    
    let maxArea = 0;
    const histogram = new Array(cols).fill(0);
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                histogram[j] = 0;
            } else {
                histogram[j] += 1;
            }
        }
        maxArea = Math.max(maxArea, calculateHistogram(histogram));
    }
    
    return maxArea;
}

// Example usage:
const matrix = [["1","0","1","0","0"],
                ["1","0","1","1","1"],
                ["1","1","1","1","1"],
                ["1","0","0","1","0"]];
console.log(maximalRectangle(matrix)); // Output: 6
