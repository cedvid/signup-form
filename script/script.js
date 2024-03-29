const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
const forgetPwd = document.getElementById("forgetPwd");
const confPwd = document.getElementById("confPwd");
const description = document.getElementById("description");

signinBtn.addEventListener("click", function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    forgetPwd.style.display = "block";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
    confPwd.classList.add("display-off");
    description.style.display = "none";
});

signupBtn.addEventListener("click", function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disabled");
    signupBtn.classList.remove("disabled");
    forgetPwd.style.display = "none";
    confPwd.classList.remove("display-off");
    description.style.display = "block";
});
  
