let circle = document.getElementById('circle')
let head = document.getElementById('head')
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    circle.style.rotate = -value/8 + 'deg';
});


window.addEventListener('load', slide)

function slide(){
    head.classList.add('slide');
    head.style.opacity = "1"
}


let info = [
    "SPACE IS COMPLETELY SILENT",
    "THE HOTTEST PLANET IN OUR SOLAR SYSTEM IS 450° C.",
    "A FULL NASA SPACE SUIT COSTS $12,000,000.",
    "THE SUN’S MASS TAKES UP 99.86% OF THE SOLAR SYSTEM.",
    "ONE MILLION EARTHS CAN FIT INSIDE THE SUN",
    "THERE ARE MORE TREES ON EARTH THAN STARS IN THE MILKY WAY",
    "THE SUNSET ON MARS APPEARS BLUE",
    "THERE ARE MORE STARS IN THE UNIVERSE THAN GRAINS OF SANDS ON EARTH",
    "ONE DAY ON VENUS IS LONGER THAN ONE YEAR.",
    "THERE IS A PLANET MADE OF DIAMONDS",
    "Spacecraft have visited all the known planets in our solar system",
    "There is no sound in space because molecules are too far apart to transmit sound",
    "The temperature in the void of space is about − 270.45 °C.",
    "Space is a hard vacuum, meaning it is a void containing very little matter.",
    "The International Space Station is the largest ever crewed object in space.",
    "In the observable universe there are an estimated 2 trillion (2,000,000,000,000) galaxies",
    "Neutron stars can spin at a rate of 600 rotations per second",
    "Space is completely silent",
    "There is an uncountable number of stars in the known universe",
    "99 percent of our solar system's mass is the sun",
    "More energy from the sun hits Earth every hour than the planet uses in a year",
    "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together",
    "The largest asteroid in our solar system is a mammoth piece of space rock named Ceres",
    "One day on Venus is longer than one year on Earth",
    "Jupiter's Red Spot is shrinking",
    "One of Saturn's moons has a distinct two-tone coloration",
    "The position of the North Star will change over time",
    "The Sun weighs about 330, 000 times more than Earth.",
    "Footprints left on the Moon won’t disappear as there is no wind",
    "Because of lower gravity, a person who weighs 220 lbs on Earth would weigh 84 lbs on Mars",
    "There are 79 known moons orbiting Jupiter",
    "The Martian day is 24 hours 39 minutes and 35 seconds long",
    "Earth is the only planet not named after a God",
    "Due to the Sun and Moon’s gravitational pull, we have tides",
    "The International Space Station is the largest manned object ever sent into space"
]


let disinfo = document.getElementById('info');


setInterval(()=>{
    let index = Math.floor(Math.random()*info.length)
    disinfo.innerHTML = info[index].toLowerCase()
},6000)
