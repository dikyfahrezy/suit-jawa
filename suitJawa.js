function getPilihanComputer() {
  const comp = Math.floor(Math.random() * 3);
  switch (comp) {
    case 0:
      return "gajah";
    case 1:
      return "orang";
    default:
      return "semut";
  }
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const players = document.querySelectorAll("ul li img");
players.forEach((player) => {
  player.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = player.className;

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const hasil = getHasil(pilihanComputer, pilihanPlayer);
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
