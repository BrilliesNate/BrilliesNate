let loginBtn = document.getElementById('login');
let signupBtn = document.getElementById('signup');
let sighnUpUserValue = document.getElementById('sighnUpUserInput');
let sighnUpPasswordValue = document.getElementById('sighnUpPasswordInput');


let loginEnterBtn = document.getElementById('enterLogin');
let userNameValue = document.getElementById('UserNameLoginInput');
let passwordValue = document.getElementById('passwordLoginInput');


let overlayBlock = document.getElementById('overlayScreen');
let successMsg = document.getElementById('successContainer');
let errorMsg = document.getElementById('errorContainer');

loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;


    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

function enterLogin() {

    if (userNameValue.value === sighnUpUserValue.value && passwordValue.value === sighnUpPasswordValue.value) {

        // console.log();
        // console.log('Success');
        successMsg.style = 'display:block';
    } else {
        errorMsg.style = 'display:block';

    }
}

