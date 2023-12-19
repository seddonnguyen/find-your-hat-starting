https://www.codecademy.com/journeys/back-end-engineer/paths/becj-22-back-end-development/tracks/becp-22-basics-of-back-end-development/modules/wdcp-22-challenge-project-find-your-hat-52ae5746-1903-4e25-a4bf-1714d3252e5e/projects/find-your-hat

Your project is centered on a Field class. This and the following tasks will describe how the class should function at a high level, and it will be up to you to figure out the implementation in code. As you go, test your code by creating instances of the class and calling its methods.
The Field constructor should take a two-dimensional array representing the “field” itself. A field consists of a grid containing “holes” (O) and one “hat” (^). We use a neutral background character (░) to indicate the rest of the field itself.
The player will begin in the upper-left of the field, and the player’s path is represented by *. Give your Field class a .print() method that prints the current state of the field.
You can choose to format this however you want, but it will be much easier to play the game if you print out a string representation of the board instead of the raw array.

Your game should be playable by users. In order to facilitate this, build out the following behavior:

When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.
This should continue until the user either:

Wins by finding their hat.
Loses by landing on (and falling in) a hole.
Attempts to move “outside” the field.
When any of the above occur, let the user know and end the game.
