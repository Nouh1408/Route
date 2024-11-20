let lastIndex = -1;

function quotegenerator() {
    var quotes = [
        {
            quote: "“Be yourself; everyone else is already taken.”",
            person: "― Oscar Wilde"
        },
        {
            quote: "“So many books, so little time.”",
            person: "― Frank Zappa"
        },
        {
            quote: "“A room without books is like a body without a soul.”",
            person: "― Marcus Tullius Cicero"
        },
        {
            quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
            person: "― Robert Frost"
        },
        {
            quote: "“You only live once, but if you do it right, once is enough.”",
            person: "― Mae West"
        },
        {
            quote: "“If you tell the truth, you don't have to remember anything.”",
            person: "― Mark Twain"
        },
    ];

    let randomIndex;


    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    var randomQuote = quotes[randomIndex].quote;
    var randomPerson = quotes[randomIndex].person;

    document.getElementById("quoteoutput").innerText = randomQuote;
    document.getElementById("name").innerText = randomPerson;
}
