const ekle = document.querySelector("#ekle");
const sil = document.querySelector("#sil");
const input = document.querySelector("#input");

const ul = document.createElement("ul");
input.after(ul);

ekle.addEventListener("click", () => {
  console.log(input.value);
  !input.value
    ? alert("Please enter a langugage")
    : (ul.innerHTML += `<li>${input.value}</li>`);
  input.value = "";
  input.focus();
  const li = document.querySelectorAll("li");
  li.style.fontSize = "1.5rem";
});

sil.addEventListener("click", () => {
  const li = document.querySelectorAll("li");
  if (li.length == 0) {
    alert("No language left to delete");
  }
  li[li.length - 1].remove();
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    ekle.click();
  }
});

const body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
  if (event.code === "Delete") {
    sil.click();
  }
});
