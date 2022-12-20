const loginForm = document.querySelector('.login-form');

const subBut = (event => {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;

    const userForm = {
        email: email.value,
        password: password.value,
    } 
    console.log(userForm);
         
    event.currentTarget.reset();
});

    

loginForm.addEventListener("submit", subBut);