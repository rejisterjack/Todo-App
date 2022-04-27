
// selectors

const showPopup = document.getElementById("show-popup")
const cards = document.getElementById("cards")
const popDiv = document.getElementsByClassName("popup")[0]
const addTaskBtn = document.getElementById("add-task-btn")
const cancleTaskBtn = document.getElementById("cancle-task-btn")
const taskNameInput = document.getElementById("card-name")
// event listeners

showPopup.addEventListener("click", popup)
addTaskBtn.addEventListener("click", addTask)
cancleTaskBtn.addEventListener("click", cancleTask)

// functions
popDiv.style.visibility = 'hidden';

function popup(event){
  document.getElementsByClassName("main-container")[0].style.filter = "blur(2px)"
  popDiv.style.visibility = 'visible';
}

function addTask(event){
  document.getElementsByClassName("main-container")[0].style.filter = "blur(0px)"
  popDiv.style.visibility = 'hidden';

  const card = document.createElement("div")
  card.setAttribute("class","card")
  
  const taskName = document.createElement("h2")
  taskName.innerText=taskNameInput.value
  card.appendChild(taskName)

  const hrLine = document.createElement("hr")
  card.appendChild(hrLine)

  const taskNameList = document.createElement("ul")
  card.appendChild(taskNameList)

  const cardBtn = document.createElement("div")
  cardBtn.setAttribute("class","card-btn")

  const addTaskBtn = document.createElement("i")
  addTaskBtn.setAttribute("class","fa-solid fa-trash")
  cardBtn.appendChild(addTaskBtn)
  const delBtn = document.createElement("i")
  delBtn.setAttribute("class","fa-solid fa-circle-plus")
  cardBtn.appendChild(delBtn)

  card.appendChild(cardBtn)


  cards.appendChild(card)

  taskNameInput.value=""
}
function cancleTask(event){
  document.getElementsByClassName("main-container")[0].style.filter = "blur(0px)"
  popDiv.style.visibility = 'hidden';
}