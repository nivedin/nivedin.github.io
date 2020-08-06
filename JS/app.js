let mouseCursor = document.querySelector(".cursor");
let mouseCursor2 = document.querySelector(".cursor2");
let projectsEnter = document.querySelectorAll(".swiper-wrapper");
let projectsLinkEnter = document.querySelectorAll(".projectItems a");


projectsEnter.forEach(projEnter => {

    projEnter.addEventListener("mouseover",() => {
        mouseCursor.classList.remove("cursor");
        mouseCursor.innerHTML="Drag";
        mouseCursor.classList.add("mouseEntered");
    });
    projEnter.addEventListener("mouseleave",() => {
        mouseCursor.classList.remove("mouseEntered");
        mouseCursor.innerHTML="";
        mouseCursor.classList.add("cursor");
    });
});

projectsLinkEnter.forEach(projLiEnter => {

    projLiEnter.addEventListener("mouseover",() => {
        mouseCursor.classList.remove("cursor");
        mouseCursor.innerHTML="Go";
        mouseCursor.classList.add("mouseLinkEntered");
    });
    projLiEnter.addEventListener("mouseleave",() => {
        mouseCursor.classList.remove("mouseLinkEntered");
        mouseCursor.innerHTML="";
        mouseCursor.classList.add("cursor");
    });
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 1000,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


window.addEventListener('mousemove',cursor);
window.addEventListener('mousemove',cursor2);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
function cursor2(e){
    mouseCursor2.style.top = e.pageY + 'px';
    mouseCursor2.style.left = e.pageX + 'px';
}



var image = document.getElementsByClassName('parallaxImage');
new simpleParallax(image, {
    delay: 1.5,
    transition: 'cubic-bezier(0,0,0.2,2)',
    
});

const hero = document.querySelector('.transOverlay');
const heading = document.querySelector('.mainHeading');
const nav = document.querySelector('nav');

const tl = new TimelineMax();


tl.fromTo(hero,2,{height:"100%"},{height:"0%",ease:Power2.easeInOut})
.fromTo(heading,.5,{opacity:0,x:30},{opacity:1,x:0},"-=1")
.fromTo(nav,.5,{opacity:0},{opacity:1},"-=.5")


let navHamburger = document.querySelector("nav .navButton");
let navState = document.querySelector(".navState");


navHamburger.addEventListener('click',navClose);

function navClose(){
    navHamburger.classList.toggle("change");
    navState.classList.toggle("navClose");
    document.querySelector("body").classList.toggle("stopScroll");
}

navHamburger.addEventListener('mouseover',() => {
    mouseCursor.classList.remove("cursor");
    mouseCursor.innerHTML="Click";
    mouseCursor.classList.add("mouseLinkEntered");
})
navHamburger.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove("mouseLinkEntered");
    mouseCursor.innerHTML="";
    mouseCursor.classList.add("cursor");
})

let navLinks = document.querySelectorAll(".navOpen .navLinks ul li ");
let videoContainer = document.querySelector(".navOpen video");

navLinks.forEach(navLink => {

    navLink.addEventListener('mouseover',(e) => {
        videoContainer.classList.remove("videoPlay");
    })
    navLink.addEventListener('mouseleave',(e) => {
        videoContainer.classList.add("videoPlay");
    })
});

navLinks.forEach(navLink => {

    navLink.addEventListener('click',navClose);
});

let fadeHeading = document.querySelector(".main .fadeHeading");
let videoContainer2 = document.querySelector(".main img");

fadeHeading.addEventListener('mouseover',(e) => {
    videoContainer2.classList.remove("videoPlay");
})
fadeHeading.addEventListener('mouseleave',(e) => {
    videoContainer2.classList.add("videoPlay");
})


let summaryHeading = document.querySelector(".summary .summaryHeading h1");

if(window.innerWidth < "880"){
    summaryHeading.classList.remove("display-2");
}
else if(window.innerWidth > "880"){
    summaryHeading.classList.add("display-2");
}

