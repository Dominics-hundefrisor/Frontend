/*var objPeople = [
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
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', sendReq);
    //pretend to get a token after logging in
});
function getInfo() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let isSuccessful = postUserDetails(username,password);
    if(!isSuccessful) {
        document.getElementById("login-heading").innerHTML = "Incorrect username or password";
    }
    /*for (let i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
           const user = objPeople[i].username;
            window.location.href = "adminpage.html"
            return
        }
    }
}


const putPostOrPatchValue = async (url, data, method) => {
    try {
      const response = await fetch(url, {
        method: `${method}`,
        body: data,
        headers: {
            "Content-type": "application/json"
          }
      });
      if (response.ok) {
        console.log("access granted");
        const jsonResponse = await response.json();
        const { token } = jsonResponse;
        console.log(token);
        sessionStorage.setItem("token", JSON.stringify(token));
        sendReq("http://localhost:8080/hi");
        /*window.location("http://localhost:8080/hi");*/
        /*
        console.log(jsonResponse);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    document.getElementById("login-heading").innerHTML = "Incorrect username or password"
}


    let req = new Request(url, {
        method: 'GET',
        mode: 'cors',
        headers: h
    });
    fetch(req)
        .then(resp => resp.json())
        .then(data => {
            console.log(data[0]);
        })
        .catch(err => {
            console.error(err.message);
        })
}
*/
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
        console.log("fell");
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