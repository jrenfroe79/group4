document.getElementById('add-course-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const courseName = document.getElementById('course-name').value;
  
    try {
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: courseName })
      });
  
      if (response.ok) {
        alert('Course added successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error adding course:', error);
      alert('An error occurred while adding the course.');
    }
  });
  