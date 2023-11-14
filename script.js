
var tablinksa = document.getElementsByClassName("tablinks");
var tabcontentsa = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
  for (tablink of tablinksa) {
    tablink.classList.remove("activelink");
  }
  for (tabcontent of tabcontentsa) {
    tabcontent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


<form name="submit-to-google-sheet"></form>


const scriptURL =
  "https://script.google.com/macros/s/AKfycbzfjj19vIorApAzKrNdJubXKfi5Yldm8kgq8-nC-gbIUHH6FRRzX0oeYm5wyqmDk3Il/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


// Add click event listeners to all anchor tags with href attributes
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Scroll to the section associated with the clicked link
function scrollToSection(event) {
  event.preventDefault(); // Prevent default link behavior
  const targetId = event.currentTarget.getAttribute("href").substring(1); // Get the target section's ID
  const targetSection = document.getElementById(targetId); // Get the target section element
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the target section
  }
}