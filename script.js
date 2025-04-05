    
        fetch('https://api.jsonstorage.net/v1/json/e3027985-0415-4dc9-9995-70517415a048/725aceb0-01ef-48f8-8ab2-9fcf9df52fb9')
            .then(response => response.text())
            .then(data => {
                document.getElementById('marquee').innerHTML = data;
            })
            .catch(error => {
                document.getElementById('error-message').innerText = 'Error loading text file: ' + error;
                new bootstrap.Modal(document.getElementById('errorModal')).show();
            });
    
