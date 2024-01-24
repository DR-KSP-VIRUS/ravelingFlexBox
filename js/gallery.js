const photos = document.querySelectorAll(".host");

photos.forEach(photo => {
    photo.addEventListener("mouseover",() => {
        photo.lastElementChild.classList.add("active");
    });
    photo.addEventListener("mouseleave", () => {
        photo.lastElementChild.classList.remove("active");
    });
})
