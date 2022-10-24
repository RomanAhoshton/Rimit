const burger_icon =document.querySelector(".burger_icon");
const Close = document.getElementById("close");
const menu_nav=document.querySelector(".menu_nav");

burger_icon.addEventListener("click",()=>{
    menu_nav.classList.add("active");

});


Close.addEventListener("click",()=>{
    menu_nav.classList.remove("active");

});

