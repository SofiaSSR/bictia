let slideIndex = 0;
carousel();

function carousel(){
    let i;
    let x = document.getElementsByClassName("my-slides");
    for (let index = 0; index < x.length; index++) {
        x[index].style.display = "none";
        
    }
    slideIndex++;
    if (slideIndex >= x.length) {slideIndex = 0}
    x[slideIndex].style.display ="block";
    setTimeout(carousel, 2000);// Cambia imagen cada 2 seg
    
}
function openMenu() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }