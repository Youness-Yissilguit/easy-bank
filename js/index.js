let menuOpen = document.getElementById("open_menu");
let statu = false;
menuOpen.addEventListener("click", function(){
    document.querySelector(".link_container").classList.toggle("active");
    menuOpen.src = statu ? "./assets/icon-hamburger.svg" : "./assets/icon-close.svg";
    statu = !statu;
});