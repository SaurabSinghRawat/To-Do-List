 function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }
            const taskList = document.getElementById('taskList');
            const li = document.createElement('li');
            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            li.appendChild(taskContent);
            const deleteButton = document.createElement('span');
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');
            deleteButton.onclick = function() {
                taskList.removeChild(li);
            };
            li.appendChild(deleteButton);
            li.onclick = function() {
                li.classList.toggle('completed');
            };
            taskList.appendChild(li);
            taskInput.value = "";
        }