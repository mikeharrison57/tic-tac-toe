# _Metroid Tic-Tac-Toe_

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technologies Used](#technologies-used)
- [Context and Features](#context-and-features)
- [Illustration](#illustration)
- [Lessons Learned](#lessons-learned)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIn and GitHub](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Technologies Used

- CSS
- HTML
- JavaScript

## Context and Features

- _Metroid_ Tic-Tac-Toe is a basic tic-tac-toe application that I built from the ground up using HTML, CSS, and JavaScript. It is loosely based on the famous 1994 game _Super Metroid_ from the _Super Nintendo_. As opposed to regular X’s and O’s, _Metroid_ Tic-Tac-Toe pits famous bounty hunter _Samus Aran_ against one of her biggest enemies, the _Metroids_. The application allows a user, or two users, to play multiple rounds of  tic-tac-toe against oneself or a friend. When visiting the site, the user is met with a fun dynamic background with pixel stars, and an empty grid. The first player will always be _Samus_, as she is the hero of this story. After placing a _Samus_ token, player two will place a _Metroid_ token. Each player will take turns placing their tokens on the grid until a player wins or a draw is reached. If a player wins, their respective win count will be updated, and the game will restart with the losing player playing first. If a draw is reached, the game will also restart with the other player playing first, and neither player’s win count will increase. I am very proud of the things I was able to accomplish with this application, and look forward to user’s having fun playing some tic-tac-toe on my web page.    

## Illustration

![Metroid-Tic-Tac-Toe](https://user-images.githubusercontent.com/95496577/165404447-42b47354-b81b-4ddb-aaaa-50be6d7fa9a7.gif)

## Lessons Learned

- This project was the most challenging and demanding that I’ve developed in my short time as a front end software development student. It may appear relatively simple on the surface, but the JavaScript functionality involved with this application was fairly complicated for me to accomplish. My fellow colleagues and I had to develop two classes, a Player and a Game class. These two classes had to be able to interact with each other, and simulate the game of tic-tac-toe using the console and the data model. This goal served to be especially challenging for me, which led me to developing my data model and DOM manipulation simultaneously. This allowed me to work on one piece of functionality at a time (taking turns, draw conditions, win conditions, etc.), and maintain steady progress throughout the course of the project. The specific properties and methods needed to have the player and game class interact properly was one of the most challenging aspects of developing this application for me. I ended up reaching out to my mentor fairly early on for some additional advice and support with the project. My mentor helped me establish a very strong foundation for the project that allowed me to really take off with the remainder of the project. The result was making my classes interact with one another in a way that simulated tic-tac-toe, but also connecting this to the DOM and having the turn taking, win conditions, and draw conditions all operating in unison on the DOM with minimal bugs or glitches.

- The win functionality in particular proved to be the most challenging to develop for the data model and the DOM alike. It required me to put many of my prior skills and knowledge to the test. There are three functions total that are handling the winning conditions. One of them evaluates the player wins by iterating through all of the winning conditions in my array of `winCombos`, establishes variables that are assigned to the values of  the spaces on my `board` array compared to the index positions of each winning combo array, and finally checks for player tokens in each spot. Ultimately, it assesses whether or not there are three tokens of the same kind next to each other. If there is, the `declareWinner()` function will declare player 1 or player 2 the winner. Lastly, the `displayWinner()` function calls the `declareWinner()` function, and updates the text above the board, the win count of the winning player, and finally resets the game. Lastly, this was my first time attempting to incorporate a naming convention into my HTML and CSS. I tried to consistently use the BEM naming conventions for my HTML and CSS. This method allowed me to organize my HTML into distinguishable blocks, elements, and modifiers. This also allowed me to keep my CSS more DRY than I have been able to do in the past, and make my HTML and CSS more readable overall.      

## Future Features

Some future features I’d like to add to this application are:

- Fixing some minor bugs related to clicking icons multiple times and being able to click squares after a win condition is met.
- Having player wins persist across page refreshes using local storage.
- Adding an application start-up screen and loading screen.
- Having a button that plays a track from the _Metroid_ game series.  


## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `open index.html` in your terminal.

## Contributor LinkedIn and GitHub

- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-harrison-b476a498/) 

- [Michael Harrison: GitHub](https://github.com/mikeharrison57)

## Project Specs

- The spec for this application can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)    
