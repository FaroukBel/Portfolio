const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav .cont ul');
    const navLinks = document.querySelectorAll('nav .cont ul li');

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

const textArray = ["", ' a DEVELOPER.', " a THINKER.", " a DREAMER!"];
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
    duration: 2500,
    triggerHook: 0

})
.setClassToggle(".textMe", "pop-up")
.addTo(textMeController);


const aboutcontroller = new ScrollMagic.Controller();

const aboutscene = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 300,
    triggerHook: 0.85


})
.setTween(abouttween)

.addTo(aboutcontroller);

const aboutscenesvg = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 2000,
    triggerHook: 0.6

})
.on("start", function(){
    $(".abtsvg").toggleClass('apear');
    $(".person").toggleClass('apearPerson');
    $(".textsvgabt").toggleClass('apearText');
})
.setClassToggle('#Curious', 'slide-in')
.addTo(aboutcontroller);

const aboutscenetextAuto = new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: 1000,
    triggerHook: 0.6
})
.setClassToggle('#Autonome', 'slide-in')
.addTo(aboutcontroller);


// Skills Selection

const skillElement = document.getElementsByClassName('skillshead');
const skillParaElement = document.getElementsByClassName('skillparagraph');
const skillParaElement2 = document.getElementsByClassName('skillpara2')
const skillParaElement3 = document.getElementsByClassName('skillpara3')
const skilltween = new TimelineLite();

const flightPathSkill = {
    curviness:1,
    values: [
        {x:0, y:0}
    ]
}
const skillElementsArray = [skillElement, skillParaElement, skillParaElement2, skillParaElement3];
skilltween.add (
    TweenLite.to(skillElementsArray, 1, {
        bezier: flightPathSkill,
        ease: Power1.easeInOut
    })
);

const skillscontroller = new ScrollMagic.Controller();
const skillsscene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: 300,
    triggerHook: 0.8


})

.setTween(skilltween)
.addTo(skillscontroller);


const skillssceneSvg= new ScrollMagic.Scene({
    triggerElement: ".skills",
    duration: 3000,
    triggerHook: 0.8

})
.on("start", function() {
    $(".skillssvg").toggleClass('apear')
})
.addTo(skillscontroller);


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');



const contcontroller = new ScrollMagic.Controller();

const contacts = new ScrollMagic.Scene({
    triggerElement: "#contacts",
    duration: 3000,
    triggerHook: 0.6

})
.setClassToggle(".container .box-cont", "contslide")
.addTo(contcontroller);

const contactscenehead = new ScrollMagic.Scene({
    triggerElement: "#contacts",
    duration: 3000,
    triggerHook: 0.6

})
.setClassToggle(".contactshead", "slide-conthead")
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
});

$('#inner-poly').hover(function () {
    $('#outer-poly').toggleClass('outer-poly-hover');
});

const emailClick = document.querySelector("#email");
const contact_cont = document.getElementById("contacts")
const contact_Form = document.getElementById("contacts-form-id")


$("#email").click(function() {
    contact_cont.removeChild(contact_Form)
    contact_cont.appendChild(contact_Form)
    $(".contacts-form").addClass("jump");
})

const copiesArray = ["Copied!", "Double copy", "Triple", "Quadcopy!", "Enough!"]

const numberText = document.getElementById("number");
const testT = document.querySelector('.times-copy');
var copyCountair = 0;
$("#number").hover(function () {
    $(".copied").toggleClass('copiedApear');
})
numberText.addEventListener("click", function() {
    navigator.clipboard.writeText("0624879183")
    $(".copied").toggleClass('copiedColored');
    testT.textContent = copiesArray[copyCountair];
    $(".times-copy").css('opacity', '1');
    if (copyCountair>=copiesArray.length){
        copyCountair = copyCountair;
    }
    else if (copyCountair + 1<copiesArray.length){
        copyCountair += 1;
    }
})

const bodyText = document.getElementById('bodyText');
const subText = document.getElementById('name');
$('#submitBtn').click(function () {
    window.open(`mailto:fbelkhyate@gmail.com?subject=${subText.value}&body=${bodyText.value}`);


})

$('#abtli').click(function () {
    document.getElementById('aboutme').scrollIntoView(true);

})

$('#skill-li').click(function () {
    document.getElementById('skillhead').scrollIntoView(true);

})

$('#conli').click(function () {
    document.getElementById('contacts').scrollIntoView(true);

})
$('#textme').click(function () {
    document.getElementById('contacts').scrollIntoView(true);

})
$('#conbtn').click(function () {
    document.getElementById('contacts').scrollIntoView(true);

})