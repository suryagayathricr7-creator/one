const noButton = document.getElementById('no');

noButton.addEventListener("click", doSomething);

function doSomething() {
    alert("You are prohibited from selecting NO 😈");
}


const yesButton = document.getElementById('yes');

yesButton.addEventListener("mouseover", showMessage);

function showMessage() {
    document.getElementById("message").innerHTML =
        "Yayyy! You clicked YES! 😍❤️";
}
const text = document.getElementById("clickHere");

text.addEventListener("click", function() {
    window.open("page2.html", "popup", "width=800,height=600");
});