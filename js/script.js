function validateForm() {
  let x = document.forms["contactForm"]["name"].value;
  let y = document.forms["contactForm"]["email"].value;
  let z = document.forms["contactForm"]["tel"].value;
  let w = document.forms["contactForm"]["description"].value;
  if (x == "" || y == "" || z == "" || w == "") {
    alert("Required field must be filled out");
    return false;
  }
  else{
    document.getElementById("submitButton").setAttribute("data-toggle","modal");
    document.getElementById("submitButton").setAttribute("data-target","#myModal");
    return true;
  }


}