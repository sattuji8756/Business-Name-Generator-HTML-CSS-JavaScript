let adjectives = ["Crazy", "Amazing", "Fire"];
let shops = ["Engine", "Foods", "Garments"];
let suffixes = ["Bros", "Limited", "Hub"];

function generateName() {
  let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  let shop = shops[Math.floor(Math.random() * shops.length)];
  let suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  let Elemment = document.getElementById("name");

  Elemment.classList.add("fade");
  setTimeout(() => {
    Elemment.innerText = adj + " " + shop + " " + suffix;
    Elemment.classList.remove("fade");
  }, 150);
}

function copyText() {
  let cText = document.getElementById("name").innerText;
  navigator.clipboard.writeText(cText);
  alert(`Your Text is Copeid: ${cText}`);
}

function download() {
  let text = document.getElementById("name").innerText;
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#5a3dff";
  ctx.font = "bold 60px Poppins";
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, 120);

  let link = document.createElement("a");
  link.download = "business-logo.png";
  link.href = canvas.toDataURL();
  link.click();
}
