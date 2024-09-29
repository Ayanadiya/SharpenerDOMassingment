const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/79dad41a37c9441185381c4c9b6885a5/todo")
  .then(res=>console.log(res)
  ).catch((error)=>console.log(error)
  )
}

function postTodo() {
  // Write your code here
   axios.post("https://crudcrud.com/api/79dad41a37c9441185381c4c9b6885a5/todo",{
    "title": "Learn Axios",  
    "completed": false,
   }).then(res=> console.log(res)).catch((error)=>console.log(error)
   );

}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/79dad41a37c9441185381c4c9b6885a5/todo/66f8ecbafe837603e816d76b",{
    "title": "Learn Axios",
    "completed": true,
  })
  .then((res)=>console.log(res)
  ).catch((error)=>console.log(error))
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/79dad41a37c9441185381c4c9b6885a5/todo/66f8ecbafe837603e816d76b")
  .then((res)=>console.log(res)
  ).catch((error)=>console.log(error)
  )
}