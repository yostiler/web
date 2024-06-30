window.onload = () => {
  const textElements = document.querySelectorAll(".text");
  const targetDiv = document.querySelector("#target-div");
  const rocket = document.getElementById('rocket');

  textElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      targetDiv.classList.remove("not-loaded");
      targetDiv.classList.add("loaded");
    });
  });
};

document.addEventListener("dragstart", function(event) {
  if (event.target.classList.contains("milk-mocha") || event.target.id === "rocket") {
      event.preventDefault();
  }
});