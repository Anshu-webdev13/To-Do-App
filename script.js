let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");
btn.addEventListener("click", () => {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    li.appendChild(deletebtn);
    deletebtn.classList.add("delete-btn");
    list.appendChild(li);
    deletebtn.addEventListener("click", () => {
      li.remove();
    });
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
    input.value = "";
  }
});
