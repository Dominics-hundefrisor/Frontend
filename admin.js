
function updatePhone(){
let p = document.getElementById("phoneMessage");
    let phone = document.getElementById("phone").value;
    let phoneNumber = JSON.stringify({phoneNumber: phone});
    putPostOrPatchValue("http://localhost:8080/api/v1/contact/update-phone", phoneNumber, 'PUT');
    p.style.color = "green"
    p.innerHTML = "Telefon opdateret"
}

function updateEmail(){
  let p = document.getElementById("emailMessage");
  let email = document.getElementById("email").value;
  let emails = JSON.stringify({email: email});
  putPostOrPatchValue("http://localhost:8080/api/v1/contact/update-email", emails, 'PUT');
  p.style.color = "green"
    p.innerHTML = "Email opdateret"
}

function updateAddress(){
  let p = document.getElementById("addressMessage");
  let address = document.getElementById("adresse").value;
  let adresse = JSON.stringify({address: address});
  putPostOrPatchValue("http://localhost:8080/api/v1/contact/update-address", adresse, 'PUT');
  p.style.color = "green"
    p.innerHTML = "Adresse opdateret"
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