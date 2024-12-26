const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const meili = document.querySelector(".posta"); 
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
    if (!emailPattern.test(meili.value)) {
        meili.style.borderColor = "#FF6155";
        meili.style.color = "#FF6155";
        meili.style.backgroundColor = "rgba(255, 97, 85, 0.15)";
    } else {
        window.location.href = "./Desktop - Success.png";
    }
});
