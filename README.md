# ✊✋✌️ Rock Paper Scissors

A clean, interactive **Rock Paper Scissors** game built with vanilla JavaScript. Play against the computer in a best-of-3-wins match with a live scoreboard and color-coded results.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 🚀 Live Demo

> 🔗 [Play Now →] (https://adrihamzallari.github.io/Rock-Paper-Scissors-Game/)

---

## 🎮 How to Play

1. Click **✊ Rock**, **✋ Paper**, or **✌️ Scissors**
2. The computer picks a random choice
3. The result is shown instantly — win, lose, or draw
4. **First to 3 wins** takes the game
5. Click **Play Again** to reset and go again

---

## ✨ Features

- 🤖 **vs Computer** — randomized computer choice each round
- 🏆 **Best of 3** — first to 3 wins ends the game
- 📊 **Live Scoreboard** — tracks Player wins, Computer wins, and Draws
- 🎨 **Color-coded results** — green for win, red for lose, yellow for draw
- 🔒 **Button locking** — choices are disabled when the game ends
- 🔄 **Play Again** — full score reset with one click
- 📱 **Responsive** — works on mobile and desktop

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Game structure and layout |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6) | Game logic, DOM manipulation, event handling |

No libraries. No frameworks. Zero dependencies.

---

## 📂 Project Structure

```
Rock-Paper-Scissors-Game/
├── index.html    # Game layout, scoreboard, buttons, styles
└── script.js     # All game logic (winner calculation, score tracking, reset)
```

---

## 🧠 How It Works

```
Player clicks a button
  → button's data-choice attribute is read
  → computer picks randomly from ['rock', 'paper', 'scissors']
  → calculateWinner() compares choices
  → score updates + result message shows
  → if either side hits 3 wins → game over + Play Again appears
```

Key functions in `script.js`:

- `calculateWinner(player)` — compares player vs computer and updates scores
- `getEmoji(choice)` — maps choice string to emoji for display
- `disableButtons()` / `enableButtons()` — locks/unlocks choices at game end
- Reset listener — wipes all scores and UI back to the start state

---

## 🏃 Getting Started

No installation needed.

```bash
# Clone the repo
git clone https://github.com/AdriHamzallari/Rock-Paper-Scissors-Game.git

# Open in your browser
cd Rock-Paper-Scissors-Game
open index.html
```

Or [download the ZIP](https://github.com/AdriHamzallari/Rock-Paper-Scissors-Game/archive/refs/heads/main.zip) and open `index.html` directly.

---

## 💡 What I Learned

- Handling **click events** with `querySelectorAll` and `forEach`
- Using **`data-*` attributes** to pass values from HTML to JS
- Writing **conditional game logic** with clean if/else chains
- Dynamically toggling **CSS classes** to change result colors
- Managing **game state** with variables and a full reset function

---

## 🗺️ Possible Improvements

- [ ] Animate the emoji choices when revealed
- [ ] Add best-of-5 or custom match length option
- [ ] Save win/loss history with `localStorage`
- [ ] Add sound effects on win/lose
- [ ] Multiplayer mode

---

## 👤 Author

**Adri Hamzallari**
- GitHub: [@AdriHamzallari](https://github.com/AdriHamzallari)
- LinkedIn: [your-linkedin-url](https://linkedin.com)

---

> *Part of my frontend development portfolio — built with pure HTML, CSS, and JavaScript.*
