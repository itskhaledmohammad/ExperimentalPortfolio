window.addEventListener("load", () => {
  var date = document.lastModified;
  document.getElementById("info").innerHTML =
    "Current Path: " +
    window.location.pathname +
    "<br>" +
    "Last Modified Date:" +
    date;
});
