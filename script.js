document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const jobs = document.querySelectorAll('.job');

    jobs.forEach(function(job) {
        const title = job.querySelector('h2').textContent.toLowerCase();
        const company = job.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(filter) || company.includes(filter)) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
});

// Post a new job functionality
document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('job-title').value;
    const company = document.getElementById('company-name').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    
    const newJob = document.createElement('div');
    newJob.classList.add('job');
    newJob.innerHTML = `
        <h2>${title}</h2>
        <p>Company: ${company}</p>
        <p>Location: ${location}</p>
        <p>Description: ${description}</p>
    `;
    
    document.getElementById('job-listings').appendChild(newJob);
    
    // Clear the form
    document.getElementById('job-form').reset();
});