const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation)
            {
                link.style.animation = '';
            } 
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

const typedTextSpan = document.querySelector('.typed-text');
const typedTextSpan_2 = document.querySelector('.intro_head');
const cursorSpan = document.querySelector('.cursor');
const introSpan = document.querySelector(".intro");

const textArray = ["", ' a Student.', " a DEVELOPER.", " a DREAMER!"];
const typingDelay = 50;
const erasingDelay = 25;
const newTextDelay = 1000;
let charIndex = 0;
let textArrayIndex = 0;





function type_name() {
    if(charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan_2.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type_name, typingDelay + 50);
    }
    else {
        cursorSpan.classList.remove("typing");
        if (textArrayIndex + 1 != 4) {
            setTimeout(erase_name, newTextDelay + 25);
        }
    }
}


function erase_name() {
    if(charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan_2.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase_name, erasingDelay + 25);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex<textArray.length){
            setTimeout(type_name, newTextDelay)
        }
    }
}

function run_again() {
    if (textArrayIndex == 3) {
        textArrayIndex = 0;
        erase_name();
    }  
}

function run_again2() {
    if (textArrayIndex == 2) {
        textArrayIndex = 0;
        erase();
    }  
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay);
})

navSlide();

const onclicklisten = document.addEventListener("click", function() {
    listElement = document.querySelectorAll('.nav_links li a');
    listElement.classList.add("active");
});

function slidename() {
    const containerslide = document.querySelector('.container2');
    const contactslide = document.querySelector('.contact');
    containerslide.classList.add('open');
    contactslide.classList.add('get');
    type_name();
}
setTimeout(slidename, 200);

