let button = document.getElementById("btn1");
button.addEventListener("click", function () {
    let message = document.getElementById("hiddenMessage");
    if (message.style.display === "none") {
        message.style.display = "block";
    } else {
        message.style.display= "none";
    }
});