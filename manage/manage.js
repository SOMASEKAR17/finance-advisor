let allotments=document.querySelector(".allotments")
let dropdown=document.querySelector(".dropdown");

allotments.addEventListener("click",()=>{
 dropdown.classList.toggle("active");
});

let update=document.querySelector(".update-budget")
let dropdown2=document.querySelector(".dropdown_2");

update.addEventListener("click",()=>{
    dropdown2.classList.toggle("active");
   });