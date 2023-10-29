function getStatus() {
    const orderno = document.getElementById("orderno").value;
    ;

    // Make a GET request to the GetStatus servlet
    fetch(`http://backend.gsmservice.in:8080/gsmbackend/getstat?orderid=${orderno}`)
        .then(response => response.json())
        .then(data => {
            removeClassNameByClass()
            if (data.status === "success" && data.orderstatus==="pending") {
                // Display a success message
                let x = document.getElementById("pending")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="accepted") {
                // Display a success message
                let x = document.getElementById("accepted")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="pickup") {
                // Display a success message
                let x = document.getElementById("pickup")
                x.classList.add("activebox")
            }
             else if (data.status === "success" && data.orderstatus==="yettostartrepair" || data.orderstatus==="collected"|| data.orderstatus==="workinprogress") {
                // Display a success message
                let x = document.getElementById("repair")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="completed") {
                // Display a success message
                let x = document.getElementById("completed")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="dispatched") {
                // Display a success message
                let x = document.getElementById("dispatched")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="delivered") {
                // Display a success message
                let x = document.getElementById("delivered")
                x.classList.add("activebox")
            }
            else {
                // Display an error message
                alert("An Error Occred:"+data.orderstatus)
            }
        })
        .catch(error => {
            statusResult.textContent = "An error occurred: " + error;
        });
}




function removeClassNameByClass() {
    // Get all elements with the class name "my-class"
    const elements = document.getElementsByClassName("activebox");

    // Iterate through the elements and remove the class name
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("activebox");
    }
}


function getStatusForsucess(id) {
    // const orderno = document.getElementById("orderno").value;
    let orderno=id;

    let some = document.getElementById("orderno");
    some.value=orderno
    let setOrderno = document.getElementById("showno");
    setOrderno.innerHTML="<br>Note Down Your Order No:"+orderno+""

    // Make a GET request to the GetStatus servlet
    fetch(`http://backend.gsmservice.in:8080/gsmbackend/getstat?orderid=${orderno}`)
        .then(response => response.json())
        .then(data => {
            removeClassNameByClass()
            if (data.status === "success" && data.orderstatus==="pending") {
                // Display a success message
                let x = document.getElementById("pending")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="accepted") {
                // Display a success message
                let x = document.getElementById("accepted")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="pickup") {
                // Display a success message
                let x = document.getElementById("pickup")
                x.classList.add("activebox")
            }
             else if (data.status === "success" && data.orderstatus==="yettostartrepair" || data.orderstatus==="collected"|| data.orderstatus==="workinprogress") {
                // Display a success message
                let x = document.getElementById("repair")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="completed") {
                // Display a success message
                let x = document.getElementById("completed")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="dispatched") {
                // Display a success message
                let x = document.getElementById("dispatched")
                x.classList.add("activebox")
            }
            else if (data.status === "success" && data.orderstatus==="delivered") {
                // Display a success message
                let x = document.getElementById("delivered")
                x.classList.add("activebox")
            }
            else {
                // Display an error message
                alert("An Error Occred:"+data.orderstatus)
            }
        })
        .catch(error => {
            statusResult.textContent = "An error occurred: " + error;
        });
}



function paramCheck()
{
    const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
if (id) {
    // Check if the 'id' parameter exists in the URL
    
    getStatusForsucess(id)
}

}