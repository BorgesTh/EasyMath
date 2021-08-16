let multiples_box = document.querySelector('section#multiples-box');
let mmc_box = document.querySelector('section#mmc-box');
let factorial_box = document.querySelector('section#factorial-box');

multiples_box.addEventListener('mouseover', function() {
    factorial_box.style.opacity = 0.3;
    mmc_box.style.opacity = 0.3;
})

multiples_box.addEventListener('mouseout', function() {
    factorial_box.style.opacity = 1;
    mmc_box.style.opacity = 1;
})

mmc_box.addEventListener('mouseover', function() {
    multiples_box.style.opacity = 0.3;
    factorial_box.style.opacity = 0.3;
})

mmc_box.addEventListener('mouseout', function() {
    multiples_box.style.opacity = 1;
    factorial_box.style.opacity = 1;
})

factorial_box.addEventListener('mouseover', function() {
    multiples_box.style.opacity = 0.3;
    mmc_box.style.opacity = 0.3;
})

factorial_box.addEventListener('mouseout', function() {
    multiples_box.style.opacity = 1;
    mmc_box.style.opacity = 1;
})

function copyContent(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
        },
        function () {
        /* failure */
        }
    );
}