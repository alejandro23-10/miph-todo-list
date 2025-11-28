const todocolumn = document.getElementById("TODO")
const inprogresscolumn = document.getElementById("INPROGRESS")
const reviewcolumn = document.getElementById("REVIEW")
const donecolumn = document.getElementById("DONE")
const addbutton = document.getElementById("ADDBUTTON")
function handleaddbutton(){
  var taskElement = document.createElement("div");
  var inputElement = document.createElement("input");
  var selectElement = document.createElement("select");
  var optionTodo = document.createElement("option")
  var optionInProgress = document.createElement("option")
  var optionReview = document.createElement("option")
  var optionDone = document.createElement("option")
  var optionTodo = selectElement.appendChild(optionTodo) 
  var optionInProgress = selectElement.appendChild(optionInProgress) 
  var optionReview = selectElement.appendChild(optionReview) 
  var optionDone = selectElement.appendChild(optionDone)
  var selectElement = taskElement.appendChild(selectElement)
  var inputElement = taskElement.appendChild(inputElement)
  var taskElement = todocolumn?.appendChild(taskElement)
  optionTodo.value = "todoColumn"
  optionTodo.textContent = "todoColumn"
  optionInProgress.value = "inprogresscolumn"
  optionInProgress.textContent = "inprogresscolumn"
  optionReview.value = "reviewcolumn"
  optionReview.textContent = "reviewcolumn"
  optionDone.value = "donecolumn"
  optionDone.textContent = "donecolumn"
  console.log("hello world")
  function handleSelect(event){
    if(event.target.value == "inprogresscolumn"){
      taskElement = inprogresscolumn?.appendChild(taskElement)
      } 
    if(event.target.value == "reviewcolumn"){
      taskElement = reviewcolumn?.appendChild(taskElement)
    }
    if(event.target.value == "donecolumn"){
      taskElement = donecolumn?.appendChild(taskElement)
    }
    if(event.target.value == "todoColumn"){
      taskElement = todocolumn?.appendChild(taskElement)
      }
    }
    console.log(event)
  
  selectElement.addEventListener("change", handleSelect)
  
};

addbutton?.addEventListener("click", handleaddbutton)