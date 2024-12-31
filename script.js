gsap.from(".header", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    delay: 1,
    stagger: 1
})

gsap.from(".headline h1", {
    opacity: 0,
    y: 20,
    duration: 2.5,
    delay: 1.5,
    stagger: 0.2
})

gsap.from(".headline p", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    delay: 1.5,
})


gsap.to(".revel", {

    backgroundSize: "100% 100%",
    duration: 10,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
});

var lastScrollTop = 0;
navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop){
        navbar.style.top = "-15vh";
    }
    else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})


gsap.from(".serv",{
    y: 20,
    opacity:0,
    duration: 0.5,
    delay: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".services",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})

var tc = gsap.timeline()

tc.to(".loader",{
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})

tc.to(".orange",{
    height: "100%",
    duration: 2,
    delay: -1.5,
    ease: Expo.easeInOut

})

tc.to(".page2",{
    height: "100%",
    duration: 2,
    delay: -1.8,
    ease: Expo.easeInOut
})
