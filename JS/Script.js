let menuIcon = document.querySelector(".fa-bars")
let links = document.querySelector(".links")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark")
    links.classList.toggle("active")
}

let header = document.querySelector(".header")
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

window.onscroll = () =>{
  menuIcon.classList.remove("fa-xmark")
  links.classList.remove("active")
}

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('#Hero .Hero image img', { origin: "top" });

ScrollReveal().reveal(', #projects, .contact-container form', { origin: "bottom" });

ScrollReveal().reveal('#about img, .Hero-content, #skills, #contact', { origin: "left" });

ScrollReveal().reveal('#about .about-content, #projects .project-container .project-card, #Hero .Hero-image img', { origin: "right" });


var typed = new Typed('#typed-skill', {
  strings: ['Web Developer.', 'Web Designer.'],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1000,
  loop: true
});