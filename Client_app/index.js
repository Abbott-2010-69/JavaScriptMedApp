function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      showMessage('Please select a file.');
      return;
    }
  
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('file', file);
  
    // Make the AJAX request using the Fetch API
    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      showMessage(data.message);
    })
    .catch(error => {
      showMessage('An error occurred while uploading the file.');
      console.error(error);
    });
  }
  
  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
  }
  