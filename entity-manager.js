

// get all
function fetchContacts(){
    fetch("http://localhost:8080/api/v1/contact")
    .then((response) => response.json())
    .then((contact) => {
    let html = "";

    contact.forEach((contact) => {
      html += `

         <tbody>
           <tr>
             <td>${contact.id}</td>
             <td>${contact.phoneNumber}</td>
             <td>${contact.email} </td>
             <td>${contact.address} </td>
          </tr>
        </tbody>`
    });

    document.querySelector(".contactTable").innerHTML = html
  });
}

// get by id
function fetchContact(){
  fetch("http://localhost:8080/api/v1/contact/" + document.getElementById('contact-id').value)
    .then((response) => response.json())
    .then((contact) => {
    let html = "";
      html += `
         <tbody>
           <tr>
             <td>${contact.id}</td>
             <td>${contact.phoneNumber}</td>
             <td>${contact.email} </td>
             <td>${contact.address} </td>
          </tr>
        </tbody>`
        document.querySelector(".contactTable2").innerHTML = html
    });
  };
  
  // delete
  function deleteContact(id){
    console.log('delete begin')
    console.log('id : ' + id)
    fetch("http://localhost:8080/api/v1/contact/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      window.location.reload();
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function getDeleteInput() {
    return document.getElementById("input-id-delete").value;
  }


  // post
  const form = document.getElementById('form')
  const inputs = document.querySelectorAll('.input')

  form.addEventListener('submit', (e) => validateBookingForm(e))


  function validateBookingForm(e) {
    console.log('validating')
    e.preventDefault()
    createBookingDataObject()
  }

  function createBookingDataObject(contact){
   let phoneNumber = inputs[0].value
   let address = inputs[1].value
   let email = inputs[2].value

   const bookingDataObject = {
    phoneNumber: phoneNumber,
    address: address,
    email: email
   }

   console.log('data object')
   console.log(bookingDataObject)
   console.log(typeof bookingDataObject.phoneNumber)
   postForm('http://localhost:8080/api/v1/contact', bookingDataObject)
}

async function postForm(url, formObject)
{
  console.log('post form')
  console.log(formObject)
   let response = await fetch(url, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
   })
}
// patch
function patchContact(id, field1, field2, field3){
  console.log("field 1: " + field1)
  console.log("field 2: " + field2)
  console.log("field 3: " + field3)
  if(field1 != ""){
    patchPhoneNumber(id, field1)
  }
  if(field2 != ""){
    patchEmail(id, field2)
  }
  if(field3 != ""){
    patchAddress(id, field3)
  }
}

function patchPhoneNumber(id, value) {
  console.log("PATCHING PHONENUMBER")
  console.log("patching : (" + id + ")")
    const responseFlow = fetch("http://localhost:8080/api/v1/contact/" + id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      // The content to update
      body: JSON.stringify({
        phoneNumber: value
      })
    })
}

function patchEmail(id, value) {
  console.log("patching : (" + id + ")")
    const responseFlow = fetch("http://localhost:8080/api/v1/contact/" + id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      // The content to update
      body: JSON.stringify({
        email: value
      })
    })
}
function patchAddress(id, value) {
  console.log("patching : (" + id + ")")
    const responseFlow = fetch("http://localhost:8080/api/v1/contact/" + id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      // The content to update
      body: JSON.stringify({
        address: value
      })
    })
}

function getPatchInput() {
  return document.getElementById("input-id-patch").value;
}
function getPatchPhoneNumber() {
  return document.getElementById("input-phoneNumber-patch").value;
}
function getPatchEmail() {
  return document.getElementById("input-email-patch").value;
}
function getPatchAddress() {
  return document.getElementById("input-address-patch").value;
}

function fetchContact2(){
  fetch("http://localhost:8080/api/v1/contact/" + document.getElementById('input-id-patch').value)
    .then((response) => response.json())
    .then((contact) => {
    let html = "";
      html += `
         <tbody>
           <tr>
             <td>${contact.id}</td>
             <td>${contact.phoneNumber}</td>
             <td>${contact.email} </td>
             <td>${contact.address} </td>
          </tr>
        </tbody>`
        document.querySelector(".contactTable3").innerHTML = html
    });
  };


// put

// patch