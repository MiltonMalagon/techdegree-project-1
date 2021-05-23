/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
const quotes = [{
        quote: "If you thought building web pages was cool, you're going to love what you can do with a little programming.",
        source: "― Andy Harris",
        citation: "Client-Side Programming with JavaScript",
        year: 2014
    },
    {
        quote: "The only power that exists is inside ourselves.",
        source: "― Anne Rice",
        citation: "Interview with the Vampire",
        year: 1976
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        source: "― Oscar Wilde",
        citation: "The Happy Prince and Other Stories",
        year: 1888
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        source: "― J.K. Rowling",
        citation: "Harry Potter and the Chamber of Secrets",
        year: 1998
    },
    {
        quote: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
        source: "― Paulo Coelho",
        citation: "The Alchemist",
        year: 1988
    },
    {
        quote: "All we have to decide is what to do with the time that is given us.",
        source: "― J.R.R. Tolkien",
        citation: "The Fellowship of the Ring",
        year: 1954
    },
    {
        quote: "He never went out without a book under his arm, and he often came back with two.",
        source: "― Victor Hugo",
        citation: "Les Misérables",
        year: 1862
    },
    {
        quote: "I am longing to be with you, and by the sea, where we can talk together freely and build our castles in the air.",
        source: "― Bram Stoker",
        citation: "Dracula",
        year: 1897
    },
    {
        quote: "Who in the world am I? Ah, that's the great puzzle.",
        source: "― Lewis Carroll",
        citation: "Alice in Wonderland",
        year: 1865
    }
];

console.log(quotes);

/***
 * `getRandomQuote` function
 ***/



/***
 * `printQuote` function
 ***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);