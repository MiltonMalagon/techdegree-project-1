/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The "quotes" array stores a list of objects with popular quotes that will be displayed in the web page each time the user clicks on "Show another quote" button.
 ***/
const quotes = [{
        citation: "Client-Side Programming with JavaScript",
        quote: "If you thought building web pages was cool, you're going to love what you can do with a little programming.",
        source: "Andy Harris",
        tags: ["programming", "internet", "computing"],
        year: 2014
    },
    {
        citation: "Interview with the Vampire",
        quote: "The only power that exists is inside ourselves.",
        source: "Anne Rice",
        tags: ["confidence", "horror", "vampires"],
        year: 1976
    },
    {
        citation: "The Happy Prince and Other Stories",
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        source: "Oscar Wilde",
        tags: ["intelligence", "perception", "humor"],
        year: 1888
    },
    {
        citation: "Harry Potter and the Chamber of Secrets",
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        source: "J.K. Rowling",
        tags: ["abilities", "choices", "integrity"],
        year: 1998
    },
    {
        citation: "The Alchemist",
        quote: "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
        source: "Paulo Coelho",
        tags: ["inspiration", "hope", "love"],
        year: 1988
    },
    {
        citation: "The Fellowship of the Ring",
        quote: "All we have to decide is what to do with the time that is given us.",
        source: "J.R.R. Tolkien",
        tags: ["adventure", "quest", "journey"],
        year: 1954
    },
    {
        citation: "Les Misérables",
        quote: "He never went out without a book under his arm, and he often came back with two.",
        source: "Victor Hugo",
        tags: ["inspiration", "poetry", "soul"],
        year: 1862
    },
    {
        citation: "Dracula",
        quote: "I am longing to be with you, and by the sea, where we can talk together freely and build our castles in the air.",
        source: "Bram Stoker",
        tags: ["hope", "vampires", "love"],
        year: 1897
    },
    {
        citation: "Alice in Wonderland",
        quote: "Who in the world am I? Ah, that's the great puzzle.",
        source: "Lewis Carroll",
        tags: ["introspection", "humor", "adventure"],
        year: 1865
    }
];

/* Testing "quotes" array */
// console.log(quotes);

/***
 * The "getRandomQuote" function creates a random number and randomly selects an item from the provided array.
 * @param {Array} arr - The array to be evaluated.
 * @return {Object} - The random object inside the provided array.
 ***/
function getRandomQuote(arr) {
    /* Creating random number and selecting object randomly from "quotes" array */
    let randomNumber = Math.floor(Math.random() * arr.length);
    let randomItem = arr[randomNumber];

    /* Testing "randomNumber" and "randomItem" variables */
    // console.log(randomNumber, randomItem);

    return randomItem;
}

/***
 * The "printQuote" function calls "getRandomQuote" function to get a random object and build a HTML string with the object's properties.
 * @return {string} - The concatenated HTML string to be printed in the web page.
 ***/
function printQuote() {
    /* Getting random object and inserting its properties into HTML elements */
    let randomObject = getRandomQuote(quotes);
    let randomHTML = `
        <p class="quote">${randomObject.quote}</p>
        <p class="source">${randomObject.source}
    `;

    /* Adding additional properties to HTML variable if available */
    if (randomObject.citation) {
        randomHTML += `<span class="citation">${randomObject.citation}</span>`;
    }
    if (randomObject.year) {
        randomHTML += `<span class="year">${randomObject.year}</span>`;
    }
    if (randomObject.tags) {
        randomHTML += `<br><span><small>${randomObject.tags.join(" / ")}</small></span>`;
    }

    /* Closing HTML paragraph */
    randomHTML += `</p>`;

    /* Code snippet provided by Treehouse */
    document.getElementById('quote-box').innerHTML = randomHTML;

    /* Testing "randomObject" and "randomHTML" variables */
    // console.log(randomObject, randomHTML);

    return randomHTML;
}

/***
 * The "changeBackgroundColor" function creates a random hue for RGB property to display a random color each time the user clicks on "Show another quote" button.
 ***/
function changeBackgroundColor() {
    /* Creating a different hue number for Red, Green, and Blue */
    const randomHues = {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256)
    };

    /* Storing RGB color and pushing it into "body" tag as an CSS attribute */
    let randomColor = `rgb(${randomHues.red}, ${randomHues.green}, ${randomHues.blue})`;
    document.querySelector("body").style.backgroundColor = randomColor;

    /* Testing "randomColor" variable */
    // console.log(randomColor);
}

/* Testing function */
// changeBackgroundColor();

/***
 * The "updateQuote" updates the current quote printed in the page and the background color.
 ***/
function updateQuote() {
    setInterval(printQuote, 15000);
    setInterval(changeBackgroundColor, 15000);
}

/* Calling "updateQuote" function */
updateQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

/* Code snippet provided by Treehouse */
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/* Code copied from Treehouse snippet targeting "changeBackgroundColor" function */
document.getElementById('load-quote').addEventListener("click", changeBackgroundColor, false);