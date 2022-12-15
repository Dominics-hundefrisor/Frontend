const div = document.getElementById("admin")
const text = "test"

function updateInfo(phone){
    console.log(phone.value);
}

function updatePhone(){
    let phone = document.getElementById("phone").value;
    let phoneNumber = JSON.stringify({phoneNumber: phone});
    putPostOrPatchValue("http://localhost:8080/api/v1/contact/update-phone", phoneNumber, 'PUT');
}

function updateEmail(){

}

function updateAddress(){
    console.log("test");
}

const putPostOrPatchValue = async (url, data, method) => {
    try {
      const response = await fetch(url, {
        method: `${method}`,
        body: data,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            'Accept': "application/json"
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