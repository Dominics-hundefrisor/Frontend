var objPeople = [
    {
        username: "Tobias",
        password: "pass"
    },
    {
        username: "Rasmus",
        password: "mad"
    },
    {
        username: "Battal",
        password: "arbejde"
    }
]

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (let i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
           const user = objPeople[i].username;
            window.location.href = "adminpage.html"
            return
        }
    }

    document.getElementById("login-heading").innerHTML = "Incorrect username or password"
}