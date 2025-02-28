document.addEventListener("DOMContentLoaded", function () {
    const challenges = [
        "Solve 3 math problems within 10 minutes!",
        "Summarize a complex topic in 5 bullet points.",
        "Find a studdy buddy and quiz each other on today's topic.",
        "Write down 3 key takeaways from your last study session",
        "Create a 1-minute video explaining a concept.",
        "Try a Pomodoro study session: 25 minutes study, 5 minutes break."
    ];

    const challengeText = document.getElementById("challenge-text");
    const newchallengeBtn = document.getElementById("new-challenge");

    function getRandomChallenge() {
        let randomIndex = Math.floor(Math.random() * challenges.length);
        challengeText.textContent = challenges[randomIndex];
    }

    newchallengeBtn.addEventListener("click", getRandomChallenge);

    getRandomChallenge();

});