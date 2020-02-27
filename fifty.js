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

// Here we grab all of the circles
const circles = document.querySelectorAll('.circle');

circles.forEach(function(circle, index) {
// In here we get access to each circle
    circle.style.animation = 'shapemove 6s infinite linear';

// Just to avoid infinitys add 1 to the index so no divide by zero
    index += 1;

// In seconds, divide by index number to get slight delay
    const delay = (1 / index) + 's';
    circle.style.animationDelay = delay;
//    console.log(delay);
})

// m'Squiggle
const squiggles = document.querySelectorAll('.squiggle');

function randomNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

squiggles.forEach(function(squiggle, index){
    // Get a random number for the left and top positions
    const randomLeft = randomNumber(0, 20);
    const randomTop = randomNumber(0, 90);
    const randomRight = randomNumber(50, 70);

    // Assign the random position depending on if we want the squiggle on the left or right side
    if (index % 2) {
        squiggle.style.top = randomTop + '%';
        squiggle.style.left = randomRight + '%';
    } else {
        squiggle.style.top = randomTop + '%';
        squiggle.style.left = randomLeft + '%';
    }

    // Get a random number for the inital angle for the squiggle
    const randomRotate = randomNumber(90, 135);
    const randomRotateReversed = randomNumber(45, 90)

    // Get random time for animation to perform
    const randomTime = randomNumber(10, 30);

    // In here we get access to each circle and position it in a random angle and also add a random animation time
    if (index % 2) {
        squiggle.style.transform = 'rotate(' + randomRotate + 'deg)'

        squiggle.style.animation = 'squigglemove ' + randomTime + 's infinite linear';
    } else {
        squiggle.style.transform = 'rotate(' + randomRotateReversed + 'deg)'

        squiggle.style.animation = 'squigglemovereversed ' + randomTime + 's infinite linear';
    }

    // Just to avoid infinitys add 1 to the index so no divide by zero
        index += 1;

    // In seconds, divide by index number to get slight delay
        const delay = (1 / index) + 's';
        squiggle.style.animationDelay = delay;

    // Move squiggle to random location on mouseover
    squiggle.addEventListener('mouseover', function(){
        const randomLeft = randomNumber(0, 90);
        const randomTop = randomNumber(0, 90);

        event.target.style.top = randomTop + '%';
        event.target.style.left = randomLeft + '%';
    });
})
