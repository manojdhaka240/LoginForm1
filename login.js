function validateEmail(email) 
{
    var x = /\S+@\S+\.\S+/;
    return x.test(email);
}

// let email = document.getElementById("Email").value;


var email = document.getElementById("Email");
// var emailValue = document.getElementById("Email").value;

email.addEventListener("keypress", function() {
    emailValue = document.getElementById("Email").value;
    console.log(emailValue);
});

if(validateEmail(emailValue)==false)
{
    alert("Enter valid email address");
}

// let pass = document.getElementById("Pass").value;
// console.log(pass);

// function Password_Validator(pass)
// {
//     let s = "abcdefghijkalmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@"
//     for(let i=0;i<pass.length;i++)
//     {
//         if(pass[i]==false)
//         {

//         }
//     }
// }
