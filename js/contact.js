document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('contact-email');
    const telInput = document.querySelector('input[type="tel"]');
    const messageInput = document.querySelector('textarea');
    const submitButton = document.querySelector('input[type="submit"]');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      if (validateForm()) {
        alert('Thank you for contacting us!');
        form.reset();
      }
    });
  
    function validateForm() {
      let valid = true;
  
      if (!validateEmail(emailInput.value)) {
        valid = false;
        emailInput.style.borderColor = 'red';
      } else {
        emailInput.style.borderColor = '';
      }
  
      if (!validateTel(telInput.value)) {
        valid = false;
        telInput.style.borderColor = 'red';
      } else {
        telInput.style.borderColor = '';
      }
  
      if (messageInput.value.length > 240 || messageInput.value.trim() === '') {
        valid = false;
        messageInput.style.borderColor = 'red';
      } else {
        messageInput.style.borderColor = '';
      }
  
      return valid;
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    function validateTel(tel) {
      const re = /^\d{3}-\d{3}-\d{4}$/;
      return re.test(String(tel));
    }
  });
  