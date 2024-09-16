
function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const userdetails={
      email,
      phone,
      username,
    }
    const userdetails_serialized=JSON.stringify(userdetails);
    localStorage.setItem("User Details",userdetails_serialized);
    const list=document.querySelector('ul');
    const newLi=document.createElement('li');
    newLi.textContent=username+"-"+email+"-"+phone
    const dltbtn=document.createElement('button')
    dltbtn.type="button"
    dltbtn.className='delete-btn';
    dltbtn.textContent="Delete";
    dltbtn.onclick=()=>{
      localStorage.getItem(event.email);
      list.removeChild(newLi);
    }
    newLi.appendChild(dltbtn);
    list.appendChild(newLi);
};
module.exports=handleFormSubmit;