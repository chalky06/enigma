const grid = document.getElementById('grid');
const feedback = document.getElementById('feedback');
const submitBtn = document.getElementById('submitBtn');

// Example correct pattern (tiles indexed 0-99)
const correctPattern = [0,1,2,10,11,12,20,21,22]; // 3x3 square top-left for demo

// Generate 10x10 tiles
for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = i;

    tile.addEventListener('click', () => {
        tile.classList.toggle('active');
    });

    grid.appendChild(tile);
}

submitBtn.addEventListener('click', () => {
    const tiles = document.querySelectorAll('.tile');
    let success = true;

    tiles.forEach(tile => {
        const idx = parseInt(tile.dataset.index);
        const isActive = tile.classList.contains('active');
        const shouldBeActive = correctPattern.includes(idx);

        if (isActive !== shouldBeActive) {
            success = false;
        }
    });

    if (success) {
        feedback.textContent = "Correct! Level unlocked.";
        feedback.style.color = "#188d45"; // green
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "#de1c42"; // red
    }
});
