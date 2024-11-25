function addtask(){
    const newtask = document.createElement('li')
    const tasklist = document.getElementById('tasklist')
    tasklist.appendChild(newtask)
    newtask.textContent = document.getElementById('inputtask').value
     document.getElementById('inputtask').value = ""
     deletetask(newtask)
}
function deletetask(newtask) {
    const deletebutton = document.createElement('button')
    deletebutton.textContent = "Delete"
    newtask.appendChild(deletebutton)
    deletebutton.onclick = function(){
        newtask.remove()
}
}