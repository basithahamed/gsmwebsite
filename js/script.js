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
//     fetch('http://193.203.160.93:8080/gsmbackend/uploadorder', {
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



document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission.

    const formData = new FormData(this);

    fetch('http://193.203.160.93:8080/gsmbackend/uploadorder', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          let x = document.getElementById("successmsg")
          x.classList.add("active")
        } else {
          let x = document.getElementById("errormsg")
          x.classList.add("active");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
      });
  });
});










// Call the fetchData function to load data when the page loads
// fetchiphoneData()

