 function addTask() {
        const input = document.getElementById("taskInput");
        const taskText = input.value.trim();

        if (taskText !== "") {
            const ul = document.getElementById("todoList");
            const emptyState = document.getElementById("emptyState");
            
            // Hide empty state if it exists
            if (emptyState) {
                emptyState.style.display = 'none';
            }

            // Create new list item
            const li = document.createElement("li");

            // Create task text element
            const span = document.createElement("span");
            span.className = "task-text";
            span.textContent = taskText;

            // Create button container
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "task-buttons";

            // Create edit button
            const editButton = document.createElement("button");
            editButton.className = "edit-btn";
            editButton.textContent = "Edit";

            //Create ok button
            const okButton=document.createElement("button");
            okButton.className="ok-btn";
            okButton.textContent="Ok";
            okButton.style.display="none";

            editButton.onclick = () => editTask(span,editButton,okButton);
            okButton.onclick=()=> saveTask(span,editButton,okButton);
            // Create remove button
            const removeButton = document.createElement("button");
            removeButton.className = "delete-btn";
            removeButton.textContent = "Delete";
            removeButton.onclick = () => removeTask(li);

            // Append buttons to container
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(okButton);
            buttonContainer.appendChild(removeButton);

            // Append elements to the list item
            li.appendChild(span);
            li.appendChild(buttonContainer);

            // Append list item to the list
            ul.appendChild(li);

            // Clear the input field
            input.value = "";
        } else {
            // Create a more stylish alert
            showNotification("Please enter a valid task! 📝");
        }
    }

    function editTask(span,editButton,okButton) {
        

        const input=document.createElement("input");
        input.type="text";
        input.value=span.textContent;

        input.className="task-text";
        
        span.replaceWith(input);

        input.focus();

        editButton.style.display="none";
        okButton.style.display="inline-block";

        okButton.onclick=()=>saveTask(input,editButton,okButton);
    }

    function saveTask(input,editButton,okButton){
        const newTask=input.value.trim();
        if(newTask!==""){
            const span=document.createElement("span");
            span.className="task-text";
            span.textContent=newTask;



            input.replaceWith(span);
            //Re bind the edit button with new span

            editButton.onclick = () => editTask(span, editButton, okButton);


            editButton.style.display="inline-block";
            okButton.style.display="none";

            showNotification("Task updated !");
        }
        else{
            showNotification("Task cannot be empty!");
        }

    }

    function removeTask(li) {
        const ul = document.getElementById("todoList");
        
        // Add fade out animation
        li.style.animation = "slideOut 0.6s ease";
        
        setTimeout(() => {
            ul.removeChild(li);
            
            // Show empty state if no tasks remain
            if (ul.children.length === 0) {
                const emptyState = document.createElement("div");
                emptyState.className = "empty-state";
                emptyState.id = "emptyState";
                emptyState.textContent = "No tasks yet. Add one above! 🚀";
                ul.appendChild(emptyState);
            }
        }, 300);
        
        showNotification("Task removed! 🗑️");
    }

    function showNotification(message) {
        // Simple notification system
        const notification = document.createElement("div");
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            padding: 15px 25px;
            border-radius: 12px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
            z-index: 1000;
            animation: slideInRight 0.5s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = "slideOutRight 0.5s ease";
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 2000);
    }

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes slideOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-20px); }
        }
    `;
    document.head.appendChild(style);

    // Add Enter key functionality
    document.getElementById("taskInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });