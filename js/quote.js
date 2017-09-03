function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


var quotes = [
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Albert Einstein"],
	["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.","Albert Einstein"],
	["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
	["Trust yourself. You know more than you think you do.","Benjamin Spock"],
	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.","Ralph Waldo Emerson"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.","H. Jackson Brown Jr., P.S. I Love You"],
    ["Genius is 1% inspiration and 99% perspiration.","Thomas Edison"],
    ["Intelligence is the ability to adapt to change.","Stephen Hawking"],
    ["God not only plays dice, He also sometimes throws the dice where they cannot be seen.","Stephen Hawking"],
    ["The secret of getting ahead is getting started.","Mark Twain"],
    ["Keep your eyes on the star, and your feet on the ground.","Theodore Roosevelt"],
    ["Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.","Lao Tzu"],
    ["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "Steve Jobs"]
	];


var currentQuote = "";
var currentAuthor = "";
var randomquote = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

getQuote();

$(document).ready(function () {
    setInterval("getQuote()", 10000); // Time in milliseconds
});

