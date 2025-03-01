// Creat a game of Tic Tac Toe
// X or O should appear in the spot clicked (being turn based)
// A heading to say whos turn it is on each move
// A 'Clear' Button
// Bootstrap compoent(s) to define who won / if it is a draw

//set var for boxes
let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

//set var for players
let player1 = "X";
let player2 = "O";

//set var for turn CANNOT have more than 9 turns with min of 5 turns
let turn = 0;

//set var for who wins or draw
let winner = false;

//hide my alerts
$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertDraw').hide();

//keep track of current player
let currentPlayer = '';

//setting win conditions
const winningOutcomes = [
    //winning rows
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8],
    //winning colums
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8],
    //winning crossways
    [box0, box4, box8], [box2, box4, box6]
];

//Sets up ending the game
const endGame = () =>{
    $(".box").css("pointer-events", "none");
    $('#p1').removeClass("border border-info")
    $('#p2').removeClass("border border-info")
};

//checks who won
const checkWinner = (currentPlayer, a, b, c) => {
    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer) {
        winner = true;

    a.addClass('text-danger bg-success-subtle');
    b.addClass('text-danger bg-success-subtle');
    c.addClass('text-danger bg-success-subtle');

    if(currentPlayer === 'X'){
        currentPlayer = "Player 1";
    }else{
        currentPlayer = "Player 2";
    }
    
    $('#alertWinner').text(`Victory! - ${currentPlayer}`)    
    $('#alertWinner').show();

    endGame();
}
    
}

//checks if there is a winner
const checkOutcomes = () => {
    checkWinner(currentPlayer, ...winningOutcomes[0]);
    checkWinner(currentPlayer, ...winningOutcomes[1]);
    checkWinner(currentPlayer, ...winningOutcomes[2]);
    checkWinner(currentPlayer, ...winningOutcomes[3]);
    checkWinner(currentPlayer, ...winningOutcomes[4]);
    checkWinner(currentPlayer, ...winningOutcomes[5]);
    checkWinner(currentPlayer, ...winningOutcomes[6]);
    checkWinner(currentPlayer, ...winningOutcomes[7]);

    if(turn === 9 && winner === false){
        endGame();
        $('#alertDraw').show();
    }
};

const startGame = () => {

    console.log("Start Game!");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);

//displays current player at start
   $('#p1').addClass('border border-info');

// show the start alert
$('#alertStart').show();

//makes the box interactive
$('.box').on('click', function(){
    $('#alertStart').hide();

//turns to a winner?
    $(this).text(currentPlayer);
    if(turn > 4){
        checkOutcomes();
    }

    if(winner === false){
    //swap player each turn and display whos turn it is
    if(currentPlayer === player1){
        currentPlayer = player2;
        console.log(turn++)
        $('#p2').addClass('border border-info');
        $('#p1').removeClass('border border-info');
    } else{
        currentPlayer = player1;
        console.log(turn++)
        $('#p1').addClass('border border-info');
        $('#p2').removeClass('border border-info');
    }
}
})
};

//Button functionality
document.getElementById('startBtn').addEventListener('click', () => startGame());
document.getElementById('newGameBtn').addEventListener('click', ()=> document.location.reload(true));
