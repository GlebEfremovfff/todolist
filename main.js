window.addEventListener("load", () => {
  const doTask = document.querySelector("#do-new-task");
  const input = document.querySelector("#new-task-input");
  const listView = document.querySelector("#tasks");
  const removeSelected = document.querySelector("#remove-selected");

  removeSelected.addEventListener("click", (e) => {
    var cards = document.querySelectorAll(".task");
    var deleted = 0;
    for (let i = 0; i < cards.length; i++) {
      var cardSelect = cards[i].querySelector(".select");
      if (cardSelect.innerText == "X") {
        let key = localStorage.key(i - deleted);
        console.log("deleted " + localStorage.getItem(key) + " key " + key);
        localStorage.removeItem(key);
        deleted++;
        listView.removeChild(cards[i]);
      }
    }
  });

  for (let i = localStorage.length - 1; i > -1; i--) {
    const key = localStorage.key(i);
    let text = localStorage.getItem(key);
    console.log(localStorage.length);
    const taskCard = document.createElement("div");
    taskCard.classList.add("task");

    const cardContent = document.createElement("div");
    cardContent.classList.add("content");
    taskCard.appendChild(cardContent);

    const cardText = document.createElement("input");
    cardText.classList.add("text");
    cardText.type = "text";
    cardText.value = text;
    cardText.setAttribute("readonly", "readonly");
    cardContent.appendChild(cardText);

    const cardActions = document.createElement("div");
    cardActions.classList.add("actions");

    const cardEdit = document.createElement("button");
    cardEdit.classList.add("edit");
    cardEdit.innerText = "EDIT";

    const cardDelete = document.createElement("button");
    cardDelete.classList.add("delete");
    cardDelete.innerText = "DELETE";

    const cardSelect = document.createElement("button");
    cardSelect.classList.add("select");
    cardSelect.innerText = "";

    cardActions.appendChild(cardEdit);
    cardActions.appendChild(cardDelete);
    cardActions.appendChild(cardSelect);
    taskCard.appendChild(cardActions);

    listView.appendChild(taskCard);
    input.value = "";

    cardEdit.addEventListener("click", (e) => {
      if (cardEdit.innerText == "EDIT") {
        cardEdit.innerText = "SAVE";
        cardText.removeAttribute("readonly");
        cardText.focus();
      } else {
        cardEdit.innerText = "EDIT";
        let text = cardText.value;
        localStorage.removeItem(key);
        localStorage.setItem(key, text);
        cardText.setAttribute("readonly", "readonly");
      }
    });

    cardDelete.addEventListener("click", (e) => {
      localStorage.removeItem(key);
      listView.removeChild(taskCard);
    });

    cardSelect.addEventListener("click", (e) => {
      if (cardSelect.innerText == "") {
        cardSelect.innerText = "X";
      } else {
        cardSelect.innerText = "";
      }
    });
  }

  doTask.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    const key = localStorage.length;

    if (task != "") {
      localStorage.setItem(key, task);

      const taskCard = document.createElement("div");
      taskCard.classList.add("task");

      const cardContent = document.createElement("div");
      cardContent.classList.add("content");
      taskCard.appendChild(cardContent);

      const cardText = document.createElement("input");
      cardText.classList.add("text");
      cardText.type = "text";
      cardText.value = task;
      cardText.setAttribute("readonly", "readonly");
      cardContent.appendChild(cardText);

      const cardActions = document.createElement("div");
      cardActions.classList.add("actions");

      const cardEdit = document.createElement("button");
      cardEdit.classList.add("edit");
      cardEdit.innerText = "EDIT";

      const cardDelete = document.createElement("button");
      cardDelete.classList.add("delete");
      cardDelete.innerText = "DELETE";

      const cardSelect = document.createElement("button");
      cardSelect.classList.add("select");
      cardSelect.innerText = "";

      cardActions.appendChild(cardEdit);
      cardActions.appendChild(cardDelete);
      cardActions.appendChild(cardSelect);
      taskCard.appendChild(cardActions);

      listView.appendChild(taskCard);
      input.value = "";

      cardEdit.addEventListener("click", (e) => {
        if (cardEdit.innerText == "EDIT") {
          cardEdit.innerText = "SAVE";
          cardText.removeAttribute("readonly");
          cardText.focus();
        } else {
          cardEdit.innerText = "EDIT";
          let text = cardText.value;
          localStorage.removeItem(key);
          localStorage.setItem(key, text);
          cardText.setAttribute("readonly", "readonly");
        }
      });

      cardDelete.addEventListener("click", (e) => {
        localStorage.removeItem(key);
        listView.removeChild(taskCard);
      });

      cardSelect.addEventListener("click", (e) => {
        if (cardSelect.innerText == "") {
          cardSelect.innerText = "X";
        } else {
          cardSelect.innerText = "";
        }
      });
    }
  });
});
