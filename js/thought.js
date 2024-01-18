const thoughts = [
    {
        quote: "good weather",
        author: "sunkim"
    },
    {
        quote: "icancomplete",
        author: "kimkim",
    },
    {
        quote: "drinkingwaterisgood",
        author: "waterkim",
    },
    {
        quote: "icando",
        author: "kimsun",
    },
    {
        quote: "littlehungry",
        author: "haha",
    },
    {
        quote: "ilikemyboyfriend",
        author: "hihi",
    },
    {
        quote: "littletired",
        author: "hehe",
    },
    {
        quote: "vacationisgood",
        author: "yes",
    },
    {
        quote: "studyhard",
        author: "yes..iwill",
    },
    {
        quote: "youhavetostudycodingtest",
        author: "iknow",
    }
]

const quote = document.querySelector("#thought span:first-child");
const author = document.querySelector("#thought span:last-child");

const todayThought = thoughts[Math.floor(Math.random() * thoughts.length)];
quote.innerText = todayThought.quote;
author.innerText = todayThought.author;
