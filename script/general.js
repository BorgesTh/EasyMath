let multiples_box = document.querySelector('section#multiples-box');
let mmc_box = document.querySelector('section#mmc-box');
let fatorial_box = document.querySelector('section#fatorial-box');

multiples_box.addEventListener('mouseover', function() {
    fatorial_box.style.opacity = 0.5;
    mmc_box.style.opacity = 0.5;
    multiples_box.style.opacity = 1;
})
multiples_box.addEventListener('mouseout', function() {
    fatorial_box.style.opacity = 0.8;
    mmc_box.style.opacity = 0.8;
    multiples_box.style.opacity = 0.8;
})
mmc_box.addEventListener('mouseover', function() {
    multiples_box.style.opacity = 0.5;
    fatorial_box.style.opacity = 0.5;
    mmc_box.style.opacity = 1;
})
mmc_box.addEventListener('mouseout', function() {
    multiples_box.style.opacity = 0.8;
    fatorial_box.style.opacity = 0.8;
    mmc_box.style.opacity = 0.8;
})
fatorial_box.addEventListener('mouseover', function() {
    multiples_box.style.opacity = 0.5;
    mmc_box.style.opacity = 0.5;
    fatorial_box.style.opacity = 1;
})
fatorial_box.addEventListener('mouseout', function() {
    multiples_box.style.opacity = 0.8;
    mmc_box.style.opacity = 0.8;
    fatorial_box.style.opacity = 0.8;
})