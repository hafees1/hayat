document.addEventListener('DOMContentLoaded', function () {
    // Simulate loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.getElementById('prototypePopup').style.display = 'flex';

        // Automatically close the prototype popup after 3 seconds
        setTimeout(() => {
            document.getElementById('prototypePopup').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        }, 3000);
    }, 3000);
});

function showBloodRequestForm() {
    document.getElementById('bloodRequestForm').style.display = 'flex';
}

function closeBloodRequestForm() {
    document.getElementById('bloodRequestForm').style.display = 'none';
}

function submitBloodRequest() {
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;
    const details = document.getElementById('details').value;

    // Validate form inputs
    if (!name || !bloodType || !location || !details) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a new blood donation post element
    const bloodRequestElement = document.createElement('div');
    bloodRequestElement.classList.add('blood-request-box');

    const infoElement = document.createElement('div');
    infoElement.innerHTML = `<p><strong>${name}</strong> (${bloodType}) - ${location}</p>`;
    bloodRequestElement.appendChild(infoElement);

    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `<p>${details}</p>`;
    bloodRequestElement.appendChild(detailsElement);

    // Append a spacer div for better separation
    const spacerElement = document.createElement('div');
    spacerElement.style.marginTop = '10px'; // Adjust the margin as needed
    bloodRequestElement.appendChild(spacerElement);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';  // Assign the class to the button
    removeButton.onclick = function () {
        removeBloodRequest(this);
    };
    bloodRequestElement.appendChild(removeButton);

    // Append the new post to the bloodRequests container
    document.getElementById('bloodRequestsContainer').appendChild(bloodRequestElement);

    // Close the form
    closeBloodRequestForm();
}

function removeBloodRequest(buttonElement) {
    const bloodRequestElement = buttonElement.parentNode;
    bloodRequestElement.parentNode.removeChild(bloodRequestElement);
}
