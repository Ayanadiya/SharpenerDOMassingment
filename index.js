function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const myObj={
        username,
        email,
        phone,
    }
    let myObj_serialized=JSON.stringify(myObj);
    localStorage.setItem("User Details",myObj_serialized);
}