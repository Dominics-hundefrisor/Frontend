
function checkLogin(){
    event.preventDefault();

    var username = "admin";
    var pass = "admin123";


    var user = {
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);

    sessionStorage.setItem(username, json);

    var input1 = document.getElementById("username1").value;
    var input2 = document.getElementById("password").value;

    var loginMessage = document.getElementById("loginMessage");


    var user = sessionStorage.getItem(username);
    var data = JSON.parse(user);

    if(user == null){
        console.log("Error");
    }else if (input1 == data.username && input2 == data.password){
        loginMessage.style.color = "green";
        loginMessage.style.textAlign = "center";
        loginMessage.innerHTML = "Succes";
        document.location.pathname = "adminpage.html"
    }else {
        loginMessage.style.color = "red";
        loginMessage.style.textAlign = "center";
        loginMessage.innerHTML = "Forkert kode";
    }

}
