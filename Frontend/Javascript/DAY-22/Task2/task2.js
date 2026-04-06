// Select elements
const button = document.querySelector("button");
const main = document.querySelector("main");

// Different clip-path shapes
const clipPaths = [
  "ellipse(50% 50% at 50% 50%)",
  "circle(40% at 30% 30%)",
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "inset(10% 20% 30% 40%)",
  "ellipse(30% 70% at 60% 40%)",
  "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)"
];

button.addEventListener("click", () => {

  // Random RGB color
  const red   = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue  = Math.floor(Math.random() * 256);

  // Random size (50px - 149px)
  const randomHeight = Math.floor(Math.random() * 100) + 50;
  const randomWidth  = Math.floor(Math.random() * 100) + 50;

  // Random position (%)
  const randomLeft = Math.floor(Math.random() * 100);
  const randomTop  = Math.floor(Math.random() * 100);

  // Create box
  const box = document.createElement("div");

  // Apply styles
  box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  box.style.height = `${randomHeight}px`;
  box.style.width  = `${randomWidth}px`;
  box.style.position = "absolute";
  box.style.left = `${randomLeft}%`;
  box.style.top  = `${randomTop}%`;

  // Apply random clip-path
  const randomClipPath =
    clipPaths[Math.floor(Math.random() * clipPaths.length)];
  box.style.clipPath = randomClipPath;

  // Add to DOM
  main.append(box);
});