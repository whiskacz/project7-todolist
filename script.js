const newText = document.querySelector("#text")
const addBtn = document.querySelector(".add")
const list = document.querySelector("ul")
const startLi = document.querySelector(".startLi")
const task = document.createElement("li")
const taskText = document.createElement("span")
const taskBtn1 = document.createElement("div")
const taskBtn2 = document.createElement("div")
const taskBtn3 = document.createElement("div")

const textValue = () => {
    
}
const newTask = () => {
    
    console.log(newText.value)
    startLi.remove()

    
    list.append(task)
    task.append(taskText)
    task.append(taskBtn1)
    task.append(taskBtn2)
    task.append(taskBtn3)
    taskText.textContent = newText.value
    taskText.classList.add("taskText")
    taskBtn1.textContent = "ok"
    taskBtn2.textContent = "edit"
    taskBtn3.textContent = "res"
    taskBtn1.classList.add("taskBtns")
    taskBtn2.classList.add("taskBtns")
    taskBtn3.classList.add("taskBtns")
    newText.value = ""
   
}
const okFunction = () => {}


newText.addEventListener("input", textValue)
addBtn.addEventListener("click", newTask)
taskBtn1.addEventListener("click", okFunction)