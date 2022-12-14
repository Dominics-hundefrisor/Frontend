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
    }*/
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
      }
    } catch (error) {
      console.log(error);
      return false;
    }
    document.getElementById("login-heading").innerHTML = "Incorrect username or password"
}

