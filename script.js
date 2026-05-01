const cards = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31],
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31],
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];

let currentCard = 0;
let totalScore = 0;

function showCard() {
    const grid = document.getElementById('number-grid');
    grid.innerHTML = '';
    cards[currentCard].forEach(num => {
        const div = document.createElement('div');
        div.textContent = num;
        grid.appendChild(div);
    });
}

function handleAnswer(exists) {
    if (exists) {
        // Angka pertama di setiap card adalah nilai binernya (1, 2, 4, 8, 16)
        totalScore += cards[currentCard][0];
    }
    
    currentCard++;
    
    if (currentCard < cards.length) {
        showCard();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('game-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('final-number').textContent = totalScore;
}

function resetGame() {
    currentCard = 0;
    totalScore = 0;
    document.getElementById('game-box').classList.remove('hidden');
    document.getElementById('result-box').classList.add('hidden');
    showCard();
}


// Jalankan game pertama kali
showCard();