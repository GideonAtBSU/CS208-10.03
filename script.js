const ADD_BUTTON = document.getElementById("addButton");
const TASK_FIELD = document.getElementById("newTask");

window.onload = () => {
    ADD_BUTTON.addEventListener('click', addBtnClick);
    TASK_FIELD.addEventListener('keyup', (e) => {
        if(e.key === "Enter") {
            addBtnClick();
        }
    });
    document.querySelectorAll(".done-btn").forEach(element => {
        element.addEventListener('click', removeTask.bind(null, element));
    });
};

function addBtnClick(){
    const val = TASK_FIELD.value;
    TASK_FIELD.focus();

    if(!val) return;

    addTask(val);
    val = "";
}

function addTask(value) {
    const ol = document.querySelector("ol");
    const el = document.createElement("li");

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = value;

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.innerHTML = '&#10006;';
    doneBtn.addEventListener('click', removeTask.bind(null, doneBtn));

    el.append(text, doneBtn);

    ol.appendChild(el);
}

function removeTask(e) {
    const parent = e.parentNode;
    const gParent = parent.parentNode;
    gParent.removeChild(parent);
}
