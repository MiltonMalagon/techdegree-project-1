# Techdegree Project 1
## Random Quote Generator

The "Random Quote Generator" is a program that prints popular quotes with their respective source, citation, year of publication, and relevant tags.

Also, the program automatically updates each quote and page's background color after a certain period of time or when the user clicks on the "Show another quote" button - predefined on the web page.

The program is built with:

- One array literal "quotes" containing a list of objects with their respective keys/values.
- Four functions:
    - "getRandomQuote": creates a random number and randomly selects an item from the provided array.
    - "printQuote": gets a random object and builds an HTML string.
    - "changeBackgroundColor": creates a random hue for the RGB CSS property to display a random color.
    - "updateQuote": automatically updates the current quote and the background color.

- Two event listeners:
    - The first runs "printQuote" function on click. **_Code snippet provided by Team Treehouse_**
    - The second runs "changeBackgroundColor" function on click. **_Code snippet copied from Team Treehouse_**