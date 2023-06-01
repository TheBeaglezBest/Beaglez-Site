document.addEventListener("DOMContentLoaded", function() {
  const sections = document.getElementsByClassName("section");
  const navLinks = document.getElementsByTagName("a");

  function showSection(sectionId) {
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
  }

  function setActiveLink(link) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    link.classList.add("active");
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").slice(1);
      showSection(sectionId);
      setActiveLink(this);
    });
  }

  showSection("home");
});
