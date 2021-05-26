# Techdegree Project 1
## Random Quote Generator

The "Random Quote Generator" is a program that prints popular quotes with their respective source, citation, year of publication, and relevant tags.

Also, the program updates automatically each quote and page's background color after certain period of time or when the user clicks on the "Show another quote" button - predifined in the web page.

The program is built with:

- One array literal "quotes" containing a list of objects with their respective keys/values.
- Four functions:
    - "getRandomQuote": creates a random number and randomly selects an item from the provided array.
    - "printQuote": gets a random object and build a HTML string.
    - "changeBackgroundColor": creates a random hue for the RGB CSS property to display a random color.
    - "updateQuote": updates automatically the current quote printed in the page and the background color.

- Two event listeners:
    - The first runs "printQuote" function on click. *Code snippet provided by Team Treehouse*
    - The second runs "changeBackgroundColor" function on click. *Code snippet copied from Team Treehouse*