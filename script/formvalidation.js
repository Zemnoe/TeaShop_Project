function formValidation() {
  var firstName = document.getElementById('firstname').value;
  var middleName = document.getElementById('middlename').value;
  var lastName = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var confirmEmail = document.getElementById('cemail').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('cpassword').value;
  var telephone = document.getElementById('tel').value;

  // Reset error messages
  document.getElementById('firstnameErr').innerHTML = '';
  document.getElementById('lastnameErr').innerHTML = '';

  // Validate First Name
  if (firstName.trim() === '') {
      document.getElementById('firstnameErr').innerHTML = 'First name is required';
      return false;
  }

  // Validate Last Name
  if (lastName.trim() === '') {
      document.getElementById('lastnameErr').innerHTML = 'Last name is required';
      return false;
  }

  // Validate Email
  if (email.trim() === '') {
      alert('Email is required');
      return false;
  } else if (!isValidEmail(email)) {
      alert('Invalid email address');
      return false;
  }

  // Validate Confirm Email
  if (confirmEmail.trim() === '') {
      alert('Confirm email is required');
      return false;
  } else if (email !== confirmEmail) {
      alert('Emails do not match');
      return false;
  }

  // Validate Password
  if (password.trim() === '') {
      alert('Password is required');
      return false;
  }

  // Validate Confirm Password
  if (confirmPassword.trim() === '') {
      alert('Confirm password is required');
      return false;
  } else if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
  }

  // Validate Telephone
  if (telephone.trim() === '') {
      alert('Telephone is required');
      return false;
  }

  // All validations passed
  return true;
}

function isValidEmail(email) {
  // Basic email validation,
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
