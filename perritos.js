// perritos.js

// Function to open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Event listener to open the modal when a button is clicked
document.getElementById('openModalButton').addEventListener('click', openModal);

// Event listener to close the modal when the close button is clicked
document.getElementById('closeModalButton').addEventListener('click', closeModal);

// Event listener to close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
});
// Function to fetch data from an API
async function fetchData(apiUrl) {
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage of fetchData function
fetchData('https://api.example.com/data')
    .then(data => {
        console.log(data);
        // Process the data here
    });