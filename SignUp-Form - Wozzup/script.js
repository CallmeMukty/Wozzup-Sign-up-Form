const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");


signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
  if(document.getElementById("element").style.display == "none"){
    document.getElementById("element").style.display = "block";
  }
  else{
    document.getElementById("element").style.display = "none";
  }
});

