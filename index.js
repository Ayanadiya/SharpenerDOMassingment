const inputdesc=document.createElement('input');
inputdesc.setAttribute('type','text');
inputdesc.setAttribute('id','description');
const form=document.querySelector('form');
const submitbtn=form.querySelector('button');
form.insertBefore(inputdesc,submitbtn);

const lists=document.querySelectorAll('li');
lists.forEach((li)=>{
    const desctoadd=document.getElementById('description');
    const paradesc=document.createElement('p');
    const paratext=document.createTextNode(desctoadd.value);
    paradesc.appendChild(paratext);
    li.appendChild(paradesc);
    paradesc.style.fontStyle='italic';
})
const filter=document.getElementById('filter');
filter.addEventListener('keyup',function(event){
    const textEntered=event.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName('fruit');
    for(let i=0; i<fruitItems.length; i++){
        const currentFruitName=fruitItems[i].firstChild.textContent.toLowerCase();
        const currentFruitDesc=fruitItems[i].lastChild.textContent.toLowerCase();
        if(currentFruitName.indexOf(textEntered)===-1 && currentFruitDesc.indexOf(textEntered)===-1)
        {
            fruitItems[i].style.display='none';
        }
        else
        {
           fruitItems[i].style.display='flex';
        }
    }
})

form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitName=document.getElementById('fruit-to-add').value;
    const fruitdesc=document.getElementById('description').value;
    if(fruitName==='' || fruitdesc===''){
        return;
    }
    const NewLi=document.createElement('li');
    NewLi.className='fruit';
    NewLi.innerHTML=fruitName+'<button class="delete-btn">x</button>'+fruitdesc;
    lists.appendChild(NewLi);
})