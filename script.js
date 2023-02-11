const btn = document.querySelector(".btn");
let span = document.querySelector("span");
span.textContent = "Жмите кнопку";

btn.addEventListener("click", function () {
  let color = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let randomColor = "";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * color.length);
    randomColor += color[random];
  }

  span.textContent = randomColor;
  document.querySelector("body").style.background = `#${randomColor}`;
});
