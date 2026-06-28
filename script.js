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
        'x', 'x', 'o', // 0, 1, 2
        'o', 'o', 'x', // 3, 4, 5
        'x', 'o', 'x' // 6, 7, 8
    ],

    checkBoard: () => {
        function winner(result){
            if (result == 'x'){
                console.log('x wins');
                player.one.score ++;
                console.log(player.one.score);
                console.log(player.two.score);
                game.clearBoard();
            } 
            
            if (result == 'o'){
                console.log('o wins');
                player.two.score ++;
                console.log(player.one.score);
                console.log(player.two.score);
                game.clearBoard();
            }

            if (result == 'tie'){
                console.log('its a tie');
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
            winner('x');
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
        } else if (game.board.every(Boolean)){
            winner('tie');
        } else {
            console.log('next turn');
        };
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

const display = {
    showBoard: () => {
        const container = document.querySelector('.container');

        const boardTopLeft = document.createElement('div');
        boardTopLeft.classList.add('boardBox');
        boardTopLeft.innerText = game.board[0];
        container.appendChild(boardTopLeft);

        const boardTopMiddle = document.createElement('div');
        boardTopMiddle.classList.add('boardBox');
        boardTopMiddle.classList.add('topMiddle');
        boardTopMiddle.innerText = game.board[1];
        container.appendChild(boardTopMiddle);

        const boardTopRight = document.createElement('div');
        boardTopRight.classList.add('boardBox');
        boardTopRight.innerText = game.board[2];
        container.appendChild(boardTopRight);

        const boardMiddleLeft = document.createElement('div');
        boardMiddleLeft.classList.add('boardBox');
        boardMiddleLeft.classList.add('middleLeft');
        boardMiddleLeft.innerText = game.board[3];
        container.appendChild(boardMiddleLeft);

        const boardMiddleMiddle = document.createElement('div');
        boardMiddleMiddle.classList.add('boardBox');
        boardMiddleMiddle.innerText = game.board[4];
        container.appendChild(boardMiddleMiddle);

        const boardMiddleRight = document.createElement('div');
        boardMiddleRight.classList.add('boardBox');
        boardMiddleRight.classList.add('middleRight');
        boardMiddleRight.innerText = game.board[5];
        container.appendChild(boardMiddleRight);

        const boardBottomLeft = document.createElement('div');
        boardBottomLeft.classList.add('boardBox');
        boardBottomLeft.innerText = game.board[6];
        container.appendChild(boardBottomLeft);

        const boardBottomMiddle = document.createElement('div');
        boardBottomMiddle.classList.add('boardBox');
        boardBottomMiddle.classList.add('bottomMiddle');
        boardBottomMiddle.innerText = game.board[7];
        container.appendChild(boardBottomMiddle);

        const boardBottomRight = document.createElement('div');
        boardBottomRight.classList.add('boardBox');
        boardBottomRight.innerText = game.board[8];
        container.appendChild(boardBottomRight);
    },

    showPlayers: () => {
        const score = document.querySelector('.score');
        score.innerText = 'score:';

        const playerOne = document.createElement('div');
        playerOne.classList.add('playerOne');
        playerOne.innerText = player.one.name + ' - ' + player.one.score;
        score.appendChild(playerOne);

        const playerTwo = document.createElement('div');
        playerTwo.classList.add('playerTwo');
        playerTwo.innerText = player.two.name + ' - ' + player.two.score;
        score.appendChild(playerTwo);

        const playerTurn = document.createElement('div');
        playerTurn.classList.add('playerTurn');
        playerTurn.innerText = player.one.name + `'s turn...`;
        score.appendChild(playerTurn);
    },

    showStartGame: () => {
        const startGame = document.querySelector('.startGame');
        const startGameButton = document.createElement('button');
        startGameButton.classList.add('startGameButton');
        startGameButton.innerText = 'Start Game';
        startGame.appendChild(startGameButton);

        startGameButton.addEventListener('click', () => {
            display.showPlayers();
            startGameButton.classList.add('hidden');
        })
    }
}

display.showBoard();
display.showStartGame();