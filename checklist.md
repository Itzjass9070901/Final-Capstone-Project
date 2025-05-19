# Moth Explorer – JavaScript Overview

---

## JavaScript Functionality Rubric

| #  | Category                        | Description & Example                                                                 |
|----|---------------------------------|----------------------------------------------------------------------------------------|
| 1  | **Variable Naming & Indentation** | Descriptive camelCase names with consistent 2-space indenting.  <br>`let searchHistory = [];` |
| 2  | **Function Naming & Modularity** | Clear, modular function names. <br>`function fetchMothData(query) { ... }`           |
| 3  | **Arrays & Objects Usage**      | Structured data with nesting. <br>`const mothEntries = [{ name: 'Luna Moth', ... }]` |
| 4  | **Array Methods**               | Using `.filter()` to process data. <br>`filteredMoths = mothEntries.filter(...);`    |
| 5  | **Looping/Iteration**           | Efficient iteration. <br>`for (const moth of filteredMoths) { ... }`                 |
| 6  | **JSON Data Handling**          | Reading and saving with `JSON.parse()` / `stringify()`. <br>`JSON.parse(localStorage.getItem(...))` |
| 7  | **Web Storage (local/session)** | Stores persistent data. <br>`localStorage.setItem('key', value)`                     |
| 8  | **Saving/Retrieving User Data** | Restores preferences/history. <br>`const user = localStorage.getItem('username')`    |
| 9  | **Cookies with Expiry**         | `document.cookie = "theme=dark; max-age=604800"`                                     |
| 10 | **DOM Manipulation**            | Create/update elements. <br>`document.createElement('div')`                          |
| 11 | **CSS Manipulation via JS**     | Modify class/style via JS. <br>`body.classList.toggle('dark')`                      |
| 12 | **Theme Preference**            | Save/load dark/light theme. <br>`localStorage.setItem('theme', 'dark')`             |
| 13 | **Comments & Code Readability** | Informative inline comments. <br>`// Fetch moth data from API`                      |
| 14 | **Error Handling & Debugging**  | Try/catch and console logs. <br>`try { ... } catch(e) { console.error(e) }`         |
| 15 | **Regex Validation**            | Input validation using RegEx. <br>`/^[a-zA-Z\s]+$/.test(input)`                     |
| 16 | **Timer & Date Object**         | Use `Date()` for timestamping. <br>`new Date().toLocaleString()`                    |
| 17 | **Math, String, Random Methods**| Use built-ins like `Math.random()` <br>`Math.floor(Math.random() * n)`              |
| 18 | **Event Listeners & Shortcuts** | Add key/mouse listeners. <br>`addEventListener('keydown', handler)`                 |
| 19 | **Real-time Search & History**  | Update results on input. <br>`input.addEventListener('input', () => { ... })`       |
| 20 | **CRUD Functionality**          | Add/Edit/Delete functionality. <br>`moths.push(newMoth)` + `localStorage.setItem(...)` |

---

## Code Highlights

- Real-time search with debounce support for better performance.
- Search history maintained via dynamic buttons.
- Persistent dark/light theme preference stored with localStorage.
- Error-safe fetch and data parsing with try/catch blocks.
- Modular, well-commented, and readable codebase.

---

## File Structure (Relevant JS)

├── script.js # Main JavaScript logic including:
│ # - Data arrays and objects (mothEntries)
│ # - Search functionality with .filter()
│ # - DOM manipulation (createElement, appendChild)
│ # - Event listeners for input and keyboard shortcuts
│ # - localStorage/sessionStorage for theme and timer
│ # - Cookie setting with expiry for theme preferences
│ # - CRUD functions for managing moth data
│ # - Timer using Date() and setInterval()
│ # - Regex validation for user inputs
│ # - Error handling with try/catch
│
├── index.html # HTML with script and style references
└── styles.css # Styling including dark/light themes