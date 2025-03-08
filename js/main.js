function fillHeader(){
  const headerElement = document.querySelector('header');
  if (headerElement!=null) {
    headerElement.innerHTML= `  <div class="state-logo">
        <img
          id="img-logo" 
          src="./logo.png"
          alt="state seal"
          width="150px"
          height="auto"
        />
        <span id="lbl_appname">AIQuilibrium</span>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav">
            <li  class="nav-item">
            <a id="nav-index" class="nav-link" href="./index.html">Home</a></li>
            <a id="nav-index" class="nav-link" href="./index.html">Developer Tools</a></li>

            
            <li  class="nav-item">
            <a id="nav-about" class="nav-link" href="./about.html">About</a></li>
            <li class="nav-item"><a id="nav-contact" class="nav-link" href="./contact.html">Contact</a></li>
          </ul>
        </div>       
      </nav>`;
  } else {
    console.error("No header element found in the document.")
  }
}

function fillFooter(){
    const footer = document.getElementById("footer");

    if (footer!=null){
      footer.classList.add("text-center");
      footer.classList.add("mt-4");
      footer.innerHTML = `<div class="footer-links">
      <!--
      <a href="#"><i class="fa fa-facebook-official" style="font-size:36px"></i></a>
      <a href="#"><i class="fa fa-instagram" style="font-size:36px"></i></a>
      <a href="#"><i class="fa fa-twitter-square" style="font-size:36px"></i></a>
      </div>
      -->
      <p>Copyright © 2025 Theo Francis. All rights reserved.</p>`; 
    }
    
}

/**This function will highlight the current nav menu */
function setActivePage(){
  let full_url = window.location.href;
  let pageName = full_url.substring(full_url.lastIndexOf('/')+1); 
  //remove extension
  const nav_id = 'nav-' + pageName.split('.')[0];
  const navElement = document.getElementById(nav_id);

  if (navElement != null) {
   navElement.classList.add('active');
  }
  
}

document.addEventListener('DOMContentLoaded', () => {        
    //fillHeader();
    fillFooter();
    //setActivePage();
  });