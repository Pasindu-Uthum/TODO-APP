const input = document.getElementById('user-input');
const add_btn = document.getElementById('add');
const tasks_div = document.getElementById('tasks-menu');
const counter = document.getElementById('counter');
let count = 0;
let complete_count = 0;


add_btn.onclick = function() {
    if (input.value == '') {
        input.placeholder = 'Type the task here'; // If the user hits enter without entering any input
    } else {
        input.placeholder = 'Add a task due today'; // Back to default
        count++;
    const div = document.createElement('div'); // The element which bears the input value
    div.setAttribute('class', 'task');
    const content = document.createTextNode(input.value);
    div.appendChild(content);
    tasks_div.appendChild(div);
    input.value = '';

    const delete_btn = document.createElement('div'); // The delete button
    delete_btn.setAttribute('class', 'delete');
    div.appendChild(delete_btn);

    const delete_icon = document.createElement('i'); // The delete icon in the delete btn
    delete_icon.setAttribute('class', 'fas fa-trash');
    delete_btn.appendChild(delete_icon);

    delete_btn.onclick = function() {
        div.remove();
        count--;
        document.getElementById('counter').innerHTML = `Planned (${count})`;
        if (complete_count != 0) {
            complete_count--;
            document.getElementById('complete-counter').innerHTML = `Completed (${complete_count})`;
        }
    }

    const complete = document.createElement('div'); // The complete cricle
    complete.setAttribute('class', 'complete');
    div.appendChild(complete);

    let round = 1;

    complete.onclick = function() {
        complete.setAttribute('id', 'complete');
        if (round < 3) {
            round++;
            const complete_icon = document.createElement('i'); // The icon in the complete circle
            complete_icon.setAttribute('class', 'fas fa-check');
            complete.appendChild(complete_icon);
            complete_count++;
            document.getElementById('complete-counter').innerHTML = `Completed (${complete_count})`; 
        }
    }

    div.onmouseenter = function() {
        delete_btn.style.animationName = 'expand';
        delete_btn.style.animationDuration = '0.2s';
        delete_btn.style.width = '50px';
    }

    div.onmouseleave = function() {
        delete_btn.style.animationName = 'shrink';
        delete_btn.style.animationDuration = '0.2s';
        delete_btn.style.width = '0px';
    }
    document.getElementById('counter').innerHTML = `Planned (${count})`;

    const clear = document.getElementById('clear');
    clear.onclick = function() {
        count = 0;
        complete_count = 0;
        const tasks = document.getElementsByClassName('task');
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].style.display = 'none';
        }
        document.getElementById('counter').innerHTML = '';
        document.getElementById('complete-counter').innerHTML = '';
    }
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add_btn.onclick();
    }
}); 


const settings = document.getElementById('settings');
const settings_menu = document.getElementById('settings-menu');
const settings_inside = document.getElementById('settings-inside');
const hidden_settings = document.getElementById('hidden-settings');

hidden_settings.onclick = function() {
    settings_menu.style.display = 'none';
}
settings.onclick = function() {
    settings_inside.style.animationName = 'resize';
    settings_inside.style.animationDuration = '1s';
    settings_menu.style.display = 'block';
}


const images = document.getElementsByClassName('images');
const background = document.getElementById('app-container');

for (let x = 0; x < images.length; x++) {
    images[x].onclick = function() {
        let source = this.src;
        background.style.backgroundImage = `url("${source}")`;
    }
}