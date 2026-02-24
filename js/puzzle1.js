const gridContainer = document.getElementById("grid");
const feedback = document.getElementById("feedback");

// Define the correct 24x24 pattern
// 1 = teal tile, 0 = empty
const pattern = [
    /* example placeholder for demonstration, replace with actual 24x24 CryptoPunk abstraction */
    "000000000000111100000000",
    "000000000001111110000000",
    "000000000111111111000000",
    "000000001111001111100000",
    "000000011111111111110000",
    "000000111011011101111000",
    "000000111111111111111000",
    "000000011111001111110000",
    "000000001100000011000000",
    "000000001100000011000000",
    "000000001100000011000000",
    "000000001100000011000000",
    "000000001100000011000000",
    "000000001111111111000000",
    "000000001111111111000000",
    "000000011111111111100000",
    "000000011111111111100000",
    "000000011111111111100000",
    "000000001111111111000000",
    "000000001111111111000000",
    "000000000111111110000000",
    "000000000011111100000000",
    "000000000001111000000000",
    "000000000000110000000000",
];

// Build the grid
const tiles = [];
for (let row = 0; row < 24; row++) {
    for (let col = 0; col < 24; col++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.row = row;
        tile.dataset.col = col;

        tile.addEventListener("click", () => {
            tile.classList.toggle("active");
        });

        gridContainer.appendChild(tile);
        tiles.push(tile);
    }
}

// Convert pattern string to array of booleans
const patternArray = pattern.map(row => row.split("").map(Number));

// Check the user's drawing with tolerance
document.getElementById("submitBtn").addEventListener("click", () => {
    let mistakes = 0;

    for (let row = 0; row < 24; row++) {
        for (let col = 0; col < 24; col++) {
            const index = row * 24 + col;
            const userActive = tiles[index].classList.contains("active") ? 1 : 0;
            const correct = patternArray[row][col];
            if (userActive !== correct) mistakes++;
        }
    }

    if (mistakes <= 2) {
        feedback.textContent = "Correct! Proceed to the next level.";
        feedback.style.color = "#85b09a";
    } else {
        feedback.textContent = `Incorrect. Try again! Mistakes: ${mistakes}`;
        feedback.style.color = "#de1c42";
    }
});
