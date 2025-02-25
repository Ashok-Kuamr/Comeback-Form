function checkComeback() {
    let name = document.getElementById("name").value;
    let comeback = document.getElementById("comeback").value;
    if (name.trim() === "" || comeback.trim() === "") {
        alert("Please fill all fields!");
        return;
    }
    document.getElementById("step1").style.display = "none";
    document.getElementById("puzzleChallenge").style.display = "block";
}

function checkPuzzle() {
    let answer = document.getElementById("puzzleAnswer").value;
    if (answer.trim() === "32") {
        document.getElementById("puzzleChallenge").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("comebackDate").innerText = generateRandomDate();
        document.getElementById("comebackIdea").innerText = generateFunnyIdea();
    } else {
        alert("Wrong answer! Try again.");
    }
}

function generateOfferLetter() {
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("offerLetter").style.display = "block";
    document.getElementById("finalComebackDate").innerText = generateRandomDate();
}

function showFeedbackForm() {
    document.getElementById("offerLetter").style.display = "none";
    document.getElementById("feedback").style.display = "block";
}

function submitFeedback() {
    let response = document.getElementById("feedbackResponse").value;
    if (response === "positive") {
        alert("Thank you for your feedback! 🎉");
    } else {
        alert("Your comeback is not possible 😂");
        window.location.href = "index.html";
    }
}

function generateRandomDate() {
    let randomDays = Math.floor(Math.random() * 30) + 1;
    let futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + randomDays);
    return futureDate.toDateString();
}

function generateFunnyIdea() {
    const ideas = [
        "Arrive with a superhero cape! 🦸",
        "Make an entrance with background music 🎶",
        "Show up with a dramatic slow clap 👏",
        "Hand out 'I’m Back' stickers 😎",
        "Bring a confetti cannon! 🎉"
    ];
    return ideas[Math.floor(Math.random() * ideas.length)];
}
