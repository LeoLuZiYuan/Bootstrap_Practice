var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   document.body.style.backgroundColor =
//     document.body.style.backgroundColor === "white" ? "purple" : "white";
// });

button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});