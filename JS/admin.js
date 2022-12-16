function updatePhone(){
let p = document.getElementById("phoneMessage");
    let phone = document.getElementById("phone").value;
    let phoneJSON = JSON.stringify({phoneNumber: phone});
    putPostOrPatchValue("https://hf-jpa.azurewebsites.net/api/v1/contact/update-phone", phoneJSON, 'PUT');
}

function updateEmail(){
  let p = document.getElementById("emailMessage");
  let email = document.getElementById("email").value;
  let emails = JSON.stringify({email: email});
  putPostOrPatchValue("https://hf-jpa.azurewebsites.net/api/v1/contact/update-email", emails, 'PUT');
  p.style.color = "green"
    p.innerHTML = "Email opdateret"
}

function postNews() {
    const date = new Date();
    let newsTitle = document.getElementById("header").value;
    let newsText = document.getElementById("textArea").value;
    let newsDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    let newsJSON = JSON.stringify({title: newsTitle, text: newsText, date: newsDate});
    console.log(newsJSON)
    putPostOrPatchValue("https://hf-jpa.azurewebsites.net/news/post-news",newsJSON,"POST");
}

function deleteNews(id) {
    putPostOrPatchValue('https://hf-jpa.azurewebsites.net/news/delete/' + id, null,'DELETE');
}

function updateAddress(){
  let p = document.getElementById("addressMessage");
  let address = document.getElementById("adresse").value;
  let adresse = JSON.stringify({address: address});
  putPostOrPatchValue("https://hf-jpa.azurewebsites.net/api/v1/contact/update-address", adresse, 'PUT');
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
}