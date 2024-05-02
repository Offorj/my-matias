const hambuger = document.querySelector(".hambuger");
const hambugerDrop = document.querySelector(".hambuger-drop");


hambuger.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    hambugerDrop.classList.toggle("active");
  
})


function openNav() {
    document.getElementById("Sidebar2").style.width = "340px";
  }
  
  function exitNav() {
    document.getElementById("Sidebar2").style.width = "0";
  }