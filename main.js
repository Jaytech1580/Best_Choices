let name = document.getElementById("name").pattern;
let name_Content = document.getElementById("name").innerText;
let phone_input = document.getElementById("phone").pattern;
let phoneContent = document.getElementById("phone").innerText;
let mails_input = document.getElementById("mails").pattern;
let mailContent = document.getElementById("mails").innerText;
let password = document.getElementById("password").pattern;
let passwordContent = document.getElementById("password").innerText;
let password_2 = document.getElementById("password_2").pattern;
let password_2Content = document.getElementById("password_2").innerText;
let sign_up = document.getElementById("sign_up");
let sign_upContent = document.getElementById("sign_up").innerText;
let log_in = document.getElementById("log_in");
let log_inContent = document.getElementById("log_in").innerText;


function checkName() {
    if (name_Content !== name) {
        alert("Name must be filled out")
        return false;
    }else{
        return true
    }
}
function checkPhone(){
    if (phone_input !== phoneContent ){
        alert("Enter phone Number properly")
        return false;
    }else{
        return true;
    }
}
function checkMails(){
    if (mailContent !== mails_input ){
        alert("Enter a correct mail")
        return false;
    }else{
        return true;
    }
}
function checkPassword(){
    if (passwordContent !== password ){
        alert("Enter a correct password with 8 or more characters")
        return false;
    }else{
        return true;
    }
}
function checkPassword_2(){
    if (password_2Content !== passwordContent ){
        alert("Enter a corresponding password!!")
        return false;
    }else{
        return true;
    }
}