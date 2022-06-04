num1 = Math.floor(Math.random() * (11 - 1)) + 1;
num2 = Math.floor(Math.random() * (11 - 1)) + 1;

function newCard() {
    num1 = Math.floor(Math.random() * (11 - 1)) + 1;
    num2 = Math.floor(Math.random() * (11 - 1)) + 1;
    startGame()

}

function startGame() {
    document.getElementById("card1").textContent = "Card1:" + num1;
    document.getElementById("card2").textContent = "Card2:" + num2;
    res = num1 + num2
    document.getElementById("sum").textContent = "Sum:" + res;

    if (res < 21) {
        document.getElementById("status").innerText = "Status :do you want to draw new cards"
    }
    else if (res == 21) {
        document.getElementById("status").innerText = "Status :you won the black jack"
    }
    else {
        document.getElementById("status").innerText = "Status :you are out"

    }
}
