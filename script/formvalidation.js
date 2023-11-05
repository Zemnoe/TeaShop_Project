try {
  function validateregister(){
    let firstname = document.forms.register.firstname.value;
    let middlename = document.forms.register.middlename.value;
    let lastname = document.forms.register.lastname.value;
    let email = document.forms.register.email.value;
      


 // first name validation
  if (! firstname) {
    document.getElementById('firstnameErr').innerHTML = "First name is required";
    document.forms.register.firstname.focus();
    return false;
  } else {
 document.getElementById('firstnameErr').innerHTML = "";
}
      

  if (! lastname) {
    document.getElementById('lastnameErr').innerHTML = "last name is required";
    document.forms.register.lastname.focus;
    return false;
    } else {
    document.getElementById('lastnameErr').innerHTML = "";
  }
}