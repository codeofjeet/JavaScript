let scrollcont = document.querySelector('.gallery');
let backBtn = document.getElementById('left');
let nextBtn = document.getElementById('right');

scrollcont.addEventListener("wheel", (e) =>{
    e.preventDefault;
    scrollcont.scrollLeft += e.deltaY;
    scrollcont.style.scrollBehavior = 'auto'; 
});

nextBtn.addEventListener("click", () => {
    scrollcont.style.scrollBehavior = 'smooth'; 
    scrollcont.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollcont.style.scrollBehavior = 'smooth'; 
    scrollcont.scrollLeft -= 900;
});