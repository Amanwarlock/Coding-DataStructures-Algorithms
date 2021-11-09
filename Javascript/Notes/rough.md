# INTEL - Assignment

## Title - War card game
    > https://en.wikipedia.org/wiki/War_(card_game)
    > https://www.pagat.com/war/war.html
    > https://www.youtube.com/watch?v=J5vT33Vo04s
    > https://www.youtube.com/watch?v=r8HH1J-7KyA   (*)
    > https://www.youtube.com/watch?v=t8YkjDH86Y4 (OOP)
    > https://www.youtube.com/watch?v=62TmpPDs0mM (enums)
    > https://www.youtube.com/watch?v=7BXDcBfk-04 (UNO)
    > https://www.youtube.com/watch?v=yENwNPu2Obo (Java OOP)

## Terms:
    > Barebones, Skeleton

## Goals
    > Well structured, Readable and tested code
    > Documentation including descriptions of your assumptions, corner cases, and what you might do differently if given more time
    > Submit your code via GitHub or other online RCS, preferably with several commits in the history


## Focus
    > Python naming conventions, code comments, exception handling and how to write clean code
    > OOPS and design patterns
    > Unit testing
    > Github good practise for comments
    > Review python projects online


## Gameplay
    > Players - 2
    > Total cards: 52
    > Each player has 26 cards
    > Card Rank: 
            - A (ace)
            - K (king)
            - Q (Queen)
            - J (Jack)
            - 10, 9, 8, 7, 6, 5, 4, 3, 2

    > Suites: Spades, clubs, diamonds, hearts
            
## Assumptions:
    > There are only two players in this version of the game
    > Player that don't have enough cards loose
    > If neither player has enough cards, the one who runs out first loses
    > If both run out simultaneoulsy its a draw
    > Assumed cards ranks as follows: Joker, Ace, King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2
    > Assumed A beign the highest and 2 being the lowest
    > When both cards played are identical there is a war and each player plays three cards face-down. Then the fourth card is final card played face-up that
        decided who wins the cards played on the deck


## Implementation
    > https://www.youtube.com/watch?v=s8deyqe6kyI


 AMan - 4 
    4th --> 4
    cards - 3


Nagu:
    cards - 2
        2th --> 4
        cards --> 1



Aman -- 3 face-down + 1 card face-up --> 14 

nagu --> you lost


