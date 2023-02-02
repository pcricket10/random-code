// Two players are playing a game where white or black pieces are represented by a string, colors. The game rules are:
// Wendy moves first, players alternate turns
// Each move, the player my remove their piece if both adjacent pieces are the same color
// Wendy’s pieces are white and Bob’s pieces are black
// When a piece is removed, the string is reduced in length by one piece
// When a player can no longer move, they have lost the game
// Example
// colors = “wwwbbbbwww”
// Wendy removes idx = 1, colors = “wwbbbbwww”
// Bob removes idx = 3, colors = “wwbbbwww”
// Wendy removes idx = 6, colors = “wwbbbww”
// Bob removes idx = 3, colors = “wwbbww”
// Wendy has no move, Bob wins the game.
// Determine who wins the game if both play with optimum skill. If Wendy wins, return ‘wendy’ and if Bob wins, return ‘bob’;
function gameWinner(colors) {
    let turn = "wendy";//wendy goes first
    let gameWon = false


    while (gameWon !== false) {
        if (turn === "wendy") {

        }
        if (turn === "bob") {

        }
        for (let i = 0; i < colors.length; i++) {
            const curr = colors[i];
            console.log(curr)
        }
    }

}
console.log(gameWinner("wwwbbbbwww")) // expected = “bob”
