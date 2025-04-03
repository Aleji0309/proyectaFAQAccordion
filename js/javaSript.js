//Variables
let plusSigns = document.querySelectorAll(".plusSign");
// Devuelve un arreglo plussSign con todos los elementos que comparten la misma clase

plusSigns.forEach((plusSign) => {
  plusSign.addEventListener("click", () => {
    let questionContainer = plusSign.closest(".question");
    let answer = questionContainer.querySelector(".answer-container");
    let h2 = document.querySelector("h2");
    answer.classList.toggle("hidden");

    // Mostrar/ ocultar respuesta
    if (answer.classList.contains("hidden")) {
      plusSign.src = "assets/images/icon-plus.svg";
      h2.classList.remove("questionNoH");
    } else {
      plusSign.src = "assets/images/icon-minus.svg";
      h2.classList.add("questionNoH");

    }
  });
});
