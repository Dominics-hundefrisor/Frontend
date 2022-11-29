//When the body of an html page s loaded, it is instructed to activate 'start()'
//The object with the id 'navBarNav', has its content replaced with '' stuff
function start() {
    document.querySelector("#navbarNav").innerHTML = 
    '<a class="navbar-brand" href="index.html">\
            <img src="https://svgsilh.com/svg/1484728.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">\
          </a>\
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLinks" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
          </button>\
          <div class="collapse navbar-collapse" id="navbarLinks">\
            <ul class="navbar-nav" style="font-style: italic; font-family: serif;">\
              <li class="nav-item">\
                <a class="nav-link active" aria-current="page" href="index.html">Forside</a>\
              </li>\
              <li class="nav-item">\
                <a class="nav-link active" href="priser.html">Priser</a>\
              </li>\
              <li class="nav-item">\
                <a class="nav-link active" href="galleri.html">Galleri</a>\
              </li>\
              <li class="nav-item">\
                <a class="nav-link active" href="Loginpage.html">Personalelogin</a>\
              </li>\
            </ul>\
          </div>'
}