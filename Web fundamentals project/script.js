const newsletter = document.getElementById('newsletter')
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const help = document.getElementById('help')

form.addEventListener('submit', (e) => {
    let messages = []

    if (newsletter.value === '' || name.value == null) {
        messages.push('Email is required.')
    }

    if (cvc.length != 3) {
        messages.push('CVC must only contain 3 digits.')
    }

    if (messages.length > 0) {
        e.preventDefault()
    }
}) 

function ValidateEmail(input) {
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validEmail)) {
      alert("You have successfully joined our newsletter!");
      document.form1.text1.focus();
      return true;
    } else {
      alert("Invalid email address!");
      document.form1.text1.focus();
      return false;
    }
  }

  document.getElementById("check").onclick = function() {
    let allAreFilled = true;
    document.getElementById("myForm").querySelectorAll("[required]").forEach(function(i) {
      if (!allAreFilled) return;
      if (i.type === "radio") {
        let radioValueCheck = false;
  document.getElementById("myForm").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
          if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
        return;
      }
      if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled) {
      alert('Fill all the fields');
    } else {
        alert ('Successful! Thank you for your submission!');
    }
  };
