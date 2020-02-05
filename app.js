const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const tl= new TimelineMax();

tl.fromTO (hero, 1, { height:"0%" }, { height:"80%", ease: Power2.easeInOut }) //(cosa, durata, da dove a dove) (non metto ; perche cosi possono farne altri sotto)
.fromTo(
hero, 
1.2, 
{ width: "100%" },
{ width:"80%", ease: Power2.easeInOut })

.fromTo (
    sldier, 
    1.2, 
    { x:"-100%" }, 
    { x: "0%", ease: Power2.easeInOut }, "-=1.2") //-= e n secondi, se voglio far partire prima una data animazione

    .fromTo(logo, 0.5, { opacity:0, x:30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity:0, x:30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.5, { opacity:0, x:30 }, { opacity: 1, x: 0 }, "-=0.5");