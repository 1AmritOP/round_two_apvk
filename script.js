jQuery(document).on('scroll', function(){
  jQuery('h1').css("left", Math.max(100 - 0.2*window.scrollY, 1) + "vw");
  })
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//custom cursor

function spark(event) {
  let i = document.createElement("i");
  // Set the position of the element based on the mouse event
  i.style.left = event.pageX + "px";
  i.style.top = event.pageY + "px";

  // Randomly scale the element
  i.style.transform = `scale(${Math.random() * 2 + 1})`;

  // Set random transition values
  i.style.setProperty("--x", getRandomTransitionValue());
  i.style.setProperty("--y", getRandomTransitionValue());
  document.body.appendChild(i);

  // Remove the element after 2 seconds
  setTimeout(() => {
    document.body.removeChild(i);
  }, 2000);
};

function getRandomTransitionValue() {
  // Generate a random value between -200 and 200 pixels
  return `${Math.random() * 400 - 300}px`;
}

// Add event listener to track mouse movements and create spark effect
document.addEventListener("mousemove", spark);





//  document.addEventListener('DOMContentLoaded', () => {
//    new window['Cursor']({
//      targets: ['a']
//    })
//  }) 


// navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// hero and navbar
let hero = gsap.timeline()
hero.from("nav .logo, .nav-links li, .hamburger",{
  y:-100,
  duration:1,
  stagger:0.2,
  ease: "back.out(1.7)",
})
hero.to(".hero .text.d-flex-c",{
  opacity:1,
  scale:1,
  clipPath: "circle(103% at 50% 18%)",
  duration:0.5,
})
hero.to(".hero .details .part",{
  opacity:1,
  scale:1,
  clipPath: "circle(103% at 50% 18%)",
  duration:0.7,
})
hero.to(".hero .box .video",{
  opacity:1,
  duration:0.2,
})
hero.from(".hero .layer video",{
  opacity:0,
})

// circle
const text=document.querySelector(".circle .text p");
text.innerHTML = text.textContent.split('').map(
  (char, i) =>
    // console.log("amrit")
     `<span style="transform:rotate(${i * 8.3}deg)"> ${char}</span> `
).join('');



// taught section
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".taught",
    pin: true,
    start: "50% 50%",
    end: "300% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to("#web", {
  opacity: 1,
  filter: "blur(0px)",
})
  .to("#frontend", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#logic", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#gsap", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#animation", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#aptitude", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#backend", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#python", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#react", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#exo", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#javascript", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#design", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#node", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#dsa", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#database", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#uxui", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#java", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#git", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  })
  .to("#inter2", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3,
  });


// students
var st = gsap.timeline({scrollTrigger:{
  trigger:"#students",
  // markers:true,
  start:"38% 50%",
  end:"100% 50%",
  scrub:2,
  pin:true
}});
st
.to(".text",{
  top: "-7%",
},'a')
.to("#card-one",{
  top: "35%",
},'a')
.to("#card-two",{
  top: "130%"
},'a')
.to("#card-two",{
  top: "42%"
},'b')
.to("#card-one",{
  width: "65%",
  height: "65vh"
},'b')
.to("#card-three",{
  top: "130%"
}, 'b')
.to("#card-three",{
  top: "50%"
}, 'c')
.to("#card-two",{
  width: "70%",
  height: "70vh"
},'c')

 