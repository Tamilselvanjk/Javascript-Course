var guess = document.getElementById("guessnumber")
var result = document.getElementById("result")
var score = document.getElementById("score")
var randomnumber = Math.floor(Math.random() * 10) + 1
var totalscore = 10
function Check() {
    var enternumber = guess.value
    if (randomnumber == enternumber) {
        result.textContent = "Right"
        alert("you Booyha...")
    }

    else {
        totalscore = totalscore - 1
        score.textContent = "score:" + totalscore
        result.textContent = "wrong"
    }

}