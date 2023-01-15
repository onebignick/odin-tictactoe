// player 1 = true, player 2 = false
let player1Turn = true;

const TicTacToe = () => {
    const grid = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];

    const playerMove = (move, place) => {
        let row = +place[0];
        let column = +place[1];
        grid[row][column] = move;
        let result = checkWin(move);
        console.log(result);
    }

    const checkWin = (move) => {
        for (let i=0; i<3; i++) {
            // check rows
            if (grid[i][0] === move &&  grid[i][1] === move && grid[i][2] === move) {
                return 1
            // check columns
            } else if (grid[0][i] === move &&  grid[1][i] === move && grid[2][i] === move) {
                return 1
            }
        }

        // check diagonals
        if ((grid[0][0] === move && grid[1][1] === move && grid[2][2] === move) ||
            (grid[2][0] === move && grid[1][1] === move && grid[0][2] === move)) {
            return 1
        }
        return 0
    }
    return {grid, playerMove};
}

const grid = TicTacToe();

const createTicTacToeGrid = (() => {
    for (let i=0; i<3; i++) {
        let row = $('<div/>');
        row.addClass('grid-row');
        for (let j=0; j<3; j++) {
            let square = $('<div/>').attr('id', `${i}${j}`);
            square.addClass('square');
            square.on("click", ()=>{
                if (square.is(':empty') === true) {
                    if (player1Turn === true) {
                        square.html('X');
                        player1Turn = false;
                        grid.playerMove('X', square.attr('id'));
                    } else {
                        square.html('O');
                        player1Turn = true;
                        grid.playerMove('O', square.attr('id'));
                    }
                }
            })
            row.append(square);
        }
        $("#tictactoe-grid").append(row);
    }
})()

