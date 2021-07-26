function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;

    // increase the time elapsed
    timeElapsed++;

    // update the timer text
    timer_text.textContent = timeLeft + "s";
  }
  else {
    // finish the game
    finishGame();
  }
}

function updateQuote() {
  quote_text.textContent = null;
  current_quote = "";

  // put in 10 random words from the dictionary
  for (let i = 0; i < 9; i++) {
    current_quote = current_quote.concat(dictionary[Math.floor(Math.random() * dictionary.length)] + " ");
  }
  current_quote = current_quote.concat(dictionary[Math.floor(Math.random() * dictionary.length)]);

  // separate each character and make an element
  // out of each of them to individually style them
  current_quote.split('').forEach(char => {
    const charSpan = document.createElement('span')
    charSpan.innerText = char
    quote_text.appendChild(charSpan)
  });
}
