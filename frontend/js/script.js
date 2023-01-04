const generateQR = () => {
  var str = document.getElementById("text").value;
  if (str == "" || !str) {
    alert("Please fill in the required input!");
    return;
  }
  document.getElementById("loader").style.display = "";
  fetch(`http://localhost:6969/api/generate?str=${str}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
        return;
      }
      document.getElementById("loader").style.display = "none";
      document.getElementById(
        "qrImage"
      ).src = `data:image/svg+xml;base64,${btoa(data.qrCode)}`;
      document.getElementById("qrContent").style.display = "";
    });
};
