var container = document.getElementById("container");
container.addEventListener("click", function(e) {
  var circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
  container.appendChild(circle);
});
