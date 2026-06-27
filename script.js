const player = {
    one: {
        name: 'Player One',
        score: 0
    },
    
    two: {
        name: "Player Two",
        score: 0
    },
}

const game = {
    board: [
        'x', 'x', 'x', // 0, 1, 2
        'o', 'o', 'x', // 3, 4, 5
        'x', 'o', 'o' // 6, 7, 8
    ],

    checkBoard: () => {
        //horizontal wins
        if ((game.board[0] == 'x') && (game.board[1] == 'x') && (game.board[2] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[3] == 'x') && (game.board[4] == 'x') && (game.board[5] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[6] == 'x') && (game.board[7] == 'x') && (game.board[8] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[0] == 'o') && (game.board[1] == 'o') && (game.board[2] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else if ((game.board[3] == 'o') && (game.board[4] == 'o') && (game.board[5] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else if ((game.board[6] == 'o') && (game.board[7] == 'o') && (game.board[8] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } 
        //vertical wins 
        else if ((game.board[0] == 'x') && (game.board[3] == 'x') && (game.board[6] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[1] == 'x') && (game.board[4] == 'x') && (game.board[7] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[2] == 'x') && (game.board[5] == 'x') && (game.board[8] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[0] == 'o') && (game.board[3] == 'o') && (game.board[6] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else if ((game.board[1] == 'o') && (game.board[4] == 'o') && (game.board[7] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else if ((game.board[2] == 'o') && (game.board[5] == 'o') && (game.board[8] == 'o')){
            console.log('o wins');
            player.two.score ++;
        }
        //diagonal wins
        else if ((game.board[0] == 'x') && (game.board[4] == 'x') && (game.board[8] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[2] == 'x') && (game.board[4] == 'x') && (game.board[6] == 'x')){
            console.log('x wins');
            player.one.score ++;
        } else if ((game.board[0] == 'o') && (game.board[4] == 'o') && (game.board[8] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else if ((game.board[2] == 'o') && (game.board[4] == 'o') && (game.board[6] == 'o')){
            console.log('o wins');
            player.two.score ++;
        } else {console.log('next turn')};
    }
 
}
