function quotegenerator(){
    var quotes = [
        {
            quote:"“Be yourself; everyone else is already taken.”",
            person: "― Oscar Wilde"
        },
        {
            quote:"“So many books, so little time.”",
            person: "― Frank Zappa"
        },
        {
            quote:"“A room without books is like a body without a soul.”",
            person:"― Marcus Tullius Cicero"
        }
    ]
}
var randomIndex = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomIndex].quote;
var randomPerson = quotes[randomIndex].person;


document.getElementById("quoteoutput").innerText=randomQuote
document.getElementById("name").innerText=randomPerson

