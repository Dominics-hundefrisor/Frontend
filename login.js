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

    let isSuccessful = postUserDetails(username,password);
    if(!isSuccessful) {
        document.getElementById("login-heading").innerHTML = "Incorrect username or password";
    }
    /*for (let i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.location.href = "index.html"
            return
        }
    }*/
}

const postUserDetails = async (username, password) => {
    const url = 'http://localhost:8080/login';
    const data = JSON.stringify({ username: username, password: password});
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
        headers: {
            "Content-type": "application/json"
          }
      });
      if (response.ok) {
        console.log("access granted");
        const jsonResponse = await response.json();
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };