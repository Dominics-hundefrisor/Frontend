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
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.href = "index.html"
            return
        }
    }
    document.getElementById("login-heading").innerHTML = "Incorrect username or password"
}