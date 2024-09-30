const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const messageBox = document.createElement("div");
messageBox.style.display = "none";
messageBox.className = "congratulation";
messageBox.innerHTML = "🎉 Congratulations! You've completed all your tasks!";
document.querySelector(".result").appendChild(messageBox);


function addTask() {
  if (inputBox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // create Delete Button
    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.className = "delete-btn";
    li.appendChild(button);

    messageBox.style.display = "none";

  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
    }

    // delete task if clicked on button
    else if (e.target.tagName === "BUTTON"){
      e.target.parentElement.remove();
      saveData();
      checkIfAllTasksCompleted();
    }
  }, false);

  function checkIfAllTasksCompleted() {
    if (listContainer.children.length === 0) {
      // Show the congratulation message when no tasks remain
      messageBox.style.display = "block";
    }
  }

  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask(){
listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
