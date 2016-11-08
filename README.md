# Dont-Blink

Project 1 - GA - HTML/CSS/JS+jQuery game

Description/MVP:

The game's idea is based of the popular steam game 'Five Nights at Freddie's.' It will be centric around one browser window that contains 'door' objects that open at different intervals to reveal images of 'spooky-faces.'

The different images will be tied to objects that reveal themselves faster. As the user stays in the game longer, the shorter interval images will spawn more frequently.

There is no way to 'win' the game, only to stay in as long as you can.

I'd like to get a scoreboard in eventually.


Approach:

The game uses HTML and CSS to create and edit all of the elements on the page.  It then uses JS
and jQuery to open the doors randomly and allow the user to close them as well.  There will be 3 (TBD) speeds that doors open at, they will start opening faster as the game progresses.  

User Stories:

When the user clicks play, the doors will start opening at different intervals. 
The user has to click the image of the door so that it closes.  If the door opening
animation ends, then the game will end.  

Pseudocode:
1.  Will create a game board with images that reveal themselves at different intervals,
and grow faster as the game goes on.
--
1. Create gameboard and website in HTML and CSS
2. Use jQuery to target doors and open them.  Open them by appending classes.
    -have the classes generated with Math.Random() function so that they open 
    at different intervals.
3. In order to have the game go faster, have it call the door opening function
at different intervals as the game goes on longer.  25s interval of 1500, 35s, interval
of 1000, etc..

Challenge/Difficulties
1.  Incorporating a leaderboard using local storage.
2.  Getting the intervals to reset properly when the game resets.  

