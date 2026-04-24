const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-220px";
}

const form = document.querySelector("form");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.innerHTML = "Message sent successfully. This is a demo form.";
    form.reset();

    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
  });
}