function storeToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    localStorage.setItem("Username",name);
    localStorage.setItem("Email",email);
    localStorage.setItem("Phone",phone);
}