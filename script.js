const player = {
    one: {
        name: 'Player One', //x
        score: 0
    },
    
    two: {
        name: "Player Two", //o
        score: 0
    },
}

const game = {
    board: [
        '', '', '', // 0, 1, 2
        '', '', '', // 3, 4, 5
        '', '', '' // 6, 7, 8
    ],

    checkBoard: () => {
        function winner(playerLetter){
            if (playerLetter = 'x'){
                console.log('x wins');
                player.one.score ++;
                console.log(player.one.score);
                console.log(player.two.score);
                game.clearBoard();
            } else (playerLetter = 'o'){
                console.log('o wins');
                player.two.score ++;
                console.log(player.one.score);
                console.log(player.two.score);
                game.clearBoard();
            }
        }

        //horizontal wins
        if ((game.board[0] == 'x') && (game.board[1] == 'x') && (game.board[2] == 'x')){
            winner('x');
        } else if ((game.board[3] == 'x') && (game.board[4] == 'x') && (game.board[5] == 'x')){
            winner('x');
        } else if ((game.board[6] == 'x') && (game.board[7] == 'x') && (game.board[8] == 'x')){
            winner('x');
        } else if ((game.board[0] == 'o') && (game.board[1] == 'o') && (game.board[2] == 'o')){
            winner('o');
        } else if ((game.board[3] == 'o') && (game.board[4] == 'o') && (game.board[5] == 'o')){
            winner('o');
        } else if ((game.board[6] == 'o') && (game.board[7] == 'o') && (game.board[8] == 'o')){
            winner('o');
        } 
        //vertical wins 
        else if ((game.board[0] == 'x') && (game.board[3] == 'x') && (game.board[6] == 'x')){
            cwinner('x');
        } else if ((game.board[1] == 'x') && (game.board[4] == 'x') && (game.board[7] == 'x')){
            winner('x');
        } else if ((game.board[2] == 'x') && (game.board[5] == 'x') && (game.board[8] == 'x')){
            winner('x');
        } else if ((game.board[0] == 'o') && (game.board[3] == 'o') && (game.board[6] == 'o')){
            winner('o');
        } else if ((game.board[1] == 'o') && (game.board[4] == 'o') && (game.board[7] == 'o')){
            winner('o');
        } else if ((game.board[2] == 'o') && (game.board[5] == 'o') && (game.board[8] == 'o')){
            winner('o');
        }
        //diagonal wins
        else if ((game.board[0] == 'x') && (game.board[4] == 'x') && (game.board[8] == 'x')){
            winner('x');
        } else if ((game.board[2] == 'x') && (game.board[4] == 'x') && (game.board[6] == 'x')){
            winner('x');
        } else if ((game.board[0] == 'o') && (game.board[4] == 'o') && (game.board[8] == 'o')){
            winner('o');
        } else if ((game.board[2] == 'o') && (game.board[4] == 'o') && (game.board[6] == 'o')){
            winner('o');
        } else {console.log('next turn')};
    },

    clearBoard: () => {
        for (let i = 0; i < 9; i++){
            game.board[i] = '';
        }
        console.log(game.board);
    }
 
}

function markX(location) {
    if (game.board[location]){
        return console.log('already filled, please try another');
    }
    game.board[location] = 'x';
    console.log(game.board);
    console.log(`It is now ${player.two.name}'s turn`);
    game.checkBoard();
}

function markO(location) {
    if (game.board[location]){
        return console.log('already filled, please try another');
    }
    game.board[location] = 'o';
    console.log(game.board);
    console.log(`It is now ${player.one.name}'s turn`);
    game.checkBoard();
}

console.log(game.board);