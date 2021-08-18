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

navSlide();
function slidename() {
    const containerslide = document.querySelector('.head-cont');
    const contactslide = document.querySelector('.contact');
    const homesvgslide = document.querySelector('.homesvg');
    homesvgslide.classList.add('slides')
    containerslide.classList.add('open');
    contactslide.classList.add('get');
    type_name();
}
setTimeout(slidename, 200);

const flightPathAbt = {
    curviness:1,
    autoRotate:true,
    values: [
        {x:25, y:0}
    ]
}


const abouttween = new TimelineLite();
const abtElement = document.getElementById('abtid');
const abtParaElement = document.getElementById('abtparagraph2');


const elementsArray = [abtElement, abtParaElement];
abouttween.add (
    TweenLite.to(elementsArray, 1, {
        bezier: flightPathAbt,
        ease: Power1.easeInOut
    })
);

const textMeController = new ScrollMagic.Controller();

const contactscene = new ScrollMagic.Scene({
    triggerElement: ".text_below",
    duration: 3000,
    triggerHook: 0

})
.setClassToggle(".textMe", "pop-up")
.addTo(textMeController);


const aboutcontroller = new ScrollMagic.Controller();

const aboutscene = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 300

})
.setTween(abouttween)
.addTo(aboutcontroller);

const aboutsceneBg = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 3000,
    triggerHook:0.6

})
.setClassToggle(".abtbg", "fade-in")
.addTo(aboutcontroller);

const aboutscenesvg = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 2000,
    triggerHook: 0.2

})
.setClassToggle('.abtsvg', 'apear')
.addTo(aboutcontroller);

const aboutsceneperson = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 1000,
    triggerHook: 0.2
})
.setClassToggle('.person', 'apearPerson')
.addTo(aboutcontroller);

const aboutscenetext = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 1000,
    triggerHook: 0.2
})
.setClassToggle('.textsvgabt', 'apearText')
.addTo(aboutcontroller);

const aboutscenetextCrs = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 1000,
    triggerHook: 0.2
})
.setClassToggle('#Curious', 'slide-in')
.addTo(aboutcontroller);

const aboutscenetextAuto = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 1000,
    triggerHook: 0.2
})
.setClassToggle('#Autonome', 'slide-in')
.addTo(aboutcontroller);


// Skills Selection

const skillscontroller = new ScrollMagic.Controller();
const skillstween = new TimelineLite();
const skillElement = document.getElementById('skills');
const skillsscene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: 3000,
    triggerHook: 0.6

})
.setClassToggle(".skillshead", "pop-up")
.addTo(skillscontroller);

const skillsscenebg = new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: 3000,
    triggerHook: 0.8

})
.setClassToggle(".skillsbg", "fade-in")
.addTo(skillscontroller);

const skillssceneSvg= new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: 3000,
    triggerHook: 0.8

})
.setClassToggle(".skillssvg", "apear")
.addTo(skillscontroller);


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');


// PROJECTS CONTROLLER

const projcontroller = new ScrollMagic.Controller();



const projsceneBg = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".projbg", "apear")
.addTo(projcontroller);

const projsceneHead = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".projectshead", "slide")
.addTo(projcontroller);
const projsceneproj_1 = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".img-1", "apear")
.addTo(projcontroller);
const projsceneproj_2 = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".img-2", "apear")
.addTo(projcontroller);

const projsceneproj_3 = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".img-3", "apear")
.addTo(projcontroller);

const projsceneproj_4 = new ScrollMagic.Scene({
    triggerElement: "#project",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".img-4", "apear")
.addTo(projcontroller);

// Contacts controller

const contcontroller = new ScrollMagic.Controller();

const contactscenehead = new ScrollMagic.Scene({
    triggerElement: "#contacts",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".contactshead", "slide")
.addTo(contcontroller);

const contactscenebg = new ScrollMagic.Scene({
    triggerElement: "#contacts",
    duration: 3000,
    triggerHook: 0.5

})
.setClassToggle(".contactsbg", "apear")
.addTo(contcontroller);








window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight/2)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})