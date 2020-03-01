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

circles.forEach((circle, index) => {
// In here we get access to each circle
    circle.style.animation = 'shapemove 6s infinite linear';

// Just to avoid infinitys add 1 to the index so no divide by zero
    index += 1;

// In seconds, divide by index number to get slight delay
    const delay = (1 / index) + 's';
    circle.style.animationDelay = delay;
})

// m'Squiggle
const squiggles = document.querySelectorAll('.squiggle');

function randomNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

squiggles.forEach((squiggle, index) => {
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

// Here we want to detect when the section enters the viewport. When it does we want to add a class of in-viewport and when it exits the viewport we want to remove the class again
inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    })

// Here we set the class only to add once we have scrolled .2 of our section into the viewport
inView.threshold(0.2);


// 1. Select all of our sections and loop through them
const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
    // 2. In each section we want to grab the artists and shapes

    const artists = section.querySelectorAll('.lineup li')
    const shapes = section.querySelectorAll('.shape')

    // 3. For both of these we want to add transition-delay effects

    artists.forEach((artist, index) => {
        const delay = index * 100
        artist.style.transitionDelay = delay + 'ms'
    })

        // 4. We want to make sure our shapes only fade in after our artists
    shapes.forEach((shape, index) => {
        // We are setting our delat up to only start once all of our artists have faded in
        const delay = (artists.length + index) * 100
        shape.style.transitionDelay = delay + 'ms'
    })

})


// 1. Whenver we click a js-scroll link we want to run a function

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach((link, index) => {

    // addEventListener is the same Jquery's .on()
    // We can listen for events on elemnts then runt a function
    link.addEventListener('click', (event) => {

        // 2. We want to stop the link from juping straight to our section with its default browser behavior
        // This is equivalent to return false in jQuery, it will block the default browser behaviour of the link jumping to the href attribute
        event.preventDefault()

        // 3. We want to find out the href attribute and then grab that element
        const href = link.getAttribute('href')

        // 4. then scroll to it using scrollIntoView
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })


    })

});
