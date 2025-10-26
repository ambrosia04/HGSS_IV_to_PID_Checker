# Pokémon IV to PID Finder (Method 1)

This is a web-based tool designed to find a valid Pokémon Personality ID (PID) that matches a specific set of criteria, including Individual Values (IVs), Nature, Gender, and Ability. It is built to be a user-friendly and responsive interface for what is a computationally complex search.

The tool allows a user to lock in any desired IVs and will search through all possibilities for the remaining random IVs to find a match that meets all the specified conditions.

## How to Use

1.  Open the `index.html` file in any modern web browser or the GitHub page.
2.  Fill in your desired criteria in the form. You can leave any IV field blank to have the tool search for all possible values for that stat.
3.  Click "Find PID".
4.  The tool will search asynchronously, showing its progress without freezing the browser.
5.  The first valid "Method 1" result that matches all your criteria will be displayed.

## Credits and Inspiration

This project was heavily inspired by the excellent work of **shinyfinder**. The core RNG (Random Number Generator) and calculation logic used in this tool was adapted directly from their official [IV to PID Applet](https://shinyfinder.github.io/tools/iv-to-pid/index.html).

Their robust and proven algorithm is the foundation that makes this tool accurate. You can find their incredible collection of Pokémon tools and the original source code on their GitHub repository:

-   **GitHub Repository:** [https://github.com/shinyfinder/shinyfinder.github.io](https://github.com/shinyfinder/shinyfinder.github.io)

The goal of this project was to build a new, responsive user interface around that brilliant core logic, adding features like asynchronous searching to handle user-defined random IVs without locking up the browser. Full credit for the mathematical accuracy and the reverse RNG implementation goes to the original authors: X-Act, mingot, Sarenji, and shinyfinder.