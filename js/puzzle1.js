document.addEventListener("DOMContentLoaded", function () {

    const grid = document.getElementById("grid");
    const submitBtn = document.getElementById("submitBtn");
    const feedback = document.getElementById("feedback");

    // Example correct pattern (diagonal line)
    const correctPattern = [];
    for (let i = 0; i < 10; i++) {
        correctPattern.push(i * 10 + i);
    }

    // Create 100 tiles
    for (let i = 0; i < 100; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.index = i;

        tile.addEventListener("click", function () {
            tile.classList.toggle("active");
        });

        grid.appendChild(tile);
    }

    submitBtn.addEventListener("click", function () {

        const tiles = document.querySelectorAll(".tile");
        let correct = true;

        tiles.forEach(tile => {
            const index = parseInt(tile.dataset.index);
            const isActive = tile.classList.contains("active");
            const shouldBeActive = correctPattern.includes(index);

            if (isActive !== shouldBeActive) {
                correct = false;
            }
        });

        if (correct) {
            feedback.textContent = "Correct! Level unlocked.";
            feedback.style.color = "#188d45";
        } else {
            feedback.textContent = "Incorrect. Try again.";
            feedback.style.color = "#de1c42";
        }
    });

});
