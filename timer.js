function startTimer() {
    console.log('Starting session timer');
  
    // Prevent duplicate timers
    if (document.getElementById('sessionTimer')) {
      console.log('Timer already exists, not creating a new one');
      return;
    }
  
    // Initialize session time
    let sessionSeconds = 0;
  
    // Create and style timer display
    const timerElement = document.createElement('div');
    timerElement.id = "sessionTimer";
    timerElement.style.marginTop = "20px";
    timerElement.style.color = "var(--primary-color)";
    timerElement.style.fontSize = "18px";
    timerElement.style.textAlign = "center";
    document.body.appendChild(timerElement);
  
    // Display initial time
    updateTimerDisplay(timerElement, sessionSeconds);
  
    // Start interval
    let timerInterval = setInterval(() => {
      sessionSeconds++;
      updateTimerDisplay(timerElement, sessionSeconds);
      sessionStorage.setItem('timeOnPage', sessionSeconds.toString());
  
      // After 5 minutes, show message
      if (sessionSeconds === 300) {
        showLongSessionMessage();
      }
    }, 1000);
  
    // Stop timer when page unloads
    window.addEventListener('beforeunload', () => {
      console.log('Page unloading, stopping timer');
      clearInterval(timerInterval);
    });
  }
  
  // Format and display time
  function updateTimerDisplay(element, totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    let timeText = "Time exploring moths: ";
    if (hours > 0) timeText += `${hours}h `;
    if (hours > 0 || minutes > 0) timeText += `${minutes}m `;
    timeText += `${seconds}s`;
  
    element.textContent = timeText;
  }
  
  // Show message after long session
  function showLongSessionMessage() {
    console.log('Showing long session message');
  
    if (document.getElementById('longSessionMessage')) {
      console.log('Long session message already exists');
      return;
    }
  
    const messageDiv = document.createElement('div');
    messageDiv.id = "longSessionMessage";
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '20px 0';
    messageDiv.style.backgroundColor = 'var(--card-bg)';
    messageDiv.style.color = 'var(--text)';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.boxShadow = '0 2px 8px var(--card-shadow)';
    messageDiv.innerHTML = `
      <p>You've been looking at moths for 5 minutes! PICK A MOTH ALREADY!</p>
      <button id="dismissMessage" style="
        margin-top: 10px;
        padding: 5px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: var(--btn-bg);
        color: var(--btn-text);
      ">
        Dismiss
      </button>
    `;
  
    const timerElement = document.getElementById('sessionTimer');
    if (timerElement) {
      document.body.insertBefore(messageDiv, timerElement);
    } else {
      document.body.appendChild(messageDiv);
    }
  
    const dismissButton = document.getElementById('dismissMessage');
    if (dismissButton) {
      dismissButton.addEventListener('click', () => {
        const message = document.getElementById('longSessionMessage');
        if (message) message.remove();
      });
    }
  }
  
  
    