

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

  function something() {
    return document.getElementById("input-id").value;
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
   postForm('http://localhost:8080/api/v1/contact/add', bookingDataObject)
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

