const div = document.getElementById("admin");
const text = "test";

function updateInfo(phone){
    console.log(phone.value);
}

function updatePhone(){
    let phone = document.getElementById("phone").value;
    let phoneJSON = JSON.stringify({phoneNumber: phone});
    putPostOrPatchData("https://hf-jpa.azurewebsites.net/api/v1/contact/update-phone", phoneJSON, 'PUT');
}

function updateEmail(){

}

function postNews() {
    const date = new Date();
    let newsTitle = document.getElementById("header").value;
    let newsText = document.getElementById("textArea").value;
    let newsDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    let newsJSON = JSON.stringify({title: newsTitle, text: newsText, date: newsDate});
    putPostOrPatchData("http://localhost:8080/news/post-news",newsJSON,"POST");
}



function deleteNews(id) {
    putPostOrPatchData('http://localhost:8080/news/delete/' + id, null,'DELETE');
}

function updateAddress(){
    console.log("test");
}

const putPostOrPatchData = async (url, data, method) => {
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