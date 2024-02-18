let togglebtn = document.querySelector("#toggle-btn");
let body = document.querySelector("body");

let currMode = "light";

togglebtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");

} else {
 
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
 
}
  togglebtn.classList.toggle("fa-sun", currMode === "light");
  togglebtn.classList.toggle("fa-moon", currMode === "dark");
  console.log(currMode);
});
