document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted successfully! Our team will contact you.");
});

function chat() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let response = "";

  if (input.includes("help")) {
    response = "We will connect you with nearby healthcare support.";
  } 
  else if (input.includes("volunteer")) {
    response = "Please register as a volunteer using the form.";
  } 
  else if (input.includes("doctor")) {
    response = "Doctors will be assigned based on your request.";
  } 
  else if (input.includes("emergency")) {
    response = "Please contact emergency services immediately.";
  } 
  else {
    response = "Sorry, I didn't understand. Please try asking differently.";
  }

  document.getElementById("botResponse").innerText = response;
}