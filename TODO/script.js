let taskList = document.querySelector("#taskList");
let taskName = document.querySelector("#taskName");
let taskArray = [];


taskName.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        let obj = {};
        obj.name = taskName.value;
        obj.id = new Date().toLocaleTimeString();
        obj.status = "Pending";
        taskArray.push(obj);
        addDom(obj);
        setLocalStorage();
        taskName.value = "";
        console.log('Task added:', taskArray);
    }
})

function addDom(taskObj) {
    let taskDiv = document.createElement('div');
    let taskText = document.createElement('span');
    let chk = document.createElement('input');
    let del = document.createElement('button');
    let edit = document.createElement('button');
    taskDiv.setAttribute('id',taskObj.id);
    chk.setAttribute('type', 'checkbox');
    taskText.textContent = taskObj.name;
    del.textContent = "DEL";
    edit.textContent = "EDIT";
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(chk);
    taskDiv.appendChild(del);
    taskDiv.appendChild(edit);
    taskList.append(taskDiv);

    chk.addEventListener('change', () => {
        taskArray.forEach(item => {
            if (taskDiv.getAttribute('id') == item.id) {
                item.status = chk.checked ? "Completed" : "Pending";
            }
        })
        taskText.style.textDecoration = chk.checked ? 'line-through' : 'none';
        setLocalStorage();
        console.log('TaskArray updated:', taskArray);
    })

    del.addEventListener('click', () => {
        taskDiv.remove();
        taskArray = taskArray.filter(item => item.id != taskDiv.getAttribute('id'));
        console.log('TaskArray after delete:', taskArray);
        setLocalStorage();
    });

    edit.addEventListener('click', () => {
        taskArray.forEach(item => {
            if (taskDiv.getAttribute('id') == item.id) {
                let newName = prompt("Enter the new updated task", item.name);
                if (newName) {
                    item.name = newName;
                    taskText.textContent = newName;
                    setLocalStorage();
                }
            }
        })
    })
}

function setLocalStorage() {
    localStorage.setItem("localtask", JSON.stringify(taskArray));
}

function getLocalStorage() {
    if (localStorage.getItem("localtask") != null) {
        taskArray = JSON.parse(localStorage.getItem("localtask"))
        taskArray.forEach(element => {
            addDom(element);
        });
    }
}

getLocalStorage();