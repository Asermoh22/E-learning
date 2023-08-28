 const formOpenBtn=document.querySelector("#form-open"),
  home=document.querySelector(".home"),
  form_container=document.querySelector(".form_container"),
  form_closeBtn=document.querySelector(".form_close"),
  pwShowHide=document.querySelectorAll(".pw_hide"),
  signupBtn= document.querySelector("#signup"),
  loginBtn= document.querySelector("#login");
  

  formOpenBtn.addEventListener("click",() =>home.classList.add("show"));
  form_closeBtn.addEventListener("click",() =>home.classList.remove("show"));
pwShowHide.forEach((icon)=>{
    icon.addEventListener("click",() =>{
       let getpwInput=icon.parentElement.querySelector("input");
        if(getpwInput.type==="password"){
            getpwInput.type="text";
            icon.classList.replace("uil-eye-slash","uil-eye");
        }else{
            getpwInput.type="password";
            icon.classList.replace("uil-eye","uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    form_container.classList.add("active");
});

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    form_container.classList.remove("active");
});