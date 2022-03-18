# mars-rover

## Creating your application

This app runs in the console.

👉 First, fork and clone this repository.

👉 Then run this command:

```
npm install
```

👉 You can then run

```
npm start
```

You should see a welcome message and a prompt enter 'y' to process the commands or 'q' to exit the app.

After processing the commands an output of the final position of the rovers will be output to the console.

The command.txt contains the commands which will be process, the commands file needs to be edited for new commands to be executed, at the moment it is designed to take one for the plateau and two commands for two rovers.

Jest test are included, run below to run the tests

```
npm test
```

## Improvements for other vehicles

There are couple areas that need to be looked at when implementing other vehicles, the move and startingPosition;
for the move thing to consider are 

is it a flying vechicle?

does it rotate at a different angle to 90 degrees?

for the plateau shape, this can be controlled by adding/removing objects.

interface Surface for other type of plateaus

interface ExploratoryVehicle for other type of rovers


## The Brief 

Mars Rover Kata - JavaScript - The Brief
 
License: Attribution-NonCommercial-NoDerivatives 4.0 International 

## Setting the Scene

You are working in an Engineering Squad for the Mars Mission, tasked with designing software to manage robots and cool vehicles for space  exploration!  

Your Task 

Setting the Scene 

You have been asked to create a program to move rovers around the surface of Mars!  

The surface of Mars is represented by a Plateau, you can make the assumption that the Plateau is a square/rectangular grid for the purpose of  this task. 

Rovers navigate the Plateau so they can use their special cameras and robot arms to collect samples back to Planet Earth  

Representation of a Rover’s Position on the Plateau 


## Addition information

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,  South, West, East (the four cardinal compass points) respectively. 

Example 

0 0 N 

This means the Rover is at the bottom-left corner facing in the North direction. 

Instructing a Rover to Move Around the Plateau 

 To move a Rover around the Plateau, a string of letters is sent to a Rover. 

Here are the letters and their resultant action: 

Letter 

Action

L 

Spins the Rover 90 degrees Left without moving from the current  coordinate point/

R 

Spins the Rover 90 degrees Right without moving from the current  coordinate point/

M 

Moves the Rover forward by one grid point, maintaining the same  heading (i.e. from where the Rover is facing (its orientation)).

N.B. Assume that the square directly North from (x, y) is (x, y+1). 

Inputs into the Program

First Line of Input to the Program 

The first line inputted into the program represents the upper-right coordinates of the Plateau. 

5 5 

This Plateau has maximum (x, y) co-ordinates of (5, 5). 

N.B. Assume that the lower-left coordinates is (0, 0). 

Subsequent Lines of Input into the Program - Input to Rovers 

This represents the instructions to move the rovers. 

Each rover receives two lines of input. 

First Line of Input to a Rover 

The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its  orientation). 

1 2 N 

Second Line of Input to a Rover 

A string of letters representing the instructions to move the Rover around the Plateau. 

Movement Rules 

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move. Output 

For each Rover, the output represents its final position (final coordinates and where it is facing). 

Example Test Case 

Lines of Input to the Program: 

5 5 

1 2 N 

LMLMLMLMM 

3 3 E 

MMRMMRMRRM 

Expected Output: 

1 3 N 

5 1 E 

## The solution

Your Solution 

 Feel free to implement an approach that you feel comfortable with to receive input into your program e.g. feeding input values into unit tests;  input via a console application; supplying input via a file etc. 

 We would like you to apply Test-Driven Development (TDD) to test-drive your solution. 

This Mars Rover Kata brief was inspired by https://kata-log.rocks/mars-rover-kata. 

License: Attribution-NonCommercial-NoDerivatives 4.0 International
