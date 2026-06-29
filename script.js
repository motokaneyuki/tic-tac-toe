const player = {
    one: {
        name: 'Player One', //x
        score: 0
    },
    
    two: {
        name: "Player Two", //o
        score: 0
    },

    newGame: 'no'
}

const game = {
    board: [
        '', '', '', // 0, 1, 2
        '', '', '', // 3, 4, 5
        '', '', '' // 6, 7, 8
    ],

    checkBoard: () => {
        function winner(result){
            const winnerDialog = document.querySelector('#winnerDialog');
            const winnerName = document.querySelector('.winnerName');
            const continueButton = document.querySelector('.continueButton');

            continueButton.addEventListener('click', (e) => {
                e.preventDefault();
                winnerDialog.close();
                game.clearBoard();
                player.newGame = 'yes';
                display.showBoard();
            })

            if (result == 'x'){
                console.log('x wins');
                player.one.score ++;
                winnerName.innerText = player.one.name + ' wins!';
                winnerDialog.showModal();
                console.log(player.one.score);
                console.log(player.two.score);
                // game.clearBoard();
            } 
            
            if (result == 'o'){
                console.log('o wins');
                player.two.score ++;
                winnerName.innerText = player.two.name + ' wins!';
                winnerDialog.showModal();
                console.log(player.one.score);
                console.log(player.two.score);
                // game.clearBoard();
            }

            if (result == 'tie'){
                console.log('its a tie');
                winnerName.innerText = `It's a tie!`;
                winnerDialog.showModal();
                console.log(player.one.score);
                console.log(player.two.score);
                // game.clearBoard();
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

        function createBoardBox(location, number){
            location.classList.add('boardBox');
            location.innerText = game.board[number];
            if (location.textContent == 'x'){
                location.style.color = 'paleturquoise';
            } else {
                location.style.color = 'palegoldenrod';
            }  
            container.appendChild(location);
        }
        
        const boardTopLeft = document.createElement('div');
        createBoardBox(boardTopLeft, 0);

        const boardTopMiddle = document.createElement('div');
        boardTopMiddle.classList.add('topMiddle');
        createBoardBox(boardTopMiddle, 1);

        const boardTopRight = document.createElement('div');
        createBoardBox(boardTopRight, 2);

        const boardMiddleLeft = document.createElement('div');
        boardMiddleLeft.classList.add('middleLeft');
        createBoardBox(boardMiddleLeft, 3);

        const boardMiddleMiddle = document.createElement('div');
        createBoardBox(boardMiddleMiddle, 4);
        
        const boardMiddleRight = document.createElement('div');
        boardMiddleRight.classList.add('middleRight');
        createBoardBox(boardMiddleRight, 5);

        const boardBottomLeft = document.createElement('div');
        createBoardBox(boardBottomLeft, 6);

        const boardBottomMiddle = document.createElement('div');
        boardBottomMiddle.classList.add('bottomMiddle');
        createBoardBox(boardBottomMiddle, 7);

        const boardBottomRight = document.createElement('div');
        createBoardBox(boardBottomRight, 8);

        const turn = document.querySelector('.turn');
        function showTurn() {
            const playerTurn = document.createElement('div');
            playerTurn.classList.add('playerTurn');
            if (!container.classList.contains('turnO')){
                playerTurn.innerText = player.two.name + `'s turn...`;
            }
            if (container.classList.contains('turnO')){
                playerTurn.innerText = player.one.name + `'s turn...`;
            }
            turn.appendChild(playerTurn);
        }

        function refreshBoard() {
            container.replaceChildren();
            display.showBoard();
            display.showPlayers();
            turn.replaceChildren();
            showTurn();
        }

        if (player.newGame == 'yes'){
            player.newGame = 'no';
            refreshBoard();
        }

        function showStart(){
            const startGame = document.querySelector('.startGame');
            const startGameButton = document.createElement('button');
            startGameButton.classList.add('startGameButton');
            startGameButton.innerText = 'Start Game';
            startGame.appendChild(startGameButton);

            startGameButton.addEventListener('click', () => {
                display.showPlayers();
                startGameButton.remove();
                container.classList.add('startHidden');
            })
        }

        if (!container.classList.contains('startHidden')){
            showStart();
        } 

        function markArea(location){
            if (!container.classList.contains('startHidden')) return;
            if (container.classList.contains('turnO')){
                if (game.board[location]){
                    return alert('already filled, please try another spot');
                }
                markO(location);
            } else {
                if (game.board[location]){
                    return alert('already filled, please try another spot');
                }
                markX(location);
            }

            refreshBoard();
            container.classList.toggle('turnO');
        }

        boardTopLeft.addEventListener('click', () => {
            markArea(0);
        })

        boardTopMiddle.addEventListener('click', () => {
            markArea(1);
        })

        boardTopRight.addEventListener('click', () => {
            markArea(2);
        })

        boardMiddleLeft.addEventListener('click', () => {
            markArea(3);
        })

        boardMiddleMiddle.addEventListener('click', () => {
            markArea(4);
        })

        boardMiddleRight.addEventListener('click', () => {
            markArea(5);
        })

        boardBottomLeft.addEventListener('click', () => {
            markArea(6);
        })

        boardBottomMiddle.addEventListener('click', () => {
            markArea(7);
        })

        boardBottomRight.addEventListener('click', () => {
            markArea(8);
        })
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
    },
}

display.showBoard();