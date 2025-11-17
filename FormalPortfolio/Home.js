window.addEventListener("load", () => {
  // Signature stays for 2.5 seconds
  setTimeout(() => {
    // Fade out the intro
    document.getElementById("intro-screen").style.opacity = 0;

    // AFTER intro fade-out finishes (1.5s), hide it + fade in website
    setTimeout(() => {
      document.getElementById("intro-screen").style.display = "none";
      document.getElementById("main-content").style.opacity = 1;
    }, 1500);  // matches CSS fade-out duration

  }, 2500); // how long the signature stays visible
});