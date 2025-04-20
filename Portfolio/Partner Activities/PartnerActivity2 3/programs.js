function applyChanges() 
{
    const userName = document.getElementById('userName').value;
    const userMessage = document.getElementById('userMessage').value;
    const bgColor = document.getElementById('bgColor').value;

    document.querySelector('h1').textContent = `Hello ${userName}!`;
    document.querySelector('p').textContent = userMessage;
    document.body.style.backgroundColor = bgColor;
}

function addItem() 
{
    var todoItem = document.getElementById('todoItem').value;
    if (todoItem) {
        var li = document.createElement('li');
        li.textContent = todoItem;
        document.getElementById('todoList').appendChild(li);
        document.getElementById('todoItem').value = '';
    }
}