
const lists=document.querySelectorAll('li');
lists.forEach((li) => {
    const edit=document.createElement('button');
    edit.className='edit-btn';
    edit.innerText='Edit';
    li.appendChild(edit);
});
const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');
form.addEventListener('submit',function(event){
    event.preventDefault;
    const fruitToAdd=document.getElementById("fruit-to-add");
    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.className='fruit';
    newLi.appendChild(newLiText);
    const dltbtn =document.createElement('button');
    dltbtn.innerText='x';
    dltbtn.className='delete-btn';
    newLi.appendChild(dltbtn);
    const edit=document.createElement('button')
    edit.innerText='Edit';
    edit.className='edit-btn';
    newLi.appendChild(edit);
    fruits.appendChild(newLi);
    console.log(newLi);
})
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
})