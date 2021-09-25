const btn = document.getElementById("button");
const level = document.getElementById("level__list");
const wrapperGame = document.querySelector(".wrapper-game");

let levels = document.querySelectorAll(".level");

levels.forEach((level) => {
  level.addEventListener("click", () => {
    levels.forEach((lvl) => lvl.classList.remove("active_game"));
    level.classList.add("active_game");
  });
});

let deleteCards = () => {
  document.querySelector(".wrapper").style.display = "block";
  wrapperGame.style.display = "none";
  wrapperGame.innerHTML = "";
  wrapperGame.className = "wrapper-game";
};

let renderCard = (number) => {
  for (let i = 0; i < number; i++) {
    let card = document.createElement("div");
    let cardInner = document.createElement("div");
    let cardFront = document.createElement("div");
    let cardBack = document.createElement("div");

    card.className = "flip-card";
    wrapperGame.appendChild(card);

    cardInner.className = "flip-card__inner";
    card.appendChild(cardInner);

    cardFront.className = "flip-card__front";
    cardInner.appendChild(cardFront);

    cardBack.className = "flip-card__back";
    cardInner.appendChild(cardBack);

    let rotate = () => {
      let random = Math.random();
      let randomNumber = Math.round(random*number) - 1;
      const bug  = document.querySelectorAll(".flip-card__back")[randomNumber];
      bug.classList.add("flip-card__back-bug");
      cardInner.classList.toggle("rotate");
      let cards = document.querySelectorAll(".flip-card");
      cards.forEach((card) => card.addEventListener("click", deleteCards));
    };
    card.addEventListener("click", rotate);
  }
};


let chooseLevel = (level) => {
  switch (level) {
    case "Простой":
      renderCard(3);
      wrapperGame.classList.add("simple");
      break;
    case "Средний":
      renderCard(6);
      wrapperGame.classList.add("middle");
      break;
    case "Сложный":
      renderCard(10);
      wrapperGame.classList.add("hard");
      break;
}};

let startGame = () => {
  document.querySelector(".wrapper").style.display = "none";
  document.querySelector(".wrapper-game").style.display = "flex";
  let level = document.querySelector(".active_game").innerHTML;
  chooseLevel(level);
}

btn.addEventListener("click", startGame);
