let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function createTaskElement (taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;
    document.getElementById("taskList").appendChild(li);
    
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    li.appendChild(deleteBtn);
    
    deleteBtn.addEventListener("click", function() {
        li.remove();

        let index = tasks.indexOf(taskText) 
        tasks.splice(index,1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
    });
    
    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });
}

tasks.forEach(taskText => {
    createTaskElement(taskText)
});

document.getElementById("addBtn").addEventListener("click", function() {
    
    let taskText = document.getElementById("taskInput").value;

    tasks.push(taskText)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    createTaskElement(taskText)
});


