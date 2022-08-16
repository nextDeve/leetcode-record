/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let [m, n] = [board.length, board[0].length]
    let dfs = (matrix, i, j) => {
        matrix[i][j] = '#';
        if (i + 1 < m) {
            if (matrix[i + 1][j] === 'O') dfs(matrix, i + 1, j);
        }
        if (i - 1 > 0) {
            if (matrix[i - 1][j] === 'O') dfs(matrix, i - 1, j);
        }
        if (j + 1 > 0) {
            if (matrix[i][j + 1] === 'O') dfs(matrix, i, j + 1);
        }
        if (j - 1 > 0) {
            if (matrix[i][j - 1] === 'O') dfs(matrix, i, j - 1);
        }
    }
    for (let i = 0; i < n; i++) {
        if (board[0][i] === 'O') {
            dfs(board, 0, i);
        }
        if (board[m - 1][i] === 'O') {
            dfs(board, m - 1, i);
        }
    }
    for (let i = 1; i < m - 1; i++) {
        if (board[i][0] === 'O') {
            dfs(board, i, 0);
        }
        if (board[i][n - 1] === 'O') {
            dfs(board, i, n - 1);
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            if (board[i][j] === '#') board[i][j] = 'O';
        }
    }
};
solve([["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"], ["X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X"]])


