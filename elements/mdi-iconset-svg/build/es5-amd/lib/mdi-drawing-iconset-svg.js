var $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");
$_documentContainer.innerHTML =
  '<iron-iconset-svg name="mdi-drawing" size="24">\n  <svg>\n\n    <g id="pencil">\n      <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path>\n    </g>\n\n  </svg>\n</iron-iconset-svg>';
document.head.appendChild($_documentContainer);