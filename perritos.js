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