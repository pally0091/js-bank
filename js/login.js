document.getElementById("login-btn").addEventListener('click', function(){
    const Email = document.getElementById("email");
    const emailAddress = Email.value;
   
    const Password = document.getElementById("pass");
    const passWord =Password.value;

    if(emailAddress === "roshni@esa.com" && passWord === "roshni")
        window.location.href = "bank.html"
    
    else(
        alert("invalid user or password")
    )

})