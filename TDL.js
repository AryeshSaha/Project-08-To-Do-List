function addItem() {
  let task = document.getElementById("task").value;

  let items = document.getElementById("items");

  let itemDiv = document.createElement("div");

  let itemList = document.createElement("li");

  let delIcon = document.createElement("i");
  delIcon.classList.add("fa-solid");
  delIcon.classList.add("fa-circle-xmark");

  itemList.innerHTML = task;

  itemDiv.appendChild(itemList);
  itemDiv.appendChild(delIcon);

  items.appendChild(itemDiv);
}

let delitems = document.getElementById("items");
delitems.addEventListener("click", deleteitem);

function deleteitem(e) {
  const items = e.target;
  if (items.classList[0] == "fa-solid") {
    items.parentElement.remove();
  } else {
    alert("to delete any item, click on the cross icon");
  }
}
