const burger_icon =document.querySelector(".burger_icon");
const Close = document.getElementById("close");
const menu_nav=document.querySelector(".menu_nav");

burger_icon.addEventListener("click",()=>{
    menu_nav.classList.add("active");

});


Close.addEventListener("click",()=>{
    menu_nav.classList.remove("active");

});

const input=document.getElementById("input");
input.addEventListener("click",()=>{
input.removeAttribute("placeholder")

});
const input1=document.getElementById("input1");
input1.addEventListener("click",()=>{
input1.removeAttribute("placeholder")

});
const input2=document.getElementById("input2");
input2.addEventListener("click",()=>{
input2.removeAttribute("placeholder")

});
const area=document.querySelector(".area");
area.addEventListener("click",()=>{
    area.removeAttribute("placeholder");
})



    











