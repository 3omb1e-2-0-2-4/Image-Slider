const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["1-210614-221121.jpeg", "2-210614-221121.jpeg", "3neww-210614-221121.jpeg", "4new-210614-221121.jpeg", "5-210614-221121.jpeg"];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if(i > photos.length - 1) {
        i = 0;
    }
    document.querySelector("#pictures").src = photos[i];
})
console.log(photos.length - 1);

back.addEventListener("click", () => {
    i--;
    if(i < 0) {
        i = photos.length - 1;
    }
    document.querySelector("#pictures").src = photos[i];
})