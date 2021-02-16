// ---------- Home Score ----------

let count = 0;
const createScore = document.querySelector("#home p:first-child");

function addScore(amount, buttonId) {
  document.querySelector(buttonId).addEventListener("click", (e) => {
    count = count + amount;
    createScore.innerHTML = count;
  });
}

addScore(1, "#add-one");
addScore(2, "#add-two");
addScore(3, "#add-three");

// ---------- Away Score ----------

let point = 0;
const enemyScore = document.querySelector("#away p:first-child");

function addEnemyScore(score, buttonId) {
  document.querySelector(buttonId).addEventListener("click", (e) => {
    point = point + score;
    enemyScore.innerHTML = point;
  });
}

addEnemyScore(1, "#one-score");
addEnemyScore(2, "#two-score");
addEnemyScore(3, "#three-score");

// ---------- Reset Button ----------

function resetScore(createScore, enemyScore) {
  document.querySelector("#reset-button").addEventListener("click", (e) => {
    createScore.innerText = count = 0;
    enemyScore.innerText = point = 0;
  });
}

resetScore(createScore, enemyScore);

// ---------- Modal ----------

const modal = document.querySelector("#team-name");
const btn = document.querySelector("#team-button");
const closeBtn = document.querySelector(".close");

// Open the modal
btn.addEventListener("click", (e) => {
  modal.style.display = "block";
});

// Close the modal
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

// Change Home team name when user clicks on save

let homeTeam = document.querySelector("#home p:last-child");
let homeName = document.querySelector("#home-team p:last-child");

// Change Away team name when user clicks on save

let awayTeam = document.querySelector("#away p:last-child");
let awayName = document.querySelector("#away-team p:last-child");

// Change both team names with a function

function changeTeamNames(homeName, awayName) {
  document.querySelector("#name-button").addEventListener("click", (e) => {
    homeTeam.innerText = homeName.innerText;
    awayTeam.innerText = awayName.innerText;
  });
}

changeTeamNames(homeName, awayName);
