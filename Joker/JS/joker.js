class Joker {
  constructor(name) {
    this.name = name;
    this.middle = []; //5 tall
    this.answers = []; //5 tall
    this.index = 0;
    this.points = 0;
  }

  startGame() {
    for (let i = 0; i < 5; i++) {
      let randomMiddle = Math.floor(Math.random() * 10);

      this.randomAnswer = Math.floor(Math.random() * 10);
      this.middle.push(randomMiddle);
      this.answers.push(this.randomAnswer);

      document.getElementById("btn" + i.toString()).innerHTML =
        randomMiddle.toString();
    }
    document.getElementById("up0").innerHTML =
      "<i class='fa-solid fa-caret-up'></i>";
    document.getElementById("down0").innerHTML =
      "<i class='fa-solid fa-caret-down'></i>";
    document.getElementById("up0").disabled = false;
    document.getElementById("down0").disabled = false;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("main-content").style.display = "flex";
    document.getElementById("textTop").textContent =
      "Trekk tallene og se om du vinner!";
    document.getElementById("pointsContainer").style.display = "flex";
    document.getElementById("pointsText").textContent = "0";
  }
  spill(dir) {
    const random = Math.floor(Math.random() * 10);
    const answer = Math.floor(Math.random() * 10);
    if (dir === "up") {
      if (random === answer) {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("correct");
        this.points = 5;
        document.getElementById(dir + this.index.toString()).innerHTML =
          "<i class='fa-solid fa-crown'></i>";
        jokerGame.final();
        return;
      }
      if (this.answers[this.index] >= this.middle[this.index]) {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("correct");
        this.points++;
      } else {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("wrong");
        this.points--;
      }
    } else if (dir === "down") {
      if (random === answer) {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("correct");
        this.points = 5;
        document.getElementById(dir + this.index.toString()).innerHTML =
          "<i class='fa-solid fa-crown'></i>";
        jokerGame.final();
        return;
      }
      if (this.answers[this.index] <= this.middle[this.index]) {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("correct");
        this.points++;
      } else {
        document
          .getElementById(dir + this.index.toString())
          .classList.add("wrong");
        this.points--;
      }
    }
    document.getElementById(dir + this.index.toString()).innerHTML =
      this.answers[this.index];
    document.getElementById("up" + this.index.toString()).disabled = true;
    document.getElementById("down" + this.index.toString()).disabled = true;
    document.getElementById("pointsText").textContent = this.points;

    this.index++;

    if (this.index < 5) {
      document.getElementById("up" + this.index.toString()).disabled = false;
      document.getElementById("down" + this.index.toString()).disabled = false;
      jokerGame.playGame();
    }

    if (this.index === 5) {
      jokerGame.final();
    }
    document.getElementById("up" + this.index.toString()).innerHTML =
      "<i class='fa-solid fa-caret-up'></i>";
    document.getElementById("down" + this.index.toString()).innerHTML =
      "<i class='fa-solid fa-caret-down'></i>";
  }
  playGame() {
    document.getElementById("up" + this.index.toString()).onclick = (e) =>
      jokerGame.spill("up");
    document.getElementById("down" + this.index.toString()).onclick = (e) =>
      jokerGame.spill("down");
  }

  final() {
    document.getElementById("restartButton").style.display = "flex";
    document.getElementById("textTop").textContent =
      "Du fikk " + this.points + " Poeng";
    document.getElementById("pointsContainer").style.display = "none";
  }

  restart() {
    this.middle = [];
    this.answers = [];
    this.index = 0;
    this.points = 0;
    for (let i = 0; i < 5; i++) {
      document.getElementById("btn" + i.toString()).innerHTML = "";
      document.getElementById("up" + i.toString()).classList.remove("correct");
      document.getElementById("up" + i.toString()).classList.remove("wrong");
      document.getElementById("up" + i.toString()).textContent = "";
      document.getElementById("down" + i.toString()).textContent = "";
      document
        .getElementById("down" + i.toString())
        .classList.remove("correct");
      document.getElementById("down" + i.toString()).classList.remove("wrong");
      document.getElementById("up" + i.toString()).disabled = true;
      document.getElementById("down" + i.toString()).disabled = true;
    }
    document.getElementById("startButton").style.display = "flex";
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("main-content").style.display = "none";
    document.getElementById("textTop").textContent =
      "Trykk på Start for å starte!";
  }
}

document.getElementById("restartButton").onclick = (e) => {
  jokerGame.restart();
};
let jokerGame = new Joker("game");

document.getElementById("startButton").onclick = (e) => {
  jokerGame.startGame();
  jokerGame.playGame();
};
