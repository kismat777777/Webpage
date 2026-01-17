// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');
  
  if (name && email && message) {
    // This will open the default email client with prefilled email
    window.location.href = `mailto:educationgurunp@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
    formMessage.textContent = "Your message has been prepared in your email client!";
    formMessage.style.color = "green";
    
    // Reset form
    document.getElementById('contactForm').reset();
  } else {
    formMessage.textContent = "Please fill all the fields!";
    formMessage.style.color = "red";
  }
});