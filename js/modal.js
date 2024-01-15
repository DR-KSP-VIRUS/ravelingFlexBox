const openBtn = document.getElementById('open');
const openForm = document.getElementById('open-form');
const addOverlay = document.getElementById('show-overlay');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click',()=>{
    openForm.classList.add('open-form');
    addOverlay.classList.add('overlay');
});

closeBtn.addEventListener('click', ()=>{
    openForm.classList.remove('open-form');
    addOverlay.classList.remove('overlay');

});