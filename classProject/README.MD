THIS IS FOR OUR CLASS PROJECT

Possible ideas
Mad Lib - https://thecodingtrain.com/challenges/39-madlibs-generator
RPSLS - https://codepen.io/Bermarte/pen/WNwOeoB

Almost always, the boys will all pick Spock at the same time and tie over and over again.

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
(and as it always has) Rock crushes Scissors


Logic behind RPSLS - 
will need to check responses to see if it has a weakness or what kills it
- have a form display the image but has a word/int value ex scissors value of 1 and can kill paper with value of 2 
```
R = 1
P = 2
S = 3
L = 4
SP = 5
{
    scissors: 3, 
    hurts: [2, 4]
    weakness: [5, 1]
}
p1 = 3
p2 = 4
outcome = p1
p1 = 4
p2 = 4
outcome = tie
p1 = 5
p2 = 1
outcome = p1
```