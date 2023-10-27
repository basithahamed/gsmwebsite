// Function to fetch data from the server
function fetchiphoneData() {
    fetch('http://193.203.160.93:8080/gsmbackend/getdevice') // Replace with your server endpoint
        .then(response => response.json())
        .then(data => {
            displayModelData(data); // Call a function to display model data
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to display model names and icons
function displayModelData(modelData) {
    const modelList = document.getElementById('modelList');

    // Clear the list before adding new items
    modelList.innerHTML = '';

    // Iterate through the model data and create list items
    modelData.forEach(model => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${model.icon}" alt="${model.modelname} Icon" width="94" height="42">
            <span class="modelname" onclick="getModel('${model.device}')">${model.device}</span>
        `;
        modelList.appendChild(listItem);
    });
}

// Initial fetch
fetchiphoneData();

function getModel(deviceName) {
    const apiUrl = `http://193.203.160.93:8080/gsmbackend/getmodel?device_name=${deviceName}`;
    
    // Get a reference to the <select> element
    const modelSelect = document.getElementById("modelSelect");
    
    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Data has been successfully retrieved and parsed
            modelSelect.innerHTML = ''; // Clear the previous options

            data.forEach(item => {
                // Create an <option> element for each item and add it to the <select>
                const option = document.createElement("option");
                option.value = item.name; // Adjust this to match the structure of your data
                option.text = item.modelname;
                modelSelect.appendChild(option);
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error("Error:", error);
        });
}
