const burger_icon =document.querySelector(".burger_icon");
const Close = document.getElementById("close");
const menu_nav=document.querySelector(".menu_nav");
const body=document.querySelector(".body1");
const footer =document.querySelector(".footer_input");


burger_icon.addEventListener("click",()=>{
    menu_nav.classList.add("active");
   
});

Close.addEventListener("click",()=>{
    menu_nav.classList.remove("active");
});

burger_icon.addEventListener("click",()=>{
    body.classList.add("lock");
});

Close.addEventListener("click",()=>{
    body.classList.remove("lock");
});


footer.addEventListener("click",()=>{
    footer.removeAttribute("placeholder");
});









    











