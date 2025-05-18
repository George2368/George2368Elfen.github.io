var openpedofile = false;
function openProfile(profile){
    closesearchevre()
    for(var dial in allDialogs){
        if(allDialogs[dial].id != profile.value){
            allDialogs[dial].close()
        }
    }
    openpedofile= true;
    profilepage.show()
}
function changeReg(thisbu){
    if(thisbu.id=="registration"){
        console.log(document.getElementById('login'))
        document.getElementById('registrationF').classList.add("wshowchane");
        document.getElementById('loginF').classList.remove("wshowchane");
        document.querySelector(".form_title_dialog").innerHTML="Регистрация";
    }
    else if(thisbu.id=="login"){
        document.getElementById('loginF').classList.add("wshowchane");
        document.getElementById('registrationF').classList.remove("wshowchane");
        document.querySelector(".form_title_dialog").innerHTML="Вход";
    }
}
function User(email,password){
    this.email = email;
    this.password = password;
}
const Users = [];

function loginFunc(params) {
     
    
}
function RegFunc(params){
var inputsReg = document.querySelectorAll(".RegIn");
if(inputsReg[1].value = inputsReg[2].value){
    let user = new User(`${inputsReg[0].value}`, `${inputsReg[1].value}`);
    user.isAdmin= false;
    user.shopcart=[];
    user.favoritecart=[];
    Users.push(user);
    console.log(Users);
}
}