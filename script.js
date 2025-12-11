// Show a welcome message when the page loads
let global=document.querySelector("html")
window.onload = function(){
  alert("Welcome to my portfolio website!");
  global.style.backgroundColor="grey";
};
let button=document.querySelector("button");
let button2=document.querySelectorAll("button")[1];

let project1=document.getElementById("webapplication");

let project2=document.getElementById("database");

project1.addEventListener("click",()=>{
     
  if(button.style.display=="none")
  {
  button.style.display="block";
   button.addEventListener("click",()=>{
      window.open("#", "_blank");
  })
  }
  else{
    button.style.display="none"
  }
});
project2.addEventListener("click", () => {
  if(button2.style.display=="none")
  {
  button2.style.display="block";
   button2.addEventListener("click",()=>{
      window.open("https://github.com/sjeyasri505-creator/mysql-food-ordering", "_blank");
  })
  }
  else{
    button2.style.display="none"
  }
});
