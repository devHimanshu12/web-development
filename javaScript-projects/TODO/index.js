const todoInputs = []

function handleInput(){
    const inputElem = document.getElementById("input-box")
    todoInputs.push(inputElem.value)
    inputElem.value = ''
    createList(todoInputs)
    console.log(todoInputs)
}

function createList(todoInputs){
    console.log('create list',todoInputs)
    const listContainer = document.getElementById('todo-list-container');
    const ul = document.createElement('ul');
    const li = document.createElement('li')
    const span = document.createElement('span')
    const del = document.createElement('delete')
    li.classList.add('list-item')
    del.classList.add('delete-btn')
    for(let i =0; i<todoInputs.length;i++){
        span.innerText = todoInputs[i]
        del.innerText = 'Delete'
        li.appendChild(span)
        li.appendChild(del)
        del.addEventListener('click',function(){
            ul.removeChild(li)
        })
        ul.append(li)
    }
    listContainer.append(ul)
}


// function handleDelete(element){
//    createList(todoInputs)
// }

// function addItem(){
//     let list = document.getElementById("text").value
//     let arrayList = []
//     arrayList.push(list)
//     toDOList(arrayList)
// }

// function toDOList(item){
//     let listContainer = document.getElementById("display-todolist")
//     let element = document.createElement("li")
//     let eleWithDel = document.createElement("button")
//     eleWithDel.innerText = "X"
//     for(let i = 0; i< item.length; i++){
//         element.innerText = item[i] 
//         element.append(eleWithDel)
//         console.log(element)
//         listContainer.append(element)
//         eleWithDel.addEventListener("click", function () {
//           listContainer.removeChild(element);
//       })
//     }
// }