
let title = document.getElementById('title')
let description = document.getElementById('description')
let button = document.getElementById('btn')

let todos =[]
function showAlert(message) {
    let alertBox = document.getElementById('custom-alert');
    let alertMessage = document.getElementById('alert-message');
    alertMessage.innerText = message;
    alertBox.style.display = 'block';

    // Hide automatically after 3 seconds
    setTimeout(() => {
        hideAlert();
    }, 3000);
}

function hideAlert() {
    let alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none';
}
function saveTodos(){
     localStorage.setItem('todos',JSON.stringify(todos))
}
window.onload =()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>add(todo))
    
}

button.addEventListener('click',()=>{
    if(!title.value || !description.value){
        showAlert('Please add task detail');
    }
    else{
        todos.push({
            title:title.value,
            description:description.value,
            completed:false
        })
        saveTodos()
       
    }
    title.value =''
    description.value=''
    

    add()
})




function add(){
    let todoList = document.getElementById('list-group')
    todoList.innerHTML =''

    
    todos.forEach((todo,index)=>{
    let item = document.createElement('ol')
    item.className='list-group'

    let title = document.createElement('h5')
    title.innerText = (index + 1) + ". " + todo.title;
    title.className = 'my-3'
    title.className='list-group-item d-flex justify-content-between align-items-start'
    


    let description = document.createElement('p')
    description.innerText = 'description:' +todo.description
    description.className='fw-bold ms-2 me-auto'

    let completeBtn = document.createElement('button')
    completeBtn.innerText = todo.completed ? "Undo" : "Completed";
    completeBtn.className = 'btn btn-success mx-2'

    if(todo.completed){
        title.style.textDecoration ='line-through'
        description.style.textDecoration ='line-through'
        title.style.color ='grey'
        description.style.color ='grey'

    }
    completeBtn.addEventListener('click',()=>{
        todos[index].completed=!todos[index].completed
        add()
    })
  
    

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'delete'
    deleteBtn.className = 'btn btn-danger mx-2'
    deleteBtn.addEventListener('click',()=>{
       todos.splice(index,1);
       localStorage.setItem('todos',JSON.stringify(todos))
       add()
    })

    



    item.appendChild(title)
    item.appendChild(description)
    item.appendChild(completeBtn)
    item.appendChild(deleteBtn)
    todoList.appendChild(item)
    
    
    })
   
    
    
  

}
