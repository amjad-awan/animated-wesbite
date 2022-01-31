// Select element fucntion

const selectELement = function (element)
{
    return document.querySelector(element);

}

let menuToggler = selectELement(".menu-toggle");

let body = selectELement("body");

menuToggler.addEventListener("click", function(){
    body.classList.toggle("open");
});



/*--------- ScrollReveal ------*/

window.sr=ScrollReveal();
sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:300
});
sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:600
});
sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:300
});
sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:600
});