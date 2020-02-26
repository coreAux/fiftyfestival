

// Declare function makeMarquee
function makeMarquee() {
    const title = 'FIFTY Music Festival — November 10–12, Desert Valley';

    // An array is a list of things
    // We make a new array and fill it with the title text
    const marqueeText = new Array(50).fill(title).join(' — ');

    // Grab our marquee span from the html
    const marquee = document.querySelector('.marquee span');

    // Set our repeating title as the content
    marquee.innerHTML = marqueeText;
}

makeMarquee();
