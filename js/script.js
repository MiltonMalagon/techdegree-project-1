/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The "quotes" array stores objects with popular quotes that will be displayed in the web page each time the user clicks on "Show another quote" button
 ***/
const quotes = [{
        citation: "Client-Side Programming with JavaScript",
        quote: "If you thought building web pages was cool, you're going to love what you can do with a little programming.",
        source: "Andy Harris",
        year: 2014
    },
    {
        citation: "Interview with the Vampire",
        quote: "The only power that exists is inside ourselves.",
        source: "Anne Rice",
        year: 1976
    },
    {
        citation: "The Happy Prince and Other Stories",
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        source: "Oscar Wilde",
        year: 1888
    },
    {
        citation: "Harry Potter and the Chamber of Secrets",
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        source: "J.K. Rowling",
        year: 1998
    },
    {
        citation: "The Alchemist",
        quote: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
        source: "Paulo Coelho",
        year: 1988
    },
    {
        citation: "The Fellowship of the Ring",
        quote: "All we have to decide is what to do with the time that is given us.",
        source: "J.R.R. Tolkien",
        year: 1954
    },
    {
        citation: "Les Misérables",
        quote: "He never went out without a book under his arm, and he often came back with two.",
        source: "Victor Hugo",
        year: 1862
    },
    {
        citation: "Dracula",
        quote: "I am longing to be with you, and by the sea, where we can talk together freely and build our castles in the air.",
        source: "Bram Stoker",
        year: 1897
    },
    {
        citation: "Alice in Wonderland",
        quote: "Who in the world am I? Ah, that's the great puzzle.",
        source: "Lewis Carroll",
        year: 1865
    }
];

// console.log(quotes); /* testing array */

/***
 * The "getRandomQuote" function creates a random number to randomly select an item from the provided array
 * @param {Array} arr - The array to be evaluated
 * @return {Object} - The random object inside the provided array 
 ***/
function getRandomQuote(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomNumber];
    // console.log(randomNumber, randomItem); /* testing variables */
    return randomItem;
}

/***
 * The "printQuote" function calls "getRandomQuote" function to get a random object and build a HTML string with the object's properties
 * @return {sting} - The HTML string to be printed in the web page
 ***/
function printQuote() {
    let randomObject = getRandomQuote(quotes);
    let randomHTML = `
      <p class="quote">${randomObject.quote}</p>
      <p class="source">${randomObject.source}
    `;
    if (randomObject.citation) {
        randomHTML += `<span class="citation">${randomObject.citation}</span>`;
    }
    if (randomObject.year) {
        randomHTML += `<span class="year">${randomObject.year}</span>`;
    }
    randomHTML += `</p>`;
    document.getElementById('quote-box').innerHTML = randomHTML; /* code snippet provided by Treehouse */
    // console.log(randomObject, randomHTML); /* testing variables */
    return randomHTML;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); /* code snippet provided by Treehouse */