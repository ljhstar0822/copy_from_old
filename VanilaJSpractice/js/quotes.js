const quotes = [
    {
      quote:
        "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      author: "Marie Curie",
    },
    {
      quote:
        "Life isn't about finding yourself. Life is about creating yourself.",
      author: "George Bernard Shaw",
    },
    {
      quote:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling",
    },
    {
      quote:
        "Open your eyes, look within. Are you satisfied with the life you're living?",
      author: "Bob Marley",
    },
    {
      quote:
        "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
      author: "Harvey Fierstein",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
    },
    { quote: "I want to live my life, not record it.", author: "Jackie Kennedy" },
    {
      quote: "With the new day comes new strength and new thoughts.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
  ];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");

const ranQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = `${ranQuote.quote}`;
author.innerHTML = `by ${ranQuote.author}`;