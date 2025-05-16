# Moth Explorer

**Moth Explorer** is a web application built as a capstone project to showcase search functionality, dynamic content rendering, theming, and persistant session tracking using HTML, CSS, and JavaScript.

---

## Features

- **Dynamic Search**: Search moths by name in real time.
- **Search History**: View and manage previous search queries.
- **Dark/Light Theme Toggle**: Switch between light and dark mode.
- **Live Session Timer**: Track how long user stays on the page.    
- **Responsive Layout**: Clean and user-friendly interface. 

---

## File Structure

**Index.html**
**styles.css**
**MothData.js**
**render.js**
**theme.js**
**greet.js**
**timer.js**

---


---

## Descriptions of JavaScript Files


### `MothData.js`

- Contains an array of moth objects with:
  - `name`
  - `image`
  - `region`
  - `link`

This is the data source for rendering and search functionality.
 ```
 {
      name: "White Ermine",
      scientificName: "Spilosoma lubricipeda",
      region: "Europe and Asia",
      image: "image/500px-Spilosoma_lubricipeda_01.jpg",
      wiki: "https://en.wikipedia.org/wiki/Spilosoma_lubricipeda"
    },
 ```
### `render.js`

- Handles displaying the moth cards dynamically based on the search.
- Validates each moth object and renders its details in a styled card.
- Renders a "No results found" message if no matches exist.
- Injects elements into `#mothContainer`.
  ```
  function renderMoths(moths) {
    console.log('renderMoths called with', moths.length, 'moths');
  
    const resultsContainer = document.getElementById('mothContainer');
  
    // Check if results container exists
    if (!resultsContainer) {
      console.error('Results container not found');
      return;
    }
  
    // Clear the container
    resultsContainer.innerHTML = '';
  
    // If no moths found, show a message
    if (moths.length === 0) {
      console.log('No moths found, showing empty message');
      resultsContainer.innerHTML = '<p id="noResults">No moths found</p>';
      return;
    }
  
    // Collect all moth cards
    const mothElements = [];
  
    moths.forEach(moth => {
      // Validate moth object
      if (!moth || typeof moth.name !== 'string') {
        console.warn('Invalid moth object:', moth);
        return;
      }
  
      const mothDiv = document.createElement('div');
      mothDiv.className = 'moth-card';
      mothDiv.innerHTML = `
        <div class="moth-header">
          <img class="moth-img" src="${moth.image || ''}" alt="Image of ${moth.name}" />
          <h3>${moth.name}</h3>
          <p><em>${moth.scientificName}</em></p>
          <p><strong>Region:</strong> ${moth.region || 'Unknown'}</p>
          <a href="${moth.wiki || '#'}" target="_blank">
            <button class="learn-more-btn">Learn More</button>
          </a>
        </div>
      `;
  
      mothElements.push(mothDiv);
    });
  
    // Append all moth cards at once
    mothElements.forEach(element => {
      resultsContainer.appendChild(element);
    });
  
    console.log(`Successfully rendered ${moths.length} moths`);
  }
  
  // Example usage:
  // renderMoths(mothData); // Call this after loading your mothData
  
  ```
### `theme.js`

- Toggles between light and dark themes using `classList`.
- Saves the selected theme to `localStorage` to persist across reloads.

```
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

themeToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D')
    {
        themeToggle.click();
    }
})
```
### `greet.js`

- Displays a dynamic greeting in the header based on the time of day.
- Example greetings: "Good morning!", "Good afternoon!"
```
//set cookies that expire in 7 days
function greetUser(){
    // Check if visitedBefore cookie exists
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if (hasVisitedBefore) {
        alert(" Weclome back to Moth Explorer!");
    } else {
        // sets cookie with 7 days exoury
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `visitedBefore=true;
        expires=${expiryDate.toUTCString()}; path=/`;
        alert("Welcome to Moth Explorer!");
    }
}
greetUser()
```
### `timer.js`

- Starts a session timer when the page loads.
- Displays elapsed time in `hh:mm:ss` format.
- After 5 minutes, shows a message thanking the user.
- Stores session duration in `sessionStorage`.
  ```
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
  
  
    
  ```
---

## How to Use

1. Open `index.html` in any browser.
2. Use the search bar to filter moths by name.
3. View search history or clear it.
4. Toggle between dark/light themes.
5. Watch your session timer update in real time.

---



