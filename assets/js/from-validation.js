//Form Name-validation
const fname = document.getElementById('name');
fname.addEventListener('focusout', (event) => {
    if (event.target.value === "") {
        document.querySelector(".name-validation").classList.remove("display-none");
    }
});

fname.addEventListener('input',(event)=>{
    let valueLen = event.target.value.length;
    if(event.target.value!=''){
        document.querySelector(".name-validation").classList.add("display-none");
    }
    if(valueLen>25){
        document.querySelector(".name-validation-length").classList.remove("display-none");
    }
    else{
        document.querySelector(".name-validation-length").classList.add("display-none");
    }
})


//Email Validation
const fEmail = document.getElementById('email');
fEmail.addEventListener('focusout', (event) => {
    if (event.target.value === "") {
        document.querySelector(".email-validation").classList.remove("display-none");
    }
    if (!emailIsValid(event.target.value)) {
        document.querySelector(".email-wrong-validation").classList.remove("display-none");
    }
    else{
        document.querySelector(".email-wrong-validation").classList.add("display-none");
    }
});

fEmail.addEventListener('input',(event)=>{
    if(event.target.value!=''){
        document.querySelector(".email-validation").classList.add("display-none");
    }
    if (emailIsValid(event.target.value)) {
        document.querySelector(".email-wrong-validation").classList.add("display-none");
    }
});


const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Subject Validation
const fSubject = document.getElementById('subject');
fSubject.addEventListener('focusout', (event) => {
    if (event.target.value === "") {
        document.querySelector(".subject-validation").classList.remove("display-none");
    }
});

fSubject.addEventListener('input',(event)=>{
    let valueLen = event.target.value.length;
    if(event.target.value!=''){
        document.querySelector(".subject-validation").classList.add("display-none");
    }
    if(valueLen>100){
        document.querySelector(".subject-validation-length").classList.remove("display-none");
    }
    else{
        document.querySelector(".subject-validation-length").classList.add("display-none");
    }
})

//Message Validation
const fMessage = document.getElementById('message');
fMessage.addEventListener('focusout', (event) => {
    if (event.target.value === "") {
        document.querySelector(".message-validation").classList.remove("display-none");
    }
});

fMessage.addEventListener('input',(event)=>{
    let valueLen = event.target.value.length;
    if(event.target.value!=''){
        document.querySelector(".message-validation").classList.add("display-none");
    }
    if(valueLen>500){
        document.querySelector(".message-validation-length").classList.remove("display-none");
    }
    else{
        document.querySelector(".message-validation-length").classList.add("display-none");
    }
})

//On submit
const formSubmit = document.getElementById('contact-form');
formSubmit.addEventListener('submit', function(event) {
    const validationMessages = document.querySelectorAll('.validation:not(.display-none)');
    if (validationMessages.length > 0) {
        event.preventDefault();
        return;
    }
    formSubmit.submit();
});