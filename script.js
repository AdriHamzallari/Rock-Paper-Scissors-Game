const playerScoreEl = document.getElementById("player-score");
    const computerScoreEl = document.getElementById("computer-score");
    const drawScoreEl = document.getElementById("draw-score");
    const buttons = document.querySelectorAll(".choice-btn");
    const playerChoiceEl = document.getElementById("player-choice");
    const computerChoiceEl = document.getElementById("computer-choice");
    const resultText = document.getElementById("result-text");
    const resultMessage = document.getElementById("result-message");
    const resetBtn = document.getElementById("reset-btn");
    let totalScorePlayer = 0;
    let totalScoreComputer = 0;
    let totalDraws = 0;
    buttons.forEach(function(button) {
      button.addEventListener("click", () => {
        const player = button.getAttribute("data-choice");
        calculateWinner(player);
      });
    });
    function calculateWinner(player) {
      const choices = ['rock', 'paper', 'scissors'];
      const computer = choices[Math.floor(Math.random() * choices.length)];
      playerChoiceEl.textContent = getEmoji(player);
      computerChoiceEl.textContent = getEmoji(computer);
      resultText.classList.remove('win', 'lose', 'draw');


      if (player === computer) {

        totalDraws += 1;
        drawScoreEl.textContent = totalDraws;
        resultText.textContent = "It's a Draw!";
        resultText.classList.add('draw');
        resultMessage.textContent = "Same choice!";
      } 
      else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {

        totalScorePlayer += 1;
        playerScoreEl.textContent = totalScorePlayer;
        resultText.textContent = "You Win This Round!";
        resultText.classList.add('win');
        resultMessage.textContent = `${getEmoji(player)} beats ${getEmoji(computer)}`;
      } 
      else {

        totalScoreComputer += 1;
        computerScoreEl.textContent = totalScoreComputer;
        resultText.textContent = "Computer Wins This Round!";
        resultText.classList.add('lose');
        resultMessage.textContent = `${getEmoji(computer)} beats ${getEmoji(player)}`;
      }


      if (totalScorePlayer === 3) {
        resultText.textContent = "🎉 YOU WON THE GAME!";
        resultMessage.textContent = "First to 3 wins! You're the champion!";
        resultText.classList.remove('win', 'lose', 'draw');
        disableButtons();
        resetBtn.classList.remove("hidden");
      } 
      else if (totalScoreComputer === 3) {
        resultText.textContent = "😢 COMPUTER WON THE GAME!";
        resultMessage.textContent = "First to 3 wins! Better luck next time!";
        resultText.classList.remove('win', 'lose', 'draw');
        disableButtons();
        resetBtn.classList.remove("hidden");
      }
    }


    function disableButtons() {
      buttons.forEach(button => {
        button.disabled = true;
      });
    }


    function enableButtons() {
      buttons.forEach(button => {
        button.disabled = false;
      });
    }
    function getEmoji(choice) {
      if (choice === 'rock') return '✊';
      if (choice === 'paper') return '✋';
      if (choice === 'scissors') return '✌️';
      return '❓';
    }
    resetBtn.addEventListener("click", function() {
      totalScorePlayer = 0;
      totalScoreComputer = 0;
      totalDraws = 0;
      playerScoreEl.textContent = "0";
      computerScoreEl.textContent = "0";
      drawScoreEl.textContent = "0";
      enableButtons();
      resetBtn.classList.add("hidden");
      playerChoiceEl.textContent = "❓";
      computerChoiceEl.textContent = "❓";
      resultText.textContent = "Make your choice!";
      resultText.classList.remove('win', 'lose', 'draw');
      resultMessage.textContent = "Pick rock, paper, or scissors to start";
    });
 