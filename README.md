# Stock Control System

## About the Project

This project was created to document the evolution of my programming logic and my programming skills.
 
To demonstrate this evolution, each version of the project represents my knowledge at that stage, while future versions will reflect my progress as my knowledge evolves.
 
Future updates will show new concepts and technologies, always following what I can genuinely understand and implement.

## Features

This system includes the following features:
- Check the currently available units in inventory
- Register new products to stock
- Delete products from stock
- Add units to a product in the inventory
- Remove units from a product in the inventory
- Keep the operation running until the user decides to end it

## Business Rules
- New products are registered with 0 initial quantity
- New product names can't be empty or numerical-only
- Duplicated products aren't allowed
- Only positive integer values are accepted in stock quantities
- To remove units, the inventory must have enough units available to complete the operation
- To delete a product, the user must confirm the action first
- Cancelling an operation must not change the inventory
- In the menu, only valid choices are accepted. Otherwise, the menu will be displayed again

## Technologies and Concepts

### Technologies

- JavaScript
- Git
- GitHub

### Programming Concepts

- Variables
- Conditional structures
- Control flow / loops
- Input validation
- Logical operators
- Arrays
- Objects
- Array/String methods

## How to Run

This project uses plain JavaScript and does not require any external libraries or frameworks.

### Development Environment

- VS Code
- Live Server Extension
- A modern web browser
- An HTML file linked to `script.js`

### Running the Project

1. Open the project in VS Code with the HTML file and the linked `script.js` file
2. Install the Live Server extension, go to the HTML file, right-click on it and choose "Open with Live Server"
3. Wait for the browser to open and for the prompt window to appear
4. Follow the instructions in the menu

## Project Evolution
### Latest Updates

- v0.1 → Basic stock control
- v0.2 → Multiple products and individual stock management

### Current Version

- v0.3 → Product registration and deletion

### Future Updates

- Functions
- Higher-Order Functions
- Advanced array methods
- Code refactoring

*Planned updates may change as the project and my knowledge evolve.*
