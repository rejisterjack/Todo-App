
// selectors

const showPopup = document.getElementById("show-popup")
const cards = document.getElementById("cards")
const popDiv = document.getElementsByClassName("popup")[0]
const finalPopDiv = document.getElementsByClassName("final-popup")[0]
const addTaskBtn = document.getElementById("add-task-btn")
const cancleTaskBtn = document.getElementById("cancle-task-btn")
const taskNameInput = document.getElementById("card-name")
const finalTaskNameInput = document.getElementById("final-card-name")
const addTaskCard = document.getElementById("add-task-card")
const delCard = document.getElementById("del-card")
const cardList = document.getElementById("card-list")
const finalAddTaskBtn = document.getElementById("final-add-task-btn")
const finalCancleTaskBtn = document.getElementById("final-cancle-task-btn")
// event listeners

showPopup.addEventListener("click", popup)
addTaskBtn.addEventListener("click", addTask)
cancleTaskBtn.addEventListener("click", cancleTask)
addTaskCard.addEventListener("click", addTaskName)
delCard.addEventListener("click",delThisCard)
finalAddTaskBtn.addEventListener("click",addLastTask)
finalCancleTaskBtn.addEventListener("click",lastCancle)

// functions
popDiv.style.visibility = 'hidden';
finalPopDiv.style.visibility = 'hidden';

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

function addTaskName(event){
  document.getElementsByClassName("main-container")[0].style.filter = "blur(2px)"
  finalPopDiv.style.visibility = 'visible';
}

function addLastTask(event){
  const listItem = document.createElement("li")
  
  const finalTaskName = document.createElement("p")
  finalTaskName.innerText=finalTaskNameInput.value
  listItem.appendChild(finalTaskName)
  const markDone = document.createElement("i")
  markDone.setAttribute("class","fa-solid fa-check")
  listItem.appendChild(markDone)

  cardList.appendChild(listItem)

  finalTaskNameInput.value=""

  document.getElementsByClassName("main-container")[0].style.filter = "blur(0px)"
  finalPopDiv.style.visibility = 'hidden';
}

function lastCancle(event){
  document.getElementsByClassName("main-container")[0].style.filter = "blur(0px)"
  finalPopDiv.style.visibility = 'hidden';
}

function delThisCard(event){
  console.log("hrllo");
}