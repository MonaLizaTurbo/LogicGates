#  Blockly Logic Gates Project

The main goal of the project is to simulate logic gates output. You can add and connect multiple gates just by drag-and-dropping them from the context menu. 

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly1.png)

Inside ``Logic gates`` tab there are several types of logic gates you can use: AND, NAND, OR, NOR, XOR, XNOR, and finally NOT.

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly2.PNG)

The ``Output`` tab contains a DIODE block which is basically responsible for generating diodes.

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly3.PNG)

In ``Values`` tab there is one block which can be set only to 2 values - 1 (true) or 0 (false).

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly4.PNG)

Inside ``Variables`` tab you can create variables which can be used as some kind of a container for 1 or 0 values.

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly5.PNG)

After running the script containing a DIODE block (using ``Run JavaScript`` button), a circle-shaped diode will appear. **Green diode means the output is 1 (true), red is 0 (false)**.
You can also run the ``Show JavaScript`` button to see a fragment of JavaScript code which is responsible for the mechanism of a current state of a project.

![](https://github.com/MonaLizaTurbo/LogicGates/blob/main/readme-images/blockly6.PNG)

You can also delete single or stacked blocks by drag-and-dropping them on the trash can icon.

The project is generating code in JavaScript which in the end simulates logic gates behaviour.

The project is made using Google's Blockly.


##  How to start simulating?

Main file is inside **logic-gates** folder and named **index.html**. Just double click it and *woosh* it will open in your browser. You need to have JavaScript enabled in your browser for it to work though.


## Blockly

Google's Blockly is a web-based, visual programming editor.  Users can drag
blocks together to build programs. All code is free and open source.

**The project page is https://developers.google.com/blockly/**

