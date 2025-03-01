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

//set var for turn
let turn = 0;

//set var for who wins or draw
let winner = false;

//hide my alerts
$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertDraw').hide();

console.log('start test')