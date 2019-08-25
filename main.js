let menu = document.querySelector('.btn-toggle');
let nav = document.querySelector('nav');
let close = document.querySelector('.btn-close');
let itens = document.querySelectorAll('.pachi__a');

menu.addEventListener('click', function() {
    nav.classList.add("toggle");
});

close.addEventListener('click', function() {
    nav.classList.remove("toggle");
});

Array.from(itens).map(function(item) {
   item.addEventListener('click', function() {
       nav.classList.remove("toggle");
   });
});