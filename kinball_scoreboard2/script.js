
let scoreHistory = [];

function teamLost(team) {
    // 現在の得点を保存
    saveCurrentScores();
    
    // 失点したチーム以外のチームに得点を加算
    let teams = ['pink', 'grey', 'black'];
    teams.forEach(t => {
        if (t !== team) {
            incrementScore(t);
        }
    });
}

function incrementScore(team) {
    let scoreElement = document.getElementById(`score-${team}`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
}

function saveCurrentScores() {
    let scores = {
        pink: parseInt(document.getElementById('score-pink').textContent),
        grey: parseInt(document.getElementById('score-grey').textContent),
        black: parseInt(document.getElementById('score-black').textContent)
    };
    scoreHistory.push(scores);
}

function undoLastAction() {
    if (scoreHistory.length > 0) {
        let lastScores = scoreHistory.pop();
        document.getElementById('score-pink').textContent = lastScores.pink;
        document.getElementById('score-grey').textContent = lastScores.grey;
        document.getElementById('score-black').textContent = lastScores.black;
    } else {
        alert("No actions to undo.");
    }
}

function resetScores() {
    saveCurrentScores();  // Save current scores before resetting
    document.getElementById('score-pink').textContent = '0';
    document.getElementById('score-grey').textContent = '0';
    document.getElementById('score-black').textContent = '0';
}

function switchToFrench() {
    document.getElementById('label-pink').textContent = 'Bleu';
    document.getElementById('label-grey').textContent = 'Gris';
    document.getElementById('label-black').textContent = 'Noir';
    document.getElementById('team-pink').style.backgroundColor = 'blue';
    document.getElementById('team-pink').style.color = 'white';
}

function switchToEnglish() {
    document.getElementById('label-pink').textContent = 'Pink';
    document.getElementById('label-grey').textContent = 'Grey';
    document.getElementById('label-black').textContent = 'Black';
    document.getElementById('team-pink').style.backgroundColor = 'pink';
    document.getElementById('team-pink').style.color = 'black';
}
