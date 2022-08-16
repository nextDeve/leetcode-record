/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let [m, n] = [board.length, board[0].length];
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const find = (i, j, k) => {
        if (board[i][j] !== word[k]) return false;
        else if (k === word.length - 1) return true;
        visited[i][j] = true;
        let result = false;
        for (let d of dir) {
            let newi = i + d[0], newj = j + d[1];
            if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
                if (!visited[newi][newj]) {
                    const flag = find(newi, newj, k + 1);
                    if (flag) {
                        result = flag;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (find(i, j, 0)) return true;
            }
        }
    }
    return false;
};