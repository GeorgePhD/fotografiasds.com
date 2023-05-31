const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
    fulImg.style.width = '700px';
    fulImg.style.height = '900px'

}
function closeImg(){
    fulImgBox.style.display = "none";
}


function scrolll() {
    var left = document.querySelector('.scroll_images');
    left.scrollBy(220, 0)
}

function scrollr() {
    var right = document.querySelector('.scroll_images');
    right.scrollBy(-220, 0)
}


