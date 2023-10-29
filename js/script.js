function toogleNav() {
  var x = document.getElementById("mobile-links");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");

    var some = document.getElementById("file-ip-1txt");
    preview.src = src;
    preview.style.display = "block";
    some.innerHTML = "Change Image"
  }
}




// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission.

//     // Get the form data
//     const formData = new FormData(this);

//     // Display the form data for demonstration (you can send it to your server)
//     for (let [key, value] of formData.entries()) {
//       console.log(key + ': ' + value);
//     }

//     // Now, you can send formData to your server using AJAX or fetch.
//     // Example using fetch:
//     fetch('http://backend.gsmservice.in:8080/gsmbackend/uploadorder', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => {
//         if (response.ok) {
//           // Handle success
//           let x = document.getElementById("successmsg")
//           x.classList.add("active")
//         } else {
//           // Handle error
//           let x = document.getElementById("errormsg")
//           x.classList.add("active")
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
//   // Example using fetch:

// })



// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('myForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission.

//     const modelSelect = document.getElementById('modelSelect');
//     const selectedModel = modelSelect.value;

//     if (selectedModel === 'Please Select An Model') {
//       alert('Please select a model from the dropdown.');
//       return;
//     }

//     const formData = new FormData(this);

//     fetch('http://backend.gsmservice.in:8080/gsmbackend/uploadorder', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.status === 'success') {
//           let x = document.getElementById("successmsg")
//           x.classList.add("active")
//         } else {
//           let x = document.getElementById("errormsg")
//           x.classList.add("active");
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred.');
//       });
//   });
// });
function checkOtp() {
  var phoneNumber = document.getElementById('mobile');
  phoneNumber = phoneNumber.value;

  var otp = document.getElementById('otp');
  otp = otp.value;

  const url = `https://2factor.in/API/V1/97766f99-75b8-11ee-addf-0200cd936042/SMS/VERIFY3/${phoneNumber}/${otp}`;

  fetch(url, {
    method: 'GET' // Change to GET method
  })
    .then(response => {
      if (response.ok) {
        return response.json(); // Expect JSON response
      } else {
        throw new Error(`HTTP GET request failed with status: ${response.status}`);
      }
    })
    .then(data => {
      console.log('Server Response:');
      console.log(data);

      if (data.Status === 'Success') {
        // If the response status is 'Success', display an alert
        alert('goodman');
      } else {
        
      }
    })
    .catch(error => {
      console.error(error);
      alert('Failed to verify OTP: ' + error.message);
    });
}

function otp() {
  const modelSelect = document.getElementById('modelSelect');
  const selectedModel = modelSelect.value;

  if (selectedModel === 'Please Select An Model') {
    alert('Please select a model from the dropdown.');
    return;
  }
  let form = document.getElementById("myForm");
  form.classList.add("block");

  var x = document.getElementById("otpForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var phoneNumber = document.getElementById('mobile');
  phoneNumber = phoneNumber.value;

  const apiKey = 'your_api_key'; // Replace with your API key

  const url = `https://2factor.in/API/V1/97766f99-75b8-11ee-addf-0200cd936042/SMS/${phoneNumber}/AUTOGEN3/:Otp`;

  // fetch(url, {
  //   method: 'GET' // Change to GET method
  // })
  //   .then(response => {
  //     if (response.ok) {
  //       return response.text(); // If you expect a response, use response.json() or response.text() as needed
  //     } else {
  //       throw new Error(`HTTP GET request failed with status: ${response.status}`);
  //     }
  //   })
  //   .then(data => {
  //     console.log('Server Response:');
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
}





function submit() {

  const form = document.getElementById('myForm'); // Get the form element by its ID
  const modelSelect = document.getElementById('modelSelect');
  const selectedModel = modelSelect.value;

  if (selectedModel === 'Please Select An Model') {
    alert('Please select a model from the dropdown.');
    return;
  }
  console.log(selectedModel)
  const formData = new FormData(form); // Pass the form element

  fetch('http://backend.gsmservice.in:8080/gsmbackend/uploadorder', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        

        window.location.href = 'success.html?id=' + data.orderid;
      } else {
        let x = document.getElementById("errormsg");
        x.classList.add("active");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred.');
    });

}









// Call the fetchData function to load data when the page loads
// fetchiphoneData()

