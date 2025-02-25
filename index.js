const passwordBox= $("#password");
const length= 12;

const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase= "abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()<>?:{}|[]";
const allChars= upperCase+lowerCase+number+symbol;

function createPassword(){
    let passWord="";
    passWord += upperCase[Math.floor(Math.random()*upperCase.length)];
    passWord += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    passWord += number[Math.floor(Math.random()*number.length)];
    passWord += symbol[Math.floor(Math.random()*symbol.length)];

    while(length>passWord.length){
        passWord += allChars[Math.floor(Math.random()*symbol.length)];
    }

    passwordBox.val(passWord);
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}